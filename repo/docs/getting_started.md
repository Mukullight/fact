
# Getting started

Nullval a state of the art package for treatment of null values and outliers. Below is the installation and the usage guide for the package.

Details about the package. [^1] 
Python, you can install nullval with [`pip`][pip] package manager
  [^1]:
    This package is optimal trade order execution 


  [pip]: #with-pip


## Creating a python virtual environment

Before the installation of the package create a virtual environment with the supported python version 

we recommend using python version == 3.12.0

=== "command"
    ``` 
    conda create --name myenv python=3.12.0
    ``` 

replace myenv with the desired name of your virtual environment

after te virtual environment is created activate the virtual environment using the command


=== "command"
    ``` 
    conda activate myenv
    ``` 


if you are using colab or other online based jupter notebooks run the following command below


=== "command"
    ``` 
    !wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.11.0-Linux-x86_64.sh
    !chmod +x Miniconda3-py39_4.11.0-Linux-x86_64.sh
    !bash ./Miniconda3-py39_4.11.0-Linux-x86_64.sh -b -f -p /usr/local
    !rm Miniconda3-py39_4.11.0-Linux-x86_64.sh
    !conda update conda
    !conda create -n myenv python==3.9.19
    %%shell
    eval "$(conda shell.bash hook)"
    conda activate myenv
    ``` 






## Installation Guide

### with pip <small>recommended</small> { # with-pip data-toc-label="with pip" }

requirements can be downloaded using installed using  [Python package] and can be installed with
`pip`, ideally by using a [virtual environment]. 

=== "Command"

    ``` 
    pip install -r requirements.txt
    ``` 


---

for more information please connect with me on linkedin in github 
# Connect with me

 ![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white) --> [linkedin](https://www.linkedin.com/in/mukul-namagiri-434427190/)



---

!!! tip

    If you don't have prior experience with Python, we recommend reading
    [Using Python's pip to Manage Your Projects' Dependencies], which is a
    really good introduction on the mechanics of Python package management and
    helps you troubleshoot if you run into errors.

  [Python package]: https://pypi.org/project/nullval/
  [virtual environment]: https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment
  [Using Python's pip to Manage Your Projects' Dependencies]: https://realpython.com/what-is-pip/





### with git

the project results can be 5replicated from the repo [GitHub] by cloning the

```
git clone https://github.com/Mukullight/blockhouse
```

  [GitHub]: https://github.com/Mukullight/blockhouse




# Execution 

```
python main.py
```

# Data pre processing 


data pre processing is a import part of data analysis 

The below functions implement the data preprocessing required for the task 


Different attributes of the data frame such as ask price, ask size, bid price and bid size along with the different prices associated with the executed trade such as opening, closing, high, low and the volume of the presented data is studied 


logger setup for easier debugging 



``` python
import logging
from pydantic import BaseModel, Field, validator
from typing import Optional
from typing import Dict, List, Any
import json
import yaml

# Define a Pydantic model for logging configuration
class LoggingConfig(BaseModel):
    level: str = Field("INFO", description="Logging level (e.g., DEBUG, INFO, WARNING, ERROR, CRITICAL)")
    format: str = Field("%(asctime)s - %(name)s - %(levelname)s - %(message)s", description="Log message format")
    datefmt: Optional[str] = Field(None, description="Date format for log messages")

    class Config:
        # Ensure that Pydantic will read values from environment variables or other sources
        env_file = ".env"
        env_file_encoding = 'utf-8'

def setup_logger(config: LoggingConfig) -> logging.Logger:
    """
    Set up the logger based on the given configuration.

    Args:
        config (LoggingConfig): The logging configuration.

    Returns:
        logging.Logger: Configured logger instance.
    """
    # Create a logger instance
    logger = logging.getLogger()
    
    # Set the logging level
    logger.setLevel(config.level.upper())

    # Create a handler for logging to stdout
    handler = logging.StreamHandler()

    # Create and set a formatter
    formatter = logging.Formatter(fmt=config.format, datefmt=config.datefmt)
    handler.setFormatter(formatter)

    # Add handler to the logger
    logger.addHandler(handler)

    return logger


config = LoggingConfig()
logger = setup_logger(config)


``` 



### Python code for the processing the given data 

```python
def preprocess_data(file_path):
    """Load and preprocess bid-ask data."""
    try:
        data = pd.read_csv(file_path)
        data = data.dropna()

        # Step 1: Find the maximum bid price and its corresponding column
        data['max_bid_price'] = data[['bid_price_1', 'bid_price_2', 'bid_price_3', 'bid_price_4', 'bid_price_5']].max(axis=1)
        logger.info('The maximum bid price is calculated.')
        
        # Calculate slippage
        data["slippage"] = (data["close"] - data["max_bid_price"]) * data["volume"]
        logger.info('Slippage is appended to the DataFrame.')

        return data
    except FileNotFoundError:
        logger.error(f"File not found: {file_path}")
        return None


```

Purpose: Load and preprocess bid-ask data from a CSV file.
Key Operations:
Reads a CSV file into a DataFrame and drops rows with missing values.
Calculates the maximum bid price from five specified bid price columns.
Computes slippage as the product of the difference between the closing price and the maximum bid price, multiplied by the volume.
Returns: The preprocessed DataFrame with new columns for maximum bid price and slippage.
Error Handling: Logs an error message if the file is not found.




### Python code for the dividing the data frame into chucks for each trading day 
```python
def save_chunks(df, output_dir, timeframe=390):
    """Save the DataFrame in chunks of specified timeframe."""
    os.makedirs(output_dir, exist_ok=True)
    
    for i in range(0, len(df), timeframe):
        chunk = df.iloc[i:i + timeframe]
        # Save each chunk to a CSV file
        chunk.to_csv(os.path.join(output_dir, f'timeframe_{i // timeframe + 1}.csv'), index=False)
        logger.info(f'Saved chunk {i // timeframe + 1} to CSV.')


```

Purpose: Save the DataFrame in chunks based on a specified timeframe.
Key Operations:
Creates the output directory if it does not exist.
Iterates through the DataFrame in increments of the specified timeframe (default 390).
Saves each chunk as a separate CSV file with a sequential filename (e.g., timeframe_1.csv).
Logging: Confirms each chunk saved successfully.

# Preprocessing and getting the final files 

```python

def process_input_files(input_dir):
    """Process CSV files in the input directory."""
    for filename in os.listdir(input_dir):
        file_path = os.path.join(input_dir, filename)

        # Only process CSV files
        if filename.endswith('.csv'):
            df = pd.read_csv(file_path)

            # Check the number of rows
            if len(df) == 390:
                # Add a 'step' column from 1 to 390
                df['step'] = range(1, 391)
                df.to_csv(file_path, index=False)
                logger.info(f'Added step column to {filename}.')
            else:
                # Delete the file if it doesn't have 390 rows
                os.remove(file_path)
                logger.info(f'Deleted {filename} due to insufficient rows.')



def merge_csv_files(input_dir):
    output_file = 'merged_file.csv'
    """Merge all CSV files in the specified directory into a single CSV file."""
    all_data = []
    
    for filename in os.listdir(input_dir):
        if filename.endswith('.csv'):
            file_path = os.path.join(input_dir, filename)
            df = pd.read_csv(file_path)
            all_data.append(df)
            logger.info(f'Loaded {filename} for merging.')

    merged_df = pd.concat(all_data, ignore_index=True)
    merged_df.to_csv(output_file, index=False)
    logger.info(f'Merged data saved to {output_file}.')
    return merged_df


```


After the rest of the methods are carried out the json files are saved as 

+ agent_trades.json for reinforcement learning 
+ twap_trades.json for twap
+ vwap_trades.json for vwap