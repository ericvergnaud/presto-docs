#!/bin/bash
echo "Are you using the latest platform version?"
read -p "version to publish: " version
read -p "release name: " name
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.13.jdk/Contents/Home
mvn versions:set -DnewVersion=$version -DgenerateBackupPoms=false
mvn clean deploy -P deploy -DskipTests=true
deploy=$?
mvn versions:set -DnewVersion=0.0.1-SNAPSHOT -DgenerateBackupPoms=false
if [ $deploy -eq 0 ] 
then
	tag=v$version
	json="{ \"tag_name\": \"$tag\", \"name\": \"$name\" }"
	rm -f release.json
	echo $json >> release.json
	curl --request POST \
		 --header "Content-Type: application/json" \
		 --data @release.json \
		 --header "Authorization: token $(cat token.txt)" \
		 --url https://api.github.com/repos/prompto/prompto-docs/releases
else
	echo $deploy
fi
