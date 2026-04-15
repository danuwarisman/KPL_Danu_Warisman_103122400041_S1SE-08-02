import json

def get_base_url():
    with open('config.json', 'r') as f:
        config = json.load(f)
    return config['base_url']
