#!/bin/sh
dir=$(dirname "$0")
<<<<<<< Updated upstream
java -cp "$dir/h2-1.4.200.jar:$H2DRIVERS:$CLASSPATH" org.h2.tools.Console "$@"
=======
java -cp "$dir/h2-2.1.214.jar:$H2DRIVERS:$CLASSPATH" org.h2.tools.Console "$@"
>>>>>>> Stashed changes
