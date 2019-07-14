
# Activity 3 - Commit names and merging conflicts

## Purpose

The purpose of this activity is to get confident with git commit names and resolving conflicts during merges.

### Steps

Before doing anything, make sure you have a terminal window open located at the project base folder:

```
cd <project folder, you can drag this from finder>
```

First, lets see what the current status is of our project to git. In your terminal type:

```
git status
```

Paste the output from the terminal here:

```
[Replace this text with your terminal output]
```

Find the file poem.txt in this folder.

It currently has a number of lines:

```

I wrote this poem for my companion

roses are red and
violets are blue so
everything appears to work
```

Before we modify anything, we are going to check which branch we are on. We can get this information from our `git status` command. It should read that we are on branch `master`:

```
On branch master
```

We are now going to checkout our branch from last lesson `my-changes`.

```
git checkout my-changes
```

If we try to merge `master` into this branch it won't do anything because the two are currently in sync. You can try this with `git merge master`. It'll look something like this:

```
?>git merge master
Already up to date.
```

Now make some changes to the poem. For now, just edit the last line. It's currently a haiku so you could come up with a different witty 7 syllable line. Afterward commit the changes.

You should now checkout `master`. Similar to last lesson, we want to make changes on master in order that two different realities exist on the different branches, otherwise we won't have anything to merge.

This time make a change to the last line again of the poem, this time on the `master` branch. Make sure it's different words from your `my-changes`. By making changes on the same we are forcing git to get our intervention since during a merge git has no way of determining either of the two lines should be kept, or which order they should be in if they are both kept.

Let's checkout `my-changes` again and we will attempt to merge `master`. It will with a merge conflict.

```
git add 1-cloning-and-committing/poem.txt
```

If you run `git status` again the output should've changed. Include the new `git status` output below:

```
[Replace this text with your terminal output from git status]
```

Git shows changes that you've added in green to show that it will remember them when you commit.

If we are happy to commit the files that git has included, we commit them with `git commit`. We are required to include a message for the commit (so that we know why we made the changes).

```
git commit -m "Put a suitable message in here for your future self"
```

Git will tell us what changes the commit represents. Check `git status` now. It should look like it did at the start.

### Yay you did it!
