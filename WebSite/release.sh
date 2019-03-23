#!/bin/bash
echo "Did you bump the version in the install script?"
read -p "version to publish: " version
read -p "release name: " name
mvn versions:set -DnewVersion=$version -DgenerateBackupPoms=false
deploy=$?
#mvn clean deploy -P deploy -DskipTests=true
mvn versions:set -DnewVersion=0.0.1-SNAPSHOT -DgenerateBackupPoms=false
if [ $deploy = 0 ] then
	tag=v$version
	json="{ \"tag_name\": \"$tag\", \"name\": \"$name\" }"
	rm -f release.json
	echo $json >> release.json
	curl --request POST \
		 --header "Content-Type: application/json" \
		 --data @release.json \
		 --user ericvergnaud:$(cat password.txt) \
		 --url https://api.github.com/repos/prompto/prompto-docs/releases
fi
	 