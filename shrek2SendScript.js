function enviarScript(scriptText){
        var allText = scriptText;
        lines = allText.split("\n"); 

        var i = 0;                  
        function myLoop() {         
            setTimeout(function() {   
                if(lines[i].trim() != ""){
                    console.log(lines[i]); 

                    window.InputEvent = window.Event || window.InputEvent;

                    var event = new InputEvent('input', {
                        bubbles: true
                    });

                    var textbox = document.querySelector('div._1awRl[data-tab="6"]');

                    textbox.textContent = lines[i];

                    textbox.dispatchEvent(event);

                    document.querySelector("button._2Ujuu").click();

                }
                i++;                    
                if (i < lines.length) {           
                    myLoop();             
                }                       
            }, 250)
        }

        myLoop(); 
    }

    enviarScript(`SHREK 2

INT. CASTLE INTERIOR
There is a bed onstage behind a silky curtain, backlit.
PRINCE CHARMING (OS)
Once upon a time in a kingdom far, far away, the king and queen were blessed with a beautiful baby girl. And throughout the land, everyone was happy... until the sun went down and they saw that their daughter was cursed with a frightful enchantment that took hold each and every night. Desperate, they sought the help of a fairy godmother who had them lock the young princess away in a tower, there to await the kiss... of the handsome Prince Charming.
enters gallantly onstage
It was he who would chance the perilous journey through blistering cold and scorching desert traveling for many days and nights, risking life and limb to reach the Dragon's keep. For he was the bravest, and most handsome... in all the land.
looks at the audience
And it was destiny that his kiss would break the dreaded curse. He alone would climb to the highest room of the tallest tower to enter the princess's chambers, cross the room to her sleeping silhouette, pull back the gossamer curtains to find her...
pulls back the curtain to reveal WOLF in the bed. Gasps
WOLF
What?
CHARMING
Princess... Fiona?
WOLF
No!
CHARMING
relieved
Thank heavens. Where is she?
WOLF
She's on her honeymoon.
CHARMING
Honeymoon? With whom?
EXT. THE SWAMP
SHREK
It's so good to be home! Just you and me and...
DONKEY
offstage
One is the loneliest number that you ever do...
enters
Two can be as bad as one...
SHREK
Donkey?
DONKEY
Shrek! Fiona! Aren't you two a sight for sore eyes! Give us a hug, Shrek, you old love machine. And look at you, Mrs. Shrek. How 'bout a side of sugar for the steed?
SHREK
Donkey, what are you doing here?
DONKEY
Taking care of your love nest for you.
SHREK
Oh, you mean like... sorting the mail and watering the plants?
DONKEY
Yeah, and feeding the fish!
SHREK
I don't have any fish.
DONKEY
You did.
looks around for the fish
SHREK
Look at the time. I guess you'd better be going.
DONKEY
Don't you want to tell me about your trip? Or how about a game of Parcheesi?
FIONA
Actually, Donkey? Shouldn't you be getting home to Dragon?
DONKEY
Oh, yeah, that. I don't know. She's been all moody and stuff lately. I thought I'd move in with you.
FIONA
You know we're always happy to see you, Donkey.
SHREK
But Fiona and I are married now. We need a little time, you know, to be together. Just with each other. Alone.
DONKEY
Say no more. You don't have to worry about a thing. I will always be here to make sure nobody bothers you.
SHREK
Donkey!
DONKEY
Yes, roomie?
SHREK
You're bothering me.
DONKEY
Oh, OK. All right, cool. I guess... Me and Pinocchio was going to catch a tournament, anyway, so...Maybe I'll see y'all Sunday for a barbecue or something.
SHREK
He'll be fine. Now, where were we?
giggles
Oh.I think I remember. Donkey!
DONKEY
I know, I know! Alone! I'm going! I'm going. What do you want me to tell these other guys?
ROYAL MESSENGER enters to fanfare.
MESSENGER
clears throat
"Dearest Princess Fiona. You are hereby summoned to the Kingdom of Far, Far Away for a royal ball in celebration of your marriage at which time the King will bestow his royal blessing... upon you and your...uh... Prince Charming. Love, the King and Queen of Far, Far Away. aka Mom and Dad."
FIONA
Mom and Dad?
SHREK
Prince Charming?
DONKEY
Royal ball? Can I come?
SHREK
We're not going.
FIONA & DONKEY
What?
SHREK
I mean, don't you think they might be a bit...shocked to see you like this?
FIONA
Well, they might be a bit surprised. But they're my parents, Shrek. They love me. And don't worry. They'll love you, too.
SHREK
Yeah, right. Somehow I don't think I'll be welcome at the country club.
FIONA
Stop it. They're not like that.
SHREK
How do you explain Sergeant Pompous and the Fancy Pants Club Band?
FIONA
Oh, come on! You could at least give them a chance.
SHREK
To do what? Sharpen their pitchforks?
FIONA
No! They just want to give you their blessing.
SHREK
Oh, great. Now I need their blessing?
FIONA
If you want to be a part of this family, yes!
SHREK
Who says I want to be part of this family?
FIONA
You did! When you married me!
SHREK
Well, there's some fine print for you!
FIONA
exasperated sigh
So that's it. You won't come?
SHREK
Trust me. It's a bad idea. We are not going! And that's final!
ALL exit.
EXT. SHREK SWAMP
SHREK, DONKEY and FIONA re-enter with GINGY and PINOCHIO.
SHREK is carrying luggage.
GINGY
walking by and picking up the ‘warning, Ogres sign’
Don't worry! We'll take care of everything.
PINOCHIO
Hey, wait for me.
DONKEY
Hit it! Move 'em on! Head 'em up! Head 'em up, move 'em on! Head 'em up! Move ‘em on, Rawhide! Knock 'em out! Pound 'em dead! Make 'em tea! Buy 'em drinks! Meet their mamas! Milk 'em hard! Rawhide! Yeehaw!
SHREK, FIONA and DONKEY pass back and forth on the stage every time the E/E (Enter/exit symbol appears)
DONKEY
Are we there yet?
SHREK
No.
DONKEY
Are we there yet?
FIONA
Not yet.
DONKEY
OK, are we there yet?
SHREK
No.
DONKEY
Are we there yet?
FIONA
No!
DONKEY
Are we there yet?
SHREK
Yes.
DONKEY
Really?
SHREK
No!
DONKEY
Are we there yet?
SHREK & FIONA
No!
DONKEY
Are we there yet?
SHREK
mimics
Are we there yet?
DONKEY
That's not funny. That's really immature.
SHREK
That's not funny. That's really immature.
DONKEY
This is why nobody likes ogres.
SHREK
This is why nobody likes ogres.
DONKEY
Your loss!
SHREK
Your loss!
DONKEY
I'm gonna just stop talking.
SHREK
Finally!
DONKEY
This is taking forever, Shrek. There's no in-flight movie or nothing!
SHREK
The Kingdom of Far, Far Away, Donkey. That's where we're going. Far, far --
softly
away!
DONKEY
All right, all right, I get it. I'm just so darn bored.
SHREK
groans
Are we there yet?
FIONA
chuckles
Yes!
DONKEY
Oh, finally!
ALL exit.
EXT. FAR FAR AWAY - CASTLE ENTRANCE
MESSENGER
Announcing the long-awaited return of the beautiful Princess Fiona and her new husband.
SHREK and FIONA enter off-stage left.
KING and QUEEN enter off-stage right.
FIONA
Well, this is it.
KING
This is it.
MESSENGER
This is it.
exits
SHREK
chuckles
So...you still think this was a good idea?
FIONA
Of course! Look. Mom and Dad look happy to see us.
KING
Who on earth are they?
QUEEN
I think that's our little girl.
KING
That's not little! That's a really big problem. Wasn't she supposed to kiss Prince Charming and break the spell?
QUEEN
Well, he's no Prince Charming, but they do look...
SHREK
Happy now? We came. We saw them. Now let's go before they light the torches.
FIONA
They're my parents.
SHREK
Hello? They locked you in a tower.
FIONA
That was for my own...
KING
Good! Here's our chance. Let's go back inside and pretend we're not home.
QUEEN
Harold, we have to be...
SHREK
Quick! While they're not looking we can make a run for it.
FIONA
Shrek, stop it! Everything's gonna be...
KING
A disaster! There is no way...
FIONA
You can do this.
Both parties begin moving toward eachother
SHREK
I really...
KING
Really...
QUEEN
don't...
SHREK
want...
FIONA
to...
KING
be...
SHREK
Here!
FIONA
Mom... Dad...I'd like you to meet my husband... Shrek.
SHREK
Well, um...It's easy to see where Fiona gets her good looks from.
chuckles nervously
DONKEY ENTERS SHAKING OFF A GUARD
DONKEY
off-stage
What do you mean, "not on the list"? Don't tell me you don't know who I am.
enters
What's happening, everybody? Thanks for waiting. I had the hardest time getting into this place.
KING
No! No! Bad donkey! Bad! Go!
FIONA
No, Dad! It's all right. It's all right. He's with us. He helped rescue me from the dragon.
DONKEY
That's me: the noble steed.
SHREK
Oh, boy.
QUEEN
So, Fiona, tell us about where you live.
FIONA
Well...Shrek owns his own land. Don't you, honey?
SHREK
Oh, yes! It's in an enchanted forest abundant in squirrels and cute little duckies and...
DONKEY
laughing
What? I know you ain't talking about the swamp.
KING
An ogre from a swamp. Oh! How original.
QUEEN
I suppose that would be a fine place to raise the children.
SHREK AND KING COUGH INVOLUNTARILY
SHREK
It's a bit early to be thinking about that, isn't it?
KING
Indeed.
QUEEN
Harold!
SHREK
What's that supposed to mean?
FIONA
Dad. It's great, OK?
KING
For his type, yes.
SHREK
My type?
KING
I suppose any grandchildren I could expect from you would be...
SHREK
Ogres, yes!
QUEEN
Not that there's anything wrong with that. Right, Harold?
KING
Oh, no! No! Of course, not! That is, assuming you don't eat your own young!
FIONA
Dad!
SHREK
No, we usually prefer the ones who've been locked away in a tower!
FIONA
Shrek, please!
KING
I only did that because I love her.
SHREK
Aye, day care or dragon-guarded castle.
KING
You wouldn't understand. You're not her father!
QUEEN
Harold!
FIONA
Shrek!
SHREK
Fiona!
KING
Fiona!
FIONA
Mom!
QUEEN
Harold...
DONKEY
Donkey!
FIONA exits crying.
EXT. STREETS OF FAR FAR AWAY
FIONA enters, she hears the voice of FAIRY GODMOTHER
FAIRY GODMOTHER (FG)
Your fallen tears have called to me So, here comes my sweet remedy I know what every princess needs For her to live life happily...
Both gasp.
FG
Oh, my dear. Oh, look at you. You're all grown up.
FIONA
Who are you?
FG
Oh, sweet pea! I'm your fairy godmother.
FIONA
I have a fairy godmother?
FG
Shush, shush. Now, don't worry. I'm here to make it all better. With just a wave of my magic wand, your troubles will soon be gone. For example, how about a sporty carriage to ride in style, with a sexy man-boy chauffeur named Kyle?
KYLE enters.
FIONA
Thank you very much, Fairy Godmother, but...
SHREK enters.
SHREK
Fiona? Fiona.
FIONA
Oh, uh...Fairy Godmother... I'd like you to meet my husband, Shrek.
FG
Your husband? What? What did you say? When did this happen?
FIONA
Shrek is the one who rescued me.
FG
But that can't be right.
SHREK
Oh, great, more relatives!
FIONA
She's just trying to help.
SHREK
Good! She can help us pack. Get your coat, dear. We're leaving.
FIONA
What? I don't want to leave. When did you decide this?
SHREK
Shortly after arriving.
FIONA
Look, I'm sorry...
FG
No, that's all right. I need to go, anyway. But remember, dear. If you should ever need me... happiness...is just a teardrop away.
SHREK
Thanks, but we've got all the happiness we need. Happy, happy, happy...
FG
So I see. Let's go, Kyle.
FIONA
Very nice, Shrek.
SHREK
What? I told you coming here was a bad idea.
FIONA
You could've at least tried to get along with my father.
SHREK
I don't think I was going to get Daddy's blessing, even if I did want it.
FIONA
Do you think it might be nice if somebody asked me what I wanted?
SHREK
Sure. Do you want me to pack for you?
FIONA
You're unbelievable! You're behaving like a...
SHREK
Go on! Say it!
FIONA
Like an ogre!
SHREK
Here's a news flash for you! Whether your parents like it or not...I am an ogre! And guess what, Princess? That's not about to change.
FIONA
I've made changes for you, Shrek. Think about that.
exits
DONKEY
That's real smooth, Shrek. "I'm an ogre!"
INT. KING AND QUEEN’S BEDCHAMBER
KING
I knew this would happen.
QUEEN
You should. You started it.
KING
I can hardly believe that, Lillian. He's the ogre. Not me.
QUEEN
I think, Harold, you're taking this a little too personally. This is Fiona's choice.
KING
But she was supposed to choose the prince we picked for her. I mean, you expect me to give my blessings to this... thing?
QUEEN
Fiona does. And she'll never forgive you if you don't. I don't want to lose our daughter again, Harold. Oh, you act as if love is totally predictable. Don't you remember when we were young? We used to walk down by the lily pond and...
KING
they were in bloom...
QUEEN
Our first kiss.
KING
It's not the same! I don't think you realize that our daughter has married a monster!
QUEEN
Oh, stop being such a drama king.
KING
Fine! Pretend there's nothing wrong! La, di, da, di, da! Isn't it all wonderful! I'd like to know how it could get any worse!
FG
out on the balcony
Hello, Harold.
KING gasps.
QUEEN
What happened?
KING
Nothing, dear! Just the old crusade wound playing up a bit! I'll just stretch it out here for a while.
FC
We need to talk.
KING
Actually, Fairy Godmother, off to bed.
yawns
Already taken my pills, and they tend to make me a bit drowsy. So, how about... we make this a quick visit. What?
Bumps up against two armed guards
Oh, hello. Ha-ha-ha! So, what's new?
FG
You remember my son, Prince Charming?
CHARMING enters.
KING
Is that you? My gosh! It's been years. When did you get back?
CHARMING
Oh, about five minutes ago, actually. After I endured blistering winds, scorching desert...I climbed to the highest room in the tallest tower...
FG
Mommy can handle this. He endures blistering winds and scorching desert! He climbs to the highest bloody room of the tallest bloody tower...And what does he find? Some gender-confused wolf telling him that his princess is already married.
KING
It wasn't my fault. He didn't get there in time.
FG
Harold.
GUARD reaches into his pocket
You’ve forced me to do something I really don't want to do.
KING
gasps
What is that? What have you got there?
GUARD pulls out a cellphone and gives it to FG.
FG
My diet is ruined! Yes, I’d like two Renaissance Wraps, no mayo... chili rings...
CHARMING
I'll have the Medieval Meal.
FG
One Medieval Meal and, Harold... Curly fries?
KING
No, thank you.
FG
Sourdough soft taco, then?
KING
No, really, I'm fine.
FG
Nothing else thanks.
hangs up
We made a deal, Harold, and I assume you don't want me to go back on my part.
KING
sighs deeply
Indeed not.
FG
So, Fiona and Charming will be together.
KING
Yes.
FG
Believe me, Harold. It's what's best. Not only for your daughter...but for your Kingdom.
KING
What am I supposed to do about it?
FG
Use your imagination.
INT. AT A PUB IN THE WOODS
KING enters. A woman (UGLY STEPSISTER) is cleaning a glass with her back to the audience.
KING
clears throat
Excuse me. Uh... excuse me. I'm looking for the Ugly Stepsister.
UGLY STEPSISTER turns around to reveal herself.
KING
Ah! There you are. Right. You see, I need to have someone taken care of.
UGLY STEPSISTER
Who's the guy?
KING
Well, he's not a guy, per se. Um... He's an ogre.
UGLY STEPSISTER
Hey, buddy, let me clue you in. There's only one fellow who can handle a job like that, and, frankly...he don't like to be disturbed.
KING
Where could I find him?
UGLY STEPSISTER point to the dark corner of the room.
KING
Hello?
MYSTERIOUS VOICE
Who dares speak to me?
KING
Sorry! I hope I'm not interrupting, but I'm told you're the one to talk to about an ogre problem?
VOICE
You are told correct. But for this, I charge a great deal of money.
KING
Would... this be enough?
holds up a heavy satchel of coins
VOICE
You have engaged my valuable services, Your Majesty. Just tell me where I can find this ogre.
INT. CASTLE
SHREK is alone reading FIONA’s diary.
FIONA (OFFSTAGE)
Dear Diary... Sleeping Beauty is having a slumber party tomorrow, but Dad says I can't go. He never lets me out after sunset. Dad says I'm going away for a while. Must be like some finishing school. Mom says that when I'm old enough, my Prince Charming will rescue me from my tower and bring me back to my family, and we'll all live happily ever after. Mrs. Fiona Charming. Mrs. Fiona Charming. Mrs. Fiona Charming.
A knock on door.
KING
Sorry. I hope I'm not interrupting anything.
SHREK
No, no. I was just reading a, uh... a scary book.
KING
I was hoping you'd let me apologize for my despicable behavior earlier.
SHREK
Okay...
KING
I don't know what came over me. Do you suppose we could pretend it never happened and start over...
SHREK
Look, Your Majesty, I just...
KING
Please. Call me Dad.
SHREK
Dad. We both acted like ogres. Maybe we just need some time to get to know each other.
KING
Excellent idea! I was actually hoping you might join me for a morning hunt. A little father-son time? I know it would mean the world to Fiona. Shall we say, by the old oak?
SHREK
Sure.
FADE OUT:
EXT. IN THE FOREST
SHREK
Face it, Donkey! We're lost.
DONKEY
We can't be lost. We followed the King's instructions exactly. "Head to the darkest part of the woods...""Past the sinister trees with scary-looking branches." The bush shaped like Shirley Bassey!
SHREK
We passed that three times already!
DONKEY
You were the one who said not to stop for directions.
SHREK
Oh, great. My one chance to fix things up with Fiona's dad and I end up lost in the woods with you!
DONKEY
Don't get huffy! I'm only trying to help.
SHREK
I know! I know. I'm sorry, all right?
DONKEY
Hey, don't worry about it.
SHREK
I just really need to make things work with this guy.
DONKEY
Yeah, sure. Now let's go bond with Daddy.
SHREK hears purring.
SHREK
Well, well, well, Donkey. I know it was kind of a tender moment back there, but the purring?
DONKEY
What? I ain't purring.
SHREK
Sure. What's next? A hug?
DONKEY
Hey, Shrek. Donkeys don't purr. What do you think I am, some kind of a...
PUSS IN BOOTS enters.
PUSS
Ha-ha! Fear me, if you dare!
SHREK
Look! A little cat.
DONKEY
Look out, Shrek! He got a piece!
SHREK
It's a cat, Donkey. Come here, little kitty, kitty. Come on, little kitty. Come here.
PUSS scratches SHREK’s outstretched hand.
PUSS
Now, ye ogre, pray for mercy from...Puss... in Boots!
SHREK
I'll kill that cat!
PUSS
Ah-ha-ha!
coughs, wheezes, retches, coughs, chuckles
Hairball.
DONKEY
Oh! That is nasty!
SHREK
What should we do with him?
DONKEY
Take the sword and neuter him.
PUSS
Oh, no! Por favor! Please! I implore you! It was nothing personal, Señor. I was doing it only for my family. My mother, she is sick. And my father lives off the garbage! The King offered me much in gold and I have a litter of brothers...
SHREK
Whoa, whoa, whoa! Fiona's father paid you to do this?
PUSS
The rich King? Sí.
SHREK
Well, so much for Dad's royal blessing.
DONKEY
Don't feel bad. Almost everybody that meets you wants to kill you.
SHREK
Maybe Fiona would've been better off if I were some sort of Prince Charming.
PUSS
That's what the King said. Oh, uh... sorry. I thought that question was directed at me.
DONKEY
Shrek, Fiona knows you'd do anything for her.
SHREK
Well, it's not like I wouldn't change if I could. I just... I just wish I could make her happy. Hold the phone... "Happiness. Just a tear drop away." Donkey! Think of the saddest thing that's ever happened to you!
DONKEY
Aw, man, where do I begin? First there was the time that old farmer tried to sell me for some magic beans. Then this fool had a party and he have the guests trying to pin the tail on me. Then they got drunk and start beating me with a stick, going "Piñata!!" What is a piñata, anyway?
SHREK
No, Donkey! I need you to cry!
DONKEY
Don't go projecting on me. I know you're feeling bad, but you got to
Puss steps on his foot
Aaaahhh! You little, hairy, litter-licking sack of...
KYLE enters with a cart.
KYLE
Fairy Godmother is away from desk or with a client. But I can help you with your ‘Happiness problems’
yawns
FAIRY GODMOTHER enters and Kyle stands up straight very quickly.
FG
Kyle, I’ve been looking everywhere for you! Why aren’t you
notices SHREK
What in Grimm's name are you doing here?
SHREK
Well, um, it seems that Fiona's not exactly happy.
FG
Oh-ho-ho! And there's some question as to why that is? Well, let's explore that, shall we? Cinderella."Lived happily ever after." No ogres! Snow White. A handsome prince. Oh, no ogres. Sleeping Beauty. No ogres! Hansel and Gretel? No! Thumbelina? No. the Little Mermaid, Pretty Woman...No, no, no! You see, ogres don't live happily ever after.
SHREK
All right, look, lady!
FG
Don't you point...those dirty green sausages at me!
KYLE opens the cart to get a soda and SHREK notices the potions.
SHREK
Ah... that's okay. We’ll go. Very sorry to have wasted your time, Miss Godmother.
FG
I need a Monte Cristo Sandwich now. You’ve got me all worked up.
exits
SHREK looks at KYLE, smiles, then knocks him out.
DONKEY
Shrek, are you off your nut?
SHREK
Donkey, quiet and keep watch.
DONKEY
Keep watch? Yeah, I'll keep watch. I'll watch that wicked witch come and whammy a world of hurt up your backside. I'll laugh, too. I'll be giggling to myself.
SHREK opens the cart and passes potions to PUSS.
PUSS
Toad Stool Softener? Elfa Seltzer? Hex Lax?
SHREK
Help me find "handsome."
PUSS
Hey! How about "Happily Ever After"?
SHREK
Well, what does it do?
PUSS
It says "Beauty Divine."
SHREK
That'll have to do. She’s coming back. Go, Donkey!
ALL exit. FG enters, with CHARMING following after.
FG
What happened here? Kyle! Clean this up.
CHARMING
Mother!
FG
This isn't a good time, pumpkin. Mama's working.
CHARMING
Whoa, what happened here?
FG
The ogre, that's what!
CHARMING
What? Where is he, Mom? I shall rend his head from his shoulders! I will smite him where he stands! He will rue the very day he stole my kingdom from me!
FG
Oh, put it away, Junior! You're still going to be king. We'll just have to come up with something smarter.
KYLE
Pardon. Um...Everything is accounted for, Fairy Godmother, except for one potion.
FG
What?
looks in the cart
Oh...I do believe we can make this work to our advantage.
INT. THE ROYAL CASTLE
QUEEN
Try to at least pretend you're interested in your daughter's wedding ball.
KING
Honestly, Lillian, I don't think it matters. How do we know there will even be a ball?
FIONA
Mom. Dad.
KING
Oh, hello, dear. What's that, Cedric? Right! Coming.
FIONA
Mom, have you seen Shrek?
QUEEN
I haven't. You should ask your father. Be sure and use small words, dear. He's a little slow this morning.
CEDRIC
Can I help you, Your Majesty?
KING
Ah, yes! Um...Mmm! Exquisite. What do you call this dish?
CEDRIC
That would be the dog's breakfast, Your Majesty.
KING
Ah, yes. Very good, then. Carry on, Cedric.
FIONA
Dad? Dad, have you seen Shrek?
KING
No, I haven't, dear. I'm sure he just went off to look for a nice... mud hole to cool down in. You know, after your little spat last night.
FIONA
Oh. You heard that, huh?
KING
The whole kingdom heard you. I mean, after all, it is in his nature to be…well, a bit of a brute.
FIONA
Him? You know, you didn't exactly roll out the Welcome Wagon.
KING
Well, what did you expect? Look at what he's done to you.
FIONA
Shrek loves me for who I am. I would think you'd be happy for me.
KING
Darling, I'm just thinking about what's best for you. Maybe you should do the same.
EXT. FOREST
SHREK
reading the potion
"Happily Ever After Potion. Maximum strength. For you and your true love. If one of you drinks this, you both will be fine. Happiness, comfort and beauty divine." You both will be fine? I guess it means it'll affect Fiona, too.
DONKEY
Hey, man, this don't feel right. My donkey senses are tingling all over. Drop that jug o' voodoo and let's get out of here.
SHREK
It says, "Beauty Divine." How bad can it be?
sniffs the potion and sneezes
DONKEY
See, you're allergic to that stuff. You'll have a reaction. And if you think that I'll be smearing Vapor Rub over your chest, think again!
SHREK
Well, here's to us, Fiona.
DONKEY
Shrek? You drink that, there's no going back.
SHREK
I know.
DONKEY
No more wallowing in the mud?
SHREK
I know.
DONKEY
No more itchy butt crack?
SHREK
I know!
DONKEY
But you love being an ogre!
SHREK
I know! But I love Fiona more.
DONKEY
Shrek, no! Wait!
SHREK drinks the potion. There’s a long pause then he farts.
DONKEY
I think you grabbed the "Farty Ever After" potion.
PUSS
Maybe it's a dud.
SHREK
Or maybe Fiona and I were never meant to be.
Thunder cracks and he passes out
DONKEY
Shrek!
Black out.
FADE IN:
FIONA enters with her luggage.
KING
There you are! We missed you at dinner. What is it, darling?
FIONA
Dad...I've been thinking about what you said. And I'm going to set things right.
KING
Ah! Excellent! That's my girl.
FIONA
It was a mistake to bring Shrek here. I'm going to go out and find him. And then we'll go back to the swamp where we belong.
QUEEN
Fiona, please! Let's not be rash, darling. You can't go anywhere right now.
Thunder cracks again and FIONA collapses.
KING
Fiona!
INT. IN THE BARN - MORNING
SISTER
Good morning, sleepyhead. I love your kitty!
SHREK
Oh... My head...
SISTER
Here, I fetched a pail of water.
SHREK
Thanks. Uhh!
sees his reflection in the pale
Aahh! A cute button nose? Thick, wavy locks? Taut, round buttocks? I'm... I'm...
SISTER
Gorgeous!
moves in closer
I'm Jill. What's your name?
SHREK
Um... Shrek.
SISTER
Shrek? Wow. Are you from Europe?
SHREK looks around confused.
SISTER
You're tense. I want to rub your shoulders.
SHREK
Have you seen my donkey?
DONKEY enters and begins studying SHREK, followed by PUSS.
DONKEY
Wow! That's some quality potion, Shrek! What's in that stuff?
PUSS
"Warning: Side effects may include burning, itching, oozing, weeping. Not intended for heart patients or those with... nervous disorders."
SHREK
What?
PUSS
Señor? "To make the effects of this potion permanent, the drinker must obtain his true love's kiss by midnight."
SHREK
Midnight?
DONKEY
Why is it always midnight?
SISTER
Pick me! I'll be your true love!
SHREK
Look, lady, I already have a true love.
SISTER
Oh...
PUSS
Take it from me, Boss. You are going to have one satisfied Princess.
DONKEY
And let's face it. Even though you are a lot easier on the eyes, inside you're the same old mean, salty...
SHREK
simultaneously
Easy.
DONKEY
...cantankerous, foul, angry ogre you always been.
SHREK
And you're still the same annoying donkey.
DONKEY
Bashful
Yeah.
SHREK
Well...Look out, Princess. Here comes the new me.
DONKEY
First things first. We need to get you out of those clothes.
SISTER gasps.
EXT. THE CASTLE GATE
GUARD
Halt!
SHREK
Tell Princess Fiona her husband, Sir Shrek, is here to see her.
FIONA wakes up as a human and looks at herself in the mirror.
She screams.
SHREK
Fiona!
FIONA
Shrek?
SHREK runs into FIONA’s room as FIONA runs down to the castle gates. FG enters the room just before SHREK, she is cloaked.
SHREK
Fiona?
FG
Hello, handsome.
FIONA
Shrek!
DONKEY
Princess!
FIONA
Donkey?
DONKEY
Wow! That potion worked on you, too?
FIONA
What potion?
DONKEY
Shrek took some magic potion. And well...Now, he’s sexy!
FIONA
looking at PUSS
Shrek?
PUSS
For you, baby... I could be.
DONKEY
Yeah, you wish.
FIONA
Donkey, where is Shrek?
DONKEY
He went inside looking for you.
DONKEY and PUSS exit.
FIONA
Shrek?
SHREK
Fiona! Fiona!
FG
blocks his exit with her wand
Are you going so soon? Don't you want to see your wife?
CHARMING enters.
CHARMING
Fiona?
FIONA
Shrek?
CHARMING
Aye, Fiona. It is me. What happened to your voice?
SHREK
The potion changed a lot of things, Fiona. But not the way I feel about you.
KING and QUEEN enter.
QUEEN
Fiona?
KING
Charming?
CHARMING
showing off outfit
Do you think so?
laughs
Dad. I was so hoping you'd approve.
QUEEN
Um... Who are you?
KING
Mom, it's me, Shrek. I know you never get a second chance at a first impression, but, well, what do you think?
Hugs FIONA
SHREK
Fiona! Fiona!
FG
Fiona, Fiona! Ho-ho-ho! Oh, shoot! I don't think they can hear us, pigeon.
sighs deeply
Don't you think you've already messed her life up enough?
SHREK
I just wanted her to be happy.
FG
And now she can be. Oh, sweetheart. She's finally found the prince of her dreams.
SHREK
But look at me. Look what I've done for her.
FG
It's time you stop living in a fairy tale, Shrek. She's a princess, and you're an ogre. That's something no amount of potion will ever change.
SHREK
But...I love her.
FG
If you really love her... you'll let her go.
SHREK leaves.
INT. THE UGLY STEPSISTER’S TAVERN
SISTER
Here you go, boys.
PUSS
Just leave the bottle, Doris.
SISTER
Hey. Why the long face?
SHREK
It was all just a stupid mistake. I never should have rescued her from that tower in the first place.
PUSS
I hate Mondays.
DONKEY
I can't believe you'd walk away from the best thing that happened to you.
SHREK
What choice do I have? She loves that pretty boy, Prince Charming.
DONKEY
Come on. Is he really that good-looking?
SISTER
Are you kidding? He's gorgeous! He has a face that looks like it was carved by angels.
PUSS
Oh. He sounds dreamy.
SHREK
You know...shockingly, this isn't making me feel any better. Look, guys. It's for the best. Mom and Dad approve, and Fiona gets the man she's always dreamed of. Everybody wins.
DONKEY
Except for you. I don't get it, Shrek. You love Fiona.
SHREK
Aye. And that's why I have to let her go.
KING enters in a cloak, at the back of the tavern.
KING
Excuse me, is she here?
GUARD
She's, uh... in the back.
KING
Oh, hello again. Fairy Godmother. Charming.
FG
You'd better have a good reason for dragging us down here, Harold.
KING
Well, I'm afraid Fiona isn't really... warming up to Prince Charming.
CHARMING
FYI, not my fault.
FG
No, of course it's not, dear.
CHARMING
I mean, how charming can I be when I have to pretend I'm that dreadful ogre?
KING
No, no, it's nobody's fault. Perhaps it's best if we just call the whole thing off, okay?
FG AND CHARMING
What?
KING
You can't force someone to fall in love!
FG
I beg to differ. I do it all the time!
pulls out a magical potion from her bag
Have Fiona drink this and she'll fall in love with the first man she kisses, which will be Charming.
KING
Umm... no.
FG
What did you say?
KING
I can't. I won't do it.
FG
Oh, yes, you will. If you remember, I helped you with your happily ever after. And I can take it away just as easily. Is that what you want? Is it?
KING
No.
FG
Good boy. Now, we have to go. I need to do Charming's hair before the ball. He's hopeless. He's all high in the front. He can never get to the back. You need someone to do the back.
CHARMING
Oh. Thank you, Mother.
DONKEY
Mother?
FG
The ogre! Stop them! Stop them!
The guards grab SHREK, DONKEY and PUSS and all exit.
INT. THE CASTLE
The KING enters with a pair of tea cups. He pours the poison into one of them, just before FIONA enters.
KING
Darling? Ah. I thought I might find you here. How about a nice hot cup of tea before the ball?
FIONA
I'm not going.
KING
The whole Kingdom's turned out to celebrate your marriage.
FIONA
There's just one problem. That's not my husband. I mean, look at him.
KING
Yes, he is a bit different, but people change for the ones they love. You'd be surprised how much I changed for your mother.
FIONA
Change? He's completely lost his mind!
KING
Why not come down to the ball and give him another chance? You might find you like this new Shrek.
FIONA
But it's the old one I fell in love with, Dad. I'd give anything to have him back.
reached for one of the tea cups
KING
Darling. That's mine. Decaf. Otherwise I'm up all night.
FIONA
drinking from the other cup
Thanks.
INT. THE DUNGEON
DONKEY
I got to get out of here! I got to get out of here! You can't lock us up like this! Let me go! What about my Miranda rights? You're supposed to say I have the right to remain silent. Nobody said I have the right to remain silent!
SHREK
You HAVE the right to remain silent. What you lack is capacity.
PUSS
I must hold on before I, too, go totally mad.
PINOCHIO
Shrek? Donkey?
PUSS
Too late.
SHREK
Gingy! Pinocchio! Get us out of here!
GINGY
Quick! Tell a lie!
PINOCHIO
What should I say?
SHREK
Anything, but quick!
GINGY
Say something crazy like, "I'm wearing LADIES' UNDERWEAR!"
PINOCHIO
I am wearing ladies' underwear.
SHREK
Are you?
PINOCHIO
I most certainly am not!
his nose grows
DONKEY
It looks like you most certainly am are!
PINOCHIO
I am not!
PUSS
What kind?
GINGY
looking in the back of PINOCHIO’s LEDERHOSEN
IT'S A THONG!
PINOCHIO
Oww! They're briefs!
GINGY
Are not.
PINOCHIO
Are too!
GINGY
Here we go. Hang tight.
picks the lock WITH PINOCHIO’S NOSE
SHREK
Okay boys! We've got to stop that kiss!
DONKEY
I thought you was going to let her go.
SHREK
I was, but I can't let them do this to Fiona.
DONKEY
Boom! That's what I like to hear. Look who's coming around!
PINOCHIO
It's impossible! You'll never get in. The castle's guarded. There's a moat and everything!
nose shrinks back down
GINGY
Folks, it looks like we're up chocolate creek without a Popsicle stick.
SHREK
Don’t worry guys, I have a plan. To the castle!
INT. THE ROYAL BALL
ROYAL MESSENGER
Ladies and gentlemen. Presenting Princess Fiona and her new husband, Prince Shrek.
AUDIENCE applauses, cheering. CHARMING begins waving and encouraging the audience.
FIONA
Shrek, what are you doing?
CHARMING
I'm just playing the part, Fiona.
FIONA
Is that glitter on your lips?
CHARMING
Mm. Cherry flavored. Want to taste?
FIONA
Ugh! What is with you?
CHARMING
But, Muffin Cake...
FIONA gets fed up and turns to leave, CHARMING looks at FG for help.
FG
Sotto Voce
Play something! Now!
turns to the AUDIENCE
Ladies and gentlemen. I'd like to dedicate this song to... Princess Fiona and Prince Shrek.
CHARMING
Fiona, my Princess. Will you honor me with a dance?
AUDIENCE
Dance! Dance!
FIONA
Since when do you dance?
CHARMING
Fiona, my dearest, if there's one thing I know, it's that love is full of surprises.
OUTSIDE THE BALL
All right, fellas! Let's crash this party!
GUARD
Halt right there!
GINGY
Make me!
GUARD grabs GINGY by the collar.
GINGY
Not the gumdrop button!
DONKEY and PUSS grab the GUARD.
DONKEY
Go! Go! Your lady needs you! Go!
SHREK exits.
PUSS
Today, I repay my debt.
GUARD yells and is chased offstage by PUSS. DONKEY, PINOCHIO and GINGY FOLLOW.
SHREK
Stop! Hey, you! Back away from my wife.
FIONA
Shrek?
FG
You couldn't just go back to your swamp and leave well enough alone.
SHREK
Pinocchio! Get the wand!
PINOCHIO runs for the wand but gets zapped along the way. His ‘PINOCHIO’ nose is gone.
PINOCHIO
I'm a real boy!
The WOLF barges in and blows the wand out of FG’s hand, GINGY picks it up and accidentally zaps PINOCHIO, his wooden nose appears again.
PINOCHIO
I'm a real boy. Aah! Oh.
FG
That's mine!
PUSS and DONKEY enter.
DONKEY
Pray for mercy, from Puss...
PUSS
and Donkey!
FG
She's taken the potion! Kiss her now!
CHARMING kisses FIONA.
SHREK
No!
CHARMING and FIONA look at eachother longingly, SHREK is heartbroken.
FIONA
headbutting CHARMING
Hya!
ALL gasp.
SHREK
Fiona.
FIONA
Shrek.
SHREK and FIONA embrace.
FG
Harold! You were supposed to give her the potion!
KING
Well, I guess I gave her the wrong tea.
CHARMING
snatching the wand and tossing it back to FG
Mommy!
FIONA
Mommy?
FG
I told you. Ogres don't live happily ever after.
FG tries to zap SHREK but KING grabs the wand. They both disappear.
FIONA
Oh, Dad!
sobbing
PINOCHIO
Is he...?
GINGY
Yup. He croaked.
Croak sound can be heard. FIONA picks up a frog.
QUEEN
Harold?
FIONA
Dad?
KING
I'd hoped you'd never see me like this.
DONKEY
And he gave you a hard time!
SHREK
Donkey!
KING
No, no, he's right. I'm sorry. To both of you. I only wanted what was best for Fiona. But I can see now... she already has it. Shrek, Fiona... Will you accept an old frog's apologies... and my blessing?
QUEEN
Harold?
KING
I'm sorry, Lillian. I just wish I could be the man you deserve.
UEEN
You're more that man today than you ever were... warts and all.
Clock chimes.
PUSS
Boss! The Happily Ever After Potion!
SHREK
Midnight! Fiona. Is this what you want? To be this way forever?
FIONA
What?
SHREK
Because if you kiss me now... we can stay like this.
FIONA
You'd do that? For me?
SHREK
Yes.
FIONA
I want what any princess wants. To live happily ever after,
SHREK leans in to kiss her but she stops him
with the ogre I married.
PUSS
Whatever happens, I must not cry! You cannot make me cry!
sobs
Clock chimes. Flashing lights, as the crowd gathers round and reveals the ogre SHREK and FIONA.
SHREK
Now, where were we? Oh. I remember.
FADE OUT:
Spotlight on DONKEY.
DONKEY
Hey! Isn't we supposed to be having
a fiesta?
FANFARE

THE END.

`);
