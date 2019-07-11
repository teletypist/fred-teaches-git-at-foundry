
# Activity 1 - Committing changes

## Purpose

The purpose of this activity is to get used to way that changes to code are 'saved' by git.

### Steps

Find the file poem.txt in this folder.

It currently only has two lines:

```
roses are red
violets are blue
```

Open up the file in a suitable text editor and add an extra two lines to finish the poem.

When you are happy with your witty contribution, open up a terminal window and locate the project folder"

```
cd <project folder, you can drag this from finder>
```

Check that git has picked up your changes by using the `git status` command. In your terminal type:

```
git status
```

Paste the output from the terminal here:

```
[Replace this text with your terminal output]
```

You should have a line something like:

```
modified:   1-cloning-and-committing/poem.txt
```

To save those changes, first we have to let git know we are interested in the change. We can do this by adding the file with `git add <filename>`. You can copy the filename from the `git status` output.

```
git add 1-cloning-and-committing/poem.txt
```
