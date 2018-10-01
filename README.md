# vueblog
Blog made in Vue.js

This time, I'm gonna make something new: A Front end for a kinda of blog made entirely in Vue.js.

Like in my [previous](https://github.com/gersonmontenegro/cv) [personal projects](https://github.com/gersonmontenegro/cinema), I'm gonna plan a little bit about it, so, this process will have:

 1. The basic idea.
 2. App structure.
 3. App scheme.
 4. Mockups - Design.
 5. Some informal EDT.

Then, I'll start to code.

1. The basic idea

I need a web application where the users can read posts, and an admin to be able to login, create, update, and delete posts.

Sounds simple, but it doesn't, because if I want to make something with a minimum of quality, it required a lot of work, details, time, etc.

2. App structure

![](https://lh3.googleusercontent.com/VcgK5a_-nA3bTMEZqTI4cumA51RhV7i9_qRurfs8mYF2kZintsLIrX61I0mweyPVwPaoT_wt5I7s=s500)

As simple as possible, at least right now with the main idea. If there is more time for more, will be ok.

3. App scheme
![enter image description here](https://lh3.googleusercontent.com/xL3m-Mgf-f2yKfaCSJ12EGgi1uucjTdKugd2CaPDypG-LH3xCeig47ZXWJFTq1jUHLoHq9uzJ-7O=s500)

4. Mockups - Designs.
Yes, usually those titles are in separate states, but this time I should di it this way because the time.

I draw some idea about what I want to do:

*Home*

![](https://lh3.googleusercontent.com/Fb_ZnwzMKAtZzfrmU5kiIAmNb7ezijjepbKI0OtYsbLk96u71ydY0jPw0-wS2bvD58UG2kY_1PVf=s500)

This page will show a list of post published by the admin.

![](https://lh3.googleusercontent.com/QXlk6HiUT-ns5NrO75Drqrt5H2mo-YgLxluOwwZk__L7B_ml9oK_EBV0NfH6m-7kibMQBA4KN73m=s300)

I think there is not too much to say about a Login interface.

*View posts as an admin*

![](https://lh3.googleusercontent.com/1jLkYg2mSHaTC3140jWrNV8qTnosZehG59VQ2fC2Oqz_G6nQ5SMHXSumUZ5RiWZFVqn3346KgiCD=s500)

When the admin has logged into the system, his view change a little bit, so he can edit/remove, and add posts.

5. Some informal EDT

![](https://lh3.googleusercontent.com/HzLeKG23OfK-tm1xXfBnVwJmQ8o_zKNaQZBOS8peo9wiVZWdElvlAQ8s6YpvGmLiOfN_jbGJFKuD=s600)

Yes, is not an strict one, but I need a baseline in order to make the project.

Actually, it is possible that some points changes in the future. It depends from a few factors, like the time, tasks completed, etc.

At this momento, and after a few hours, I got the home layout. Is quite different compared with the original design, but I think is better:

![](https://lh3.googleusercontent.com/V79XTALlpNR0EiZ_pDuU_Qx5wDB8vAAKyzev7QX6QIy3dRIL8XvV0ZTS6N_oBeoIJIHIGiNV0CLn=s600)

I've painted every component with a different color to explain that every part in the screen is an element ready to use, not only inside a group, but isolated as well.

Enable the text editor maybe take some time, so, I'll leave this screen for now, and I'm going to create the login interface, because with the current elements, I finished the next points according to the plan:

 - Home (2.1.3)
 - Admin home (2.1.5)

And of course, is responsive thanks Bootstrap :)

Well, I got Login right now, and I started to add some o interactivity in order to show/hide the PostsContainer component, or the Login component using and emitter to do that, because the variable that controls which component is showed belongs to the parent component from the TopBar component.

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/open_postscontainer_login.gif" width="300px">

The way like the emitter works is described in the next graphic:

![](https://lh3.googleusercontent.com/6bAqX7wK-I1CU0kgPkhxRkNJRNTDk4ZhdrYWj821AkTPq_p8QDSJIykCGCFtvogDt2r_F5vVh8qY=s900)

Components TopBar, PostsContainer y Login are at the same level that the property *currentPage*, who is a prop in PostContainer and Login. Inside these last two components, there is a validation that shows/hide the component according the prop value.

Inside TopBar, every button makes the change to the currentPage variable through the emitter.

That's all. I liked the final result.

> At this moment, and after wasted at least 4-5 hours trying to solve an issue with
> bootstrap compilation, I decided start a new project and integrate it
> with the repository version. To be honest, I didn't know what happen,
> maybe because Vue.js is new for me, and I don't know all its tricks.
> 
> Now I can continue with the project.

Get the Wygiwys plugin for Vue wasn't difficult, or at least not as difficult as use another plugins, and the final result is pretty cool:

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/wygiwys.gif" width="300px">

I had just implemented the modal to confirm remove a post before published my last commit until this moment.

I found some really cool to add: transitions. I like a lot animations inside an app, but, obviously, with out over kill the app with to much of them.

So, I decided that add an animation before remove an element could be a good idea for the UX. And after a few time understanding and implementing, this is the result:

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/remove_item_with_transitio.gif" width="300px">

The last interface is about add a post, but right now I have all the elements to do that option without problems, I guess, so, I'm going to start with the backend using Laravel 5.7.

So, at this moment I've been working in the lasts requirements, and I already got:

 1. Load posts from server database.
 2. Login system, with a nice [notification](https://github.com/euvl/vue-notification) message.
 3. Logout option.
 4. Validate edit buttons according to the user session.

Below I'm gonna show those points:

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/login.gif" width="300px">

One of the best indicators that tell you that the current project is about to finish, is because the caos started to disappear. The reason why I said that, is because Adding a post wasn't difficult at all.

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/adding_new_post.gif" width="300px">

Now, I'm going to edit, and remove an existing post.

<img src="https://github.com/gersonmontenegro/vueblog/blob/master/src/assets/gif/edit_remove.gif" width="300px">

And after maybe an hour, at least I finished the complete requirement, and I'm gonna make an application scheme in order to show a general idea of the work that I just made.
