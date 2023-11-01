from glob import glob
import os
import mne
import numpy as np
import pandas as pd
import pickle

with open('models/cnnmodel.pickle' , 'rb')as f:
 model=pickle.load(f)

all_file_path=glob('temp_folder/*.edf')
file_path=all_file_path[0]

def read_data(file_path_):
    datax=mne.io.read_raw_edf(file_path_,preload=True)
    datax.set_eeg_reference()
    datax.filter(l_freq=1,h_freq=45)
    epochs=mne.make_fixed_length_epochs(datax,duration=25,overlap=0)
    epochs=epochs.get_data()
    return epochs #trials,channel,length

def function(file_path):
    epochs = read_data(file_path)
    data_reshaped = epochs.swapaxes(2, 1)  # (trials, channel, length) -> (channel, trials, length)
    data_reshaped = data_reshaped[:, :, :6250]  # Select the first 6250 time steps  
    return data_reshaped

def get_prediction(file_path):
    data_reshaped = function(file_path)
    result = model.predict(data_reshaped)
    count_above_0_5 = np.sum(result > 0.5)
    total_elements = result.size
    if count_above_0_5 / total_elements > 0.5:
       output = 1
       print("Output:", output)
    else:
       output = 0
       print("Output:", output)
    return output

output = get_prediction(file_path)


