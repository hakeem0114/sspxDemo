# SSPX Commercial Site Demo (Front-End)
1. Overview
2. Prerequisites
3. Packages Used
4. Improvements
5. Deployment Issues

## Overview

## Prerequisites

## Packages Used

## Improvements
1. Familiarize myself with Azure Deployment environments
2. Using localhost for changes is fine but there are some production issues you might run into

3. Create a staging environment in Azure & Github so that an Admin (me) or team member 
can review & approve before pushing to production.


### Deployment Issues
1. After pushing to production, the evironment variable containing the b2c tenant's app's client_id was not processed with azure, 
  breaking the signup/in user flow.
2. Go to the repo. Settings>Security>Secrets & Variables > Actions > Add the secret keys
3. Open the yaml file under gitflows. jobs > build_and_deploy_job > steps > name > -with: -env:
```
        env:  # Add environment variables here
          VITE_APP_ID: ${{ secrets.VITE_APP_ID }}
```
