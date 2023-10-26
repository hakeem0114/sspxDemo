# SSPX Commercial Site Demo (Front-End)
1. Overview
2. Prerequisites
3. Packages Used
4. Improvements

## Overview


## Prerequisites

## ..

## Improvements
1. Familiarize myself with Azure Deployment environments
2. Using localhost for changes is fine but there are some production issues you might run into
* After pushing to production, the evironment variable containing the b2c tenant's app's client_id was not processed with azure, 
  breaking the signup/in user flow.
* Go to the repo. Settings>Security>Secrets & Variables > Actions > Add the secret keys
* Open the yaml file under gitflows & add
```
env:  # Add environment variables here
          VITE_APP_ID=${{ secrets.VITE_APP_ID }}
```
Create a staging environment in Azure & Github so that an Admin (me) or team member 
can review & approve before pushing to production.


### React Router
As more pages are added, better navigation 
