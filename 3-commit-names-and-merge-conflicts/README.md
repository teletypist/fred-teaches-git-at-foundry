
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

Let's checkout `my-changes` again and we will attempt to merge `master`. It will with a merge conflict:

```
?>git merge master
Auto-merging 3-commit-names-and-merge-conflicts/poem.txt
CONFLICT (content): Merge conflict in 3-commit-names-and-merge-conflicts/poem.txt
Automatic merge failed; fix conflicts and then commit the result.
```

If we have a look at the file, we can see that git has inserted some weird symbols.

```
I wrote this poem for my companion

roses are red and
violets are blue so
<<<<<<< HEAD
[the changes you made on the my-changes branch]
=======
[the changes you made on the master branch]
>>>>>>> master
```

Git is trying to explain that you have two sets of changes occurring in one place. As explained in the lesson, git uses the name `HEAD` to talk about the most recent commit made on the current branch you have checked out. The changes from `master` are shown. Note that the series of `<` and the line of `=` are not part of the changes, they are only inserted to make them easier to spot and separate.

In order to resolve the conflict we only need to replace all of the conflict text with a single resolution. What ever you replace it with can be as many of few lines as you want. Often merge conflicts can be large sections of changes depending on where the conflicts occur (this often happens if you move a line of text from one part of a file to another).

Either choose one of the lines to keep or come up with a new line and replace everything including the `<<<<<<< HEAD` and `>>>>>>> master` with your desired change. Save the file. If you now run `git status` it will inform you that you have two versions of the file:

```
?>git status
On branch my-changes
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   3-commit-names-and-merge-conflicts/poem.txt
```

If we now `git add` the changes, git will understand that we have merged the file:

```
?>git status
On branch my-changes
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:

	modified:   3-commit-names-and-merge-conflicts/poem.txt

```

All we need to do now is commit the change and the branches will be considered merged. We can check this by checking out `master` and attempting merging back:

```
?>git merge my-changes
Updating 4801422..d4e986a
Fast-forward
 3-commit-names-and-merge-conflicts/README.md | 36 +++++++++++++++++++++++++++++-------
 3-commit-names-and-merge-conflicts/poem.txt  |  2 +-
 2 files changed, 30 insertions(+), 8 deletions(-)
```

Fast forward indicates that nothing had to happen, only that we moved along the commit history since there is a direct path from `master` with the changes you first introduces, through the conflict and on to the final merge.

### Yay you did it!
