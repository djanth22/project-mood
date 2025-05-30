## Project Mood is a little idea to help show moods and journal feelings and thoughts. The project started as a way to help express the way I feel and vent excess frustrations, thoughts, hopes, anxieties etc. To better help in my own journey through struggles with mental health.

# The goals/aims/features of Project mood

- being able to choose a mood that reflects current feelings and have that update instantly on the web app

- a journal section to jot down thoughts or feelings more directly and with as much or little detail as one would like to

- the ability to connect with friends and loved ones as a way for better communications of how you feel when struggling to talk or express such things directly, through a feed that someone you are connected with can see and interact with

- the ability to hide or privatise posts/entries so that these are only visible to you and no one else, should you have connections that you may not want to see certain things in the jounal entries without limits.

- possibility of commenting, reacting, or engaging with entries in a connections feed for support or help

- the ability to delete a journal entry or simply make adjustments if needed

- possibly more TBD

# Things to keep in mind

- these entries are not to be permanent only as long as they are needed - a feature may be needed for either reviewing entries done by the poster to decide which to keep and which to delete - a simple prompt of sorts or perhaps a timer that automatically deletes entries after a certain period of time has elapsed. Should the latter be the case, there would likely need to also be a system in place for 'saving' these entries in a favourites style panel/page for the sake of making sure only the entries that are not 'starred' are deleted after the elapsed time - the exact time of which is still to be decided

- This is NOT a social media site/app, as such there is no need for upvotes, dislikes or necessarily comment type interactions seen on many platforms. There should be some level of interaction from connections should a person be wanting to reach out for help but this is not a place for bullying or added trauma of any kind. with this in mind - a profanity filter type mechanism should be in place to prevent the posting of comments that encourage any harm or negativity. This will require some research in to how something like this can be implemented

- While the different aspects of the app at this stage are to be designed around using different pages and a navigation based system, the app needs to be quite simple and intuitive - also preference based customisations should be considered later once everything is more or less functional

- more TBD

## progress log

This log will follow a simple format and is to supplement the github commit log and add a bit more insight into any changes that may not be evident between each commit and will be as follows

# date day/month/year

# progress - what has been done

# 05/05/2025

- first log entry, exciting stuff. Set up for the app using Next.js and refamiliarising myself with previous projects to plan out this project and how I would like it to function.
- so far so good, but I do not expect too much progress done today in terms of functionality, but I am hoping that some of what I need comes back to me through reviewing older projects so that I can at least begin to put everything together. I am expecting plenty of bugs

# 14/5/2025

- after a few days of chill and planning finally got around to getting together a base mock-up for how I would want the main mood selection page to more or less look, minus final styling options. some work was done on 06/05/2025 and 12/05/2025 but mainly focused on setting up some components and testing a couple of things for the sake of refreshing knowledge. there's likely not much more I can do without setting up the database and log in options so those naturally will be my next steps.
- need to look over previous projects with database integration to refamiliarise myself with SQL.

# (continued)

- set up for user log in/sign up complete, mostly. commented out for the time being so that the database connection can be set up first, next step will be to crerate the necessary tables and set up the links between and then get the dtatbase info and queries set up in the app itself. being a little vague on these steps primarily because I dont 100% know how this will be set up in terms of the relations between tables or exactly the kinds of colums I'll need but also because this isnt a tutorial, just a log for the sake of keeping track of progression

# (continued...again)

- added the database connection after crerating the main tables in supabase. I may need one or two more later on but for now it all works as intended.
- needed to debug an error where the connection to the database wasnt working which wasn't fun but it should be working now. however, I'd be daft not to expect further bugs or issues.
- now that this has been set up I should be able to make further progress on the features and functionality of the web app, hopefully the next update will be fairly exciting

# 23/05/2025

- added moods table to database, updated navigation tabs for future use and features along with updating the joiin date info. next steps will be getting the buttons for the mood list to update the current mood of the user

# 26/05/2025

- updates with the main UI, though final changes will be made later, mood options now togglable to be shown or hidden and there's space for a hotbar feature. a search bar will hopefully be added as the list of moods increases and future plans involve emojis or similar imagery to go along with the mood name. the moods are selectable and they do update the current mood of the user. a lot of frustration getting these to work together but it's seemingly not completely broken, so that is a positive. more buggs to come with the next few features. next steps hopefully are to add the search function and allow for mood selection that way.

# 30/05/2025

- updates for edit profile page and setting up mock up for a search feature on the home page for the mood selecxtion to save time when selecting a mood. not sure if this will go the way I want it to so I will be doing a little research and see some examples of this used to get an idea of filtering the results from the moodlist. Currently it is set up as its own component for now, but I may have an idea to clean this up later. I have also added a couple smaller elements like the user button in the header. My next steps will be the aforementioned research and to possibly resolve an idea I had around the posts feature for privacy so that there wont be any ethical concerns with private posts being visible to anyone. the posts feature is not yet implemented but concerns around simply hiding these from others in the users connections list, has me thinking I had best figure out how to tackle this issue so that they arent simply hidden but also not readable by myself in the database so as to not cross any ethical boundaries.

- I am aware that this application may not be used widely after it is deployed but given the plan to have people I know test and of course use the application should they wish to do so, I want to be able to assure everyone that posts marked as private will only be visable and readable by them.
