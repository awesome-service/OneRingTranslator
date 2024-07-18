#!/bin/bash

conda create --prefix $(pwd)/env python=3.10.14

# Initialize conda in the current shell script environment before activating the environment
eval "$(conda shell.bash hook)"

# activate the environment
conda activate ./env

# install dependencies
conda install -y -c conda-forge --file requirements.txt

# modify this line to run your desired Python script and any other work you need to do
python3 run_webapi.py

# deactivate the environment after the script has finished running
conda deactivate
