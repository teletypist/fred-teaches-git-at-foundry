
# Activity 2 - Branching out

## Purpose

The purpose of this activity is to get used to way working in multiple dimensions within git. Created an alternate dimension is called **branching** and bringing things back together is called **merging**.

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

roses are red
violets are blue
create a new branch for breaking changes
or people will be upset when things break
```

Before we modify anything, we are going to check which branch we are on. We can get this information from our `git status` command. It should read that we are on branch `master`:

```
On branch master
```

We are going to create a new branch. The simplest way to create a branch is with `git checkout` command. Let's create a new branch called `my-changes`.

```
git checkout -b my-changes
```

Adding `-b` tells git that we want to create a new branch and to **checkout** (move onto) that branch straightaway.

Let's now check which branch we are on with `git status`. Paste the response below and see if you can see that the branch has changed.

```
[Replace this text with your terminal output]
```

You should have a line something like:

```
Switched to a new branch 'my-changes'
```

Git shows which branch you are on. It's good to keep an eye on branch changes because life can get very ugly if you make and commit changes on `master` if you're supposed to be somewhere else.

Now make some changes to the last two lines of the `poem2.txt` file. Don't make any other changes to the file though.

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
