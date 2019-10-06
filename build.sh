#!/bin/bash

cd src 
rm -r ../dist; mkdir ../dist
cd services
for d in *; do
   echo "building...."
   echo "$d"
   cp -R "$d" ../../dist/
   cd ../../dist/"$d"
   for l in *; do      
        cp -R ../../src/helpers/ ./
        cp -R ../../src/config/ ./ 
        cp -R ../../src/models/ ./ 
        cp -R ../../src/controllers/ ./        
    done  
   cd ./controllers/"$d"
   sls offline
   cd ../../../../../..
   cd   
   cd  src/services
done
echo "Running off-line serveless..."
