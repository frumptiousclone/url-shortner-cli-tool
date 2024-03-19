import argparse
import requests
from dotenv import dotenv_values

config = dotenv_values(".env")
url = config['API']

parser = argparse.ArgumentParser(prog = "CLI-url-shortner", description = "shortens long urls", epilog = "Thanks for using")
parser.add_argument("URL", help = "Enter the url")
args = parser.parse_args()

data = {
    'URL': args.URL
}

response = requests.post(url, json=data)
print(response.json())