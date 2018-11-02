#!/usr/bin/env bash
mongod &
cd web
ng build --watch &
cd ../server
/opt/gradle/gradle-4.10.2/bin/gradle build --continuous &
/opt/gradle/gradle-4.10.2/bin/gradle bootRun &