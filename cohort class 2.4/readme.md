`ls -l direct_name` : listing all sub-directories of current directory with their details like - permission ,date ,time-stamp,author etc

`ls -R direct_name`: details of all sub directories

`ls -t` : according to time

`ls -lt` : with the time written

`ls -la` : to see all the hidden files

`ls -lRa` : recursively see all hidden files

`ls -lr` : When you combine -l and -r (ls -lr), it lists files and directories in reverse order (alphabetically or numerically) based on their names.

`ls -s` : according to size we can listing

`ls -lR | grep.json` : to list all the json files with in the directory

`ls Zoo*` -> wild card command by this we can get all the files where Zoo word is there

`ls ..` -> The ls .. command lists the contents of the parent directory of the current working directory.

`rm` -> remove files

`rm -r` -> remove any directory

`chmod` -> change file permissions , modify the read , write and execute permissions of a file

eg: for files these are commands

##

chmod ugo+ // giving permission
chmod ugo- // restricting permission

chmod ugo+r // giving read permission
chmod ugo-r // restricting read permission

chmod ugo+w // giving write permission
chmod ugo-w // restricting write permission

chmod ugo+rw // giving read/write permission
chmod ugo-rw // restricting read/write permission

chmod ugo+rwx // giving read/write/execute permission
chmod ugo-rwx // restricting read/write/execute permission

eg :

for folders these are commands

chmod - ugo+ // giving permission
chmod - ugo- // restricting permission

chmod - ugo+r // giving read permission
chmod - ugo-r // restricting read permission

chmod - ugo+w // giving write permission
chmod - ugo-w // restricting write permission

chmod - ugo+rw // giving read/write permission
chmod - ugo-rw // restricting read/write permission

chmod - ugo+rwx // giving read/write/execute permission
chmod - ugo-rwx // restricting read/write/execute permission

we can also do->>>

chmod -R ugo+r or w or rw or rwx
chmod -R ugo-r or w or rw or rwx

##

for shell script to give permission we can do ->> chmod u+the_permission_name file \_name

for group permission we can do -->> chmod g+the_permission_name file_name

4 -> read
2 -> write
1 -> execute

_lets say one file has permission in this way ->> -rw-r--r--_

_now by specifing digis we can chnage the permissions ._

components of -rw-r--r-- ::

1. The first character (-) indicates the type of the file. In this case, a hyphen (-) denotes that the entry is a regular file. Other possible characters include d for directory, l for symbolic link, c for character special file, and b for block special file.

2. The next nine characters represent the permissions for the file, grouped into three sets of three characters each:

Owner Permissions (rw-): These characters specify what the owner of the file can do with it.

r (read): The owner can read the contents of the file.

w (write): The owner can modify or delete the file.

- (hyphen): Indicates no permission for executing the file.

3. Group Permissions (r--): These characters specify what users in the group that owns the file can do with it.

r (read): Members of the group can read the contents of the file.

- (hyphen): Members of the group cannot modify or execute the file.

4. Others Permissions (r--): These characters specify what all other users
   on the system can do with the file (users not in the owner's group).

r (read): Other users can read the contents of the file.

- (hyphen): Other users cannot modify or execute the file.

_now doing chmod 664 file_name_

this will modify the read write permissions like

6 -> 4+2 it means giving first group read write permission
6 -> 4+2 it means giving 2nd group read write permission
4 -> 4+2 it means giving 3rd group read permission only

_after the command the file permission structure will be : -rw-rw-r--_

_if we do chmod 777 file_name_

_then the file permission structure will be -rwxrwxrwx_

### echo :: echo something

example ::

echo 'hello world!'
echo $PATH

### head and tail command to view tho top and bottom portion of a file

(first and last 10 rows)

### if we wanna see first 20 rows then ->> head -20 file_name

### pipe charcater(|) ->> command 1 | command 2

### tail -n +25 file_name | head -5 file name -->> this will give 5 rows after 25 line

### wc file_name -->> no of line,no of words and no of characters

### grep is a powerful command-line tool used for searching text patterns,phrases,occurances in file

### eg :: `grep "one" file_neme` ->> this will give the occurance of the word one

### `grep -c "one" file_name` --> it will give count of the word "one" in the particular file

### `grep -h "one" file_name` --> it will show the phrases where the word "one" is there in those lines/rows in the particular file

### `grep -hi "one" file_name` --> it will show the phrases where the word "one" is there in those lines/rows in the particular file without judging capital or small cases of letters

### `grep -hir "one" .` --> it will show the phrases where the word "one" is there in those lines/rows in the particular directory with detail

### `grep -hin "one" file_name` --> it will show the phrases where the word "one" is there in those lines/rows in the particular file with prper line no

### `grep -o "one" file_name` --> it will show the particular word "one" in those lines/rows in the particular file

### `grep -w "one" file_name` --> it will show the particular word "one" and addition word in those lines/rows in the particular file

### `grep -A 5 "one" file_name` --> it will show all 5 different rows after occurance of "one"

### `grep -B 5 "one" file_name` --> it will show all 5 different rows before occurance of "one"

### `grep -C 5 "one" file_name` --> it will show all 5 different rows before and after occurance of "one"

### `grep -v "one" file_name` --> it will show all except "one"

`history` will show history of all the commands used

### bash :: these commands or instructions when in big projects are ideally automated using it in scripts because it is also a language which is put together into scripts have the script been executed

`on the first line of our script we must specify which interpreter we would like to use to parse in the secnario , it is bash.thus we put the shebang in the first line of our script`

lets say in `newscript.sh` script we have added some command to run by bash

`A (.sh) file is a shell script, which is a text file containing a sequence of commands for a Unix-based operating system's command-line interpreter, known as the shell. These scripts can automate tasks, run programs, and perform various operations. The .sh extension is a convention to indicate that the file is a shell script, but it's not mandatory for the file to work as a script.`

### eg :: #!/bin/bash

# This is a comment

echo "Hello, World!" # This command prints "Hello, World!" to the terminal

# A simple for loop

for i in {1..5}; do
echo "Iteration $i"
done

by this above commands we created a newfile.sh shell script

now after that by `chmod +x newfile.sh` command we give it the permission to execute

then by typing `./newfile.sh` we can execute that in terminal and get the output as ::

`Hello, World!
 Iteration 1
 Iteration 2
 Iteration 3
 Iteration 4
 Iteration 5 `

`advance commands:sed,awk `

### sed :: The sed (stream editor) command in Linux is used for parsing and transforming text in a file or input stream. It is commonly used for text substitution, deletion, insertion, and search operations.

sed 's/old-text/new-text/' file

This substitutes the first occurrence of old-text with new-text in each line

for more chatgpt

### awk:: most powerful tool , arithmatic operation, calculations ,fetch file

AWK is a powerful programming language used for pattern scanning and processing. It's commonly used in Unix/Linux environments for text processing and data extraction.

Sum values in a column:

awk '{sum += $1} END {print sum}' file

for more eg visit chatgpt

### sed exmple

### we can also show particular word not just by grep command but also sed command :: `sed -n '/ERROR/ p' file_name`

it will show all row with the word ERROR

### for replacement the command is `sed 's/ERROR/CRITICAL/' file_name`

IN place of ERROR , CRITICAL is printed

### for backup of the previous stage the command is `sed -ibackup 's/ERROR/CRITICAL/' file_name`

### for specific no of line where replacement should be done the command is `sed '3 s/ERROR/CRITICAL/' file_name` or `sed '3,5 s/ERROR/CRITICAL/' file_name` for when we are looking from line no 3 to 5

IN place of ERROR , CRITICAL is printed in 3rd line

### awk exmple

like grep to print the rows where the word "ERROR" occurs ::

`awk '/ERROR/{print $0}' file_name.txt`

like sed to substitute the "ERROR" with "CRITICAL" where the word "ERROR" occurs ::

`awk '{gsub(/ERROR/, "CRITICAL")}{print}' file_name.txt`

header and footer adding ::

`awk 'BEGIN {print "LOG SUMMARY\n----------"} {print} END {print "--------\nEND OF LOG SUMMARY"}' file.txt `

`awk '{print $1 , $2}' file.txt` --> picking first and second column data

in case of delimiter :: `awk -F "," '{print $1,$2}' file.txt`

now several arithmetic operations we can also do,, do chatgpt for more
