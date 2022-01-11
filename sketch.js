
var backgroundimg
var rutuinstart,rutuimageinstart
var messagebox,messageboximage,messagebox2image
var gamestate="serve"
var backbutton1image
var window1,windowimage
var backbutton1,backbutton2
var rutugamelogo,rutugamelogoimage
var   backgroundi
var  foresttile1image, foresttile2image, foresttile3image, foresttile5image
var countdistancex1=0
var rutuinforest
var foresttilesgroup
var rutuinforestrunning,rutuinforestidle,rutuinforestjump
var foresttile1
var brickwallimage
var colaimage
var pizzaimage
var hamburgerimage
var hotdogimage
var invisibleground1, invisiblewall1
var forestenergy=0
var score1=0
var playerpromise=200
var time=200
var heartimg
var giftstate="onit"
var gift,santarutu
var santalife=300
var happinessrate=0
var candycanecollected=0
var planelife=300
var planefuel=300
var enemykilled=20
var dinoenergy=300
var dinolife=300
var distance1=100000
var rutulife=300
var zombieremaining=300
var immunity=300
var coronaremaining=300
var diamondcollected=0

function preload()
{
 backgroundimg=loadImage("images/grassyb.png")
citybackgroundimg=loadImage("images/city5.jpg")
snowbackgroundimg=loadImage("images/snowbackground3.png")
skybackgroundimg=loadImage("plane/airbackground.png")
nightbackgroundimg=loadImage("dino/grassbackground4.jpg")
nightcitybackgroundimg=loadImage("images/cartoonnightcitybg.jpg")
skycitybackgroundimg=loadImage("images/citybg.jpg")


 rutuimageinstart=loadAnimation("rutuinforest/Idle (1).png")
 dinoimageinstart=loadAnimation("dino/dinoidle1.png")
 messageboximage=loadImage("images/messagebox2.png")
 messagebox2image=loadImage("images/messagebox3.png")
 backbutton1image=loadImage("backbuttons/backbutton2.png")
 windowimage=loadImage("images/Windows.png")
 rutugamelogoimage=loadImage("images/rgamelogo.png")
 levelnextbuttonimage=loadImage("images/fantasynextbutton.png")
 levelbackbuttonimage=loadImage("images/fantasybackbuton2.png")

 
rutuinforestidle=loadAnimation("rutuinforest/rutuidle1.png")
rutuinforestjump=loadAnimation("rutuinforest/Jump (6).png")
rutuinforestrunning=loadAnimation("rutuinforest/Run (1).png","rutuinforest/Run (4).png","rutuinforest/Run (5).png","rutuinforest/Run (8).png")

colaimage=loadImage("junkfoodobstacles/cartooncola.png")
pizzaimage=loadImage("junkfoodobstacles/americanpizza.png")
hamburgerimage=loadImage("junkfoodobstacles/cartoonhamburger.png")
hotdogimage=loadImage("junkfoodobstacles/hotdog.png")
bananaimage=loadImage("junkfoodobstacles/cartoonbanana.png")
cucumberimage=loadImage("junkfoodobstacles/cartooncucumber.png")
grapesimage=loadImage("junkfoodobstacles/cartoongrapes.png")
tomatoimage=loadImage("junkfoodobstacles/cartoontomato.png")
heartimg=loadImage("images/gameheart.png")
restartbuttonimg=loadImage("images/r.png")
gamebackbutttonimg=loadImage("images/gamebackbutton.png")
rutucryingimg=loadImage("images/sadboyrutu.png")
gameoversound=loadSound("sounds/gmo.mp3")
collisionsound=loadSound("sounds/failurecollision.wav")
laughingrutuimg=loadImage("images/laughingboy.png")
collisionsound=loadSound("sounds/failurecollision.wav")
santarunning=loadAnimation("santa/santarun1.png","santa/santarun2.png","santa/santarun3.png","santa/santarun4.png","santa/santarun5.png")
santajumping=loadAnimation("santa/santajump.png")
santaidle=loadAnimation("santa/santaidle.png")
candycaneimage=loadImage("images/cartooncandycane.png")
bellimage=loadImage("images/bellcartoon.png")
pinetreeimg=loadImage("images/pinetree.png")
snowmanimg=loadImage("images/snowmanimg.png")
flagimg=loadImage("images/Flag.png")
gift1img=loadImage("images/cartoongift2.png")
gift2img=loadImage("images/cartoongiftbox.png")
happyimage=loadImage("images/happyemoji.png")
winsound=loadSound("sounds/winsound.wav")
planeimg=loadAnimation("plane/fighterplane.png")
planebulletimage=loadImage("plane/planebullet.png")
hotairballoonimage=loadImage("plane/cartoonhotairballoon.png")
crowimg=loadAnimation("plane/crow1.png","plane/crow2.png")
fighterplaneimg=loadAnimation("plane/redplane.png")
fuelimage=loadImage("images/fuel.png")
shootingplaneimg=loadAnimation("plane/fighterplaneshoot.png")

dinoimage=loadAnimation("dino/dinorun1.png","dino/dinorun2.png","dino/dinorun3.png","dino/dinorun4.png","dino/dinorun5.png")
dinoidleimg=loadAnimation("dino/dinoidle1.png")
dinojumpimg=loadAnimation("dino/dinojump.png")
wizardimg2=loadAnimation("dino/bluewizard2.png")
rockimg=loadImage("dino/cartoonrock.png")
plantsimg1=loadImage("dino/cartoonvenusflytrap.png")
plantsimg2=loadImage("dino/cartoonmushroom.png")

energyimage=loadImage("dino/energy.png")

zombieimg1=loadImage("images/Attack (3).png")
zombieimg2=loadImage("images/femalezattack.png")
crashingplane1img=loadImage("images/crashingplane.png")
crashingplane2img=loadImage("images/crashingplane2.png")
barricadeimg=loadImage("images/cartoonbaricade.png")
tonicimg=loadImage("images/chemicalbottle.png")

corona1img=loadImage("images/cartooncorona1.png")
corona2img=loadImage("images/cartooncorona2.png")
corona3img=loadImage("images/cartooncorona3.png")
maskimg=loadImage("images/cartoonmask.png")
sanitizerimg=loadImage("images/cartonsanitizer.png")
infectedpersonimg=loadImage("images/cartooninfectedman.png")
vaccineimg=loadImage("images/cartoonvaccine.png")

cartoondiamondimage=loadImage("images/cartoondiamond1.png")

jellyimage=loadImage("images/jelly1.png")




}



function setup() {
  createCanvas(windowWidth-20,windowHeight-40);
  foresttilesgroup=new Group()
  forestobstaclegroup=new Group()
  forestfruitsgroup=new Group()
  candycanegroup=new Group()
  snowobstaclegroup=new Group()
  flaggroup=new Group()
giftgroup=new Group()
skyobstaclegroup1=new Group()
skyobstaclegroup2=new Group()
skyobstaclegroup3=new Group()
fuelgroup=new Group()
wizardgroup=new Group()
crowgroup=new Group()
rockgroup=new Group()
plantsgroup=new Group()
tomatocoin1group=new Group()
tomatocoin2group=new Group()
tomatocoin3group=new Group()
tomatocoin4group=new Group()
zombiegroup=new Group()
cplanegroup=new Group()
barricadegroup=new Group()
potiongroup=new Group()
crowgroup2=new Group()
corona1group=new Group()
corona2group=new Group()
corona3group=new Group()
barricade2group=new Group()
maskgroup=new Group()
ipersongroup=new Group()
vaccinegroup=new Group()
minigame1obstaclegroup=new Group()
diamondgroup=new Group()



 citybackground=createSprite(width/2,height/2,width+1000000,height+1000)
 citybackground.addImage(citybackgroundimg)
  citybackground.scale=0.29
  citybackground.visible=false

  snowbackground=createSprite(width/2,height/2-150,width+1000000,height+1000)
  snowbackground.addImage(snowbackgroundimg)
   snowbackground.scale=1.3
   snowbackground.visible=false

   skybackground=createSprite(width/2,height/2-150,width+1000000,height+1000)
   skybackground.addImage( skybackgroundimg)
   skybackground.scale=1.5
   skybackground.visible=false
 
   
   nightbackground=createSprite(width/2,height/2,width+1000000,height+1000)
   nightbackground.addImage(nightbackgroundimg)
   nightbackground.scale=1.4
   nightbackground.visible=false

   nightcitybackground=createSprite(width/2+200,height/2,width+1000000,height+100000)
   nightcitybackground.addImage(nightcitybackgroundimg)
   nightcitybackground.scale=1.8
   nightcitybackground.visible=false

   skycitybackground=createSprite(width/2+200,height/2,width+1000000,height+100000)
   skycitybackground.addImage(skycitybackgroundimg)
   skycitybackground.scale=1.8
   skycitybackground.visible=false

   minigamebackground1=createSprite(width/2,height/2,width,height)
   minigamebackground1.shapeColor=("lightblue")
   minigamebackground1.visible=false

   minigamebackground2=createSprite(width/2,height/2,width,height)
   minigamebackground2.shapeColor=("green")
   minigamebackground2.visible=false
   

  
  invisibleground1=createSprite(width/2,650,width,30)
  invisibleground1.visible=false

  invisiblewall1=createSprite(40,height/2,30,height)
  invisiblewall1.visible=false

  invisibleground2=createSprite(width/2,650,width,30)
  invisibleground2.visible=false

  invisibleground3=createSprite(width/2,0,width,30)
  invisibleground3.visible=false

  invisibleground4=createSprite(width/2,650,width,30)
  invisibleground4.visible=false

  invisibleground5=createSprite(width/2,620,width,30)
  invisibleground5.visible=false

  invisibleground6=createSprite(width/2,520,width,30)
  invisibleground6.visible=false

  invisibleground7=createSprite(width/2,620,width,30)
  invisibleground7.visible=false

  housewall1=createSprite(400,500,15,700)
  housewall1.shapeColor=("brown")
  housewall1.visible=false


  housewall2=createSprite(width/2,100,15,900)
  housewall2.shapeColor=("brown")
  housewall2.visible=false

  housewall3=createSprite(1100,600,15,900)
  housewall3.shapeColor=("brown")
  housewall3.visible=false

  minigame2ground=createSprite(width/2,height/1-20,width,30)
  minigame2ground.shapeColor=("brown")
  minigame2ground.visible=false





//g=createSprite(400,400,20,20)
rutuinstart=createSprite(1000,400,40,40)
rutuinstart.addAnimation("rutuinstart",rutuimageinstart)

rutuinforest=new forestrutu()
rutuinforest.spt.visible=false
rutuinforest.spt.setCollider("rectangle",-100,0,150,250)

santarutu=createSprite(300,200,60,80)
santarutu.addAnimation("santaidle",santaidle)
santarutu.addAnimation("santarunning",santarunning)
santarutu.addAnimation("santajump",santajumping)

planebullet=createSprite(300,200,20,20)
planebullet.addImage(planebulletimage)
planebullet.visible=false

rutuplane=createSprite(300,200,50,50)
rutuplane.addAnimation("plane",planeimg)
rutuplane.addAnimation("shootingplane",shootingplaneimg)
rutuplane.scale=0.5
//rutuplane.debug=true
      rutuplane.setCollider("rectangle",0,0,300,200)

rutuplane.visible=false


dino=createSprite(300,200,40,40)
dino.addAnimation("dino",dinoimage)
dino.addAnimation("dinoidle",dinoidleimg)
dino.addAnimation("dinojump",dinojumpimg)
//dino.debug=true
dino.setCollider("rectangle",-100,0,300,400)
dino.visible=false
dino.scale=0.4

gift=createSprite(0,0,50,50)
giftimg=Math.round(random(1))
gift.visible=false
switch(giftimg){
case 1:gift.addImage(gift2img)
gift.scale=0.2
break;

}

//santarutu.debug=true
santarutu.setCollider("rectangle",-20,0,200,400)
santarutu.scale=0.4
santarutu.visible=false

rutu=createSprite(300,200,40,40)
rutu.addAnimation("rutuinforestidle1",rutuinforestidle);
rutu.addAnimation("rutuinforestrunning1",rutuinforestrunning);
rutu.addAnimation("rutuinforestjump",rutuinforestjump);
//rutu.debug=true
rutu.setCollider("rectangle",-150,0,100,300)
rutu.visible=false
rutu.scale=0.5

dinoinstart=createSprite(330,600,40,40)
dinoinstart.addAnimation("dinoinstart",dinoimageinstart)
dinoinstart.scale=0.8
dinoinstart.visible=false

smallrutu=createSprite(300,400,40,40)
smallrutu.addAnimation("rutuinforestidle1",rutuinforestidle);
smallrutu.addAnimation("rutuinforestrunning1",rutuinforestrunning);
//smallrutu.debug=true
smallrutu.setCollider("rectangle",-150,0,100,250)
smallrutu.visible=false
smallrutu.scale=0.2

jelly=createSprite(width/2,500,40,40)
jelly.addImage(jellyimage)
jelly.scale=0.33
jelly.visible=false

wizard1=createSprite(500,200,40,40)
wizard1.setCollider("rectangle",0,0,120,250)
wizard1.addAnimation("wizardimg",wizardimg2)
wizard1.scale=0.4
wizard1.visible=false
wizard1.velocityX=-7
minigame1obstaclegroup.add(wizard1)


wizard2=createSprite(750,400,40,40)
wizard2.setCollider("rectangle",0,0,120,250)
wizard2.addAnimation("wizardimg",wizardimg2)
wizard2.scale=0.4
wizard2.visible=false
wizard2.velocityX=-7
minigame1obstaclegroup.add(wizard2)


wizard3=createSprite(500,600,40,40)
wizard3.setCollider("rectangle",0,0,120,250)
wizard3.addAnimation("wizardimg",wizardimg2)
wizard3.scale=0.4
wizard3.visible=false
wizard3.velocityX=-7
minigame1obstaclegroup.add(wizard3)


laser1=createSprite(1000,200,200,20)
laser1.shapeColor=("red")
laser1.velocityX=-6
laser1.visible=false
minigame1obstaclegroup.add(laser1)


laser2=createSprite(800,350,200,20)
laser2.shapeColor=("red")
laser2.velocityX=-6
laser2.visible=false
minigame1obstaclegroup.add(laser2)



laser3=createSprite(1000,500,200,20)
laser3.shapeColor=("red")
laser3.velocityX=-6
laser3.visible=false
minigame1obstaclegroup.add(laser3)




cartoonflytrap1=createSprite(1200,200,200,20)
cartoonflytrap1.addImage(plantsimg1)
cartoonflytrap1.scale=0.16
cartoonflytrap1.velocityX=-7
cartoonflytrap1.visible=false
minigame1obstaclegroup.add(cartoonflytrap1)


cartoonflytrap2=createSprite(1400,400,200,20)
cartoonflytrap2.addImage(plantsimg1)
cartoonflytrap2.scale=0.16
cartoonflytrap2.velocityX=-7
cartoonflytrap2.visible=false
minigame1obstaclegroup.add(cartoonflytrap2)


cartoonflytrap3=createSprite(1200,600,200,20)
cartoonflytrap3.addImage(plantsimg1)
cartoonflytrap3.scale=0.16
cartoonflytrap3.velocityX=-7
cartoonflytrap3.visible=false
minigame1obstaclegroup.add(cartoonflytrap3)

diamond1=createSprite(700,100,20,20)
diamond1.addImage(cartoondiamondimage)
diamond1.scale=0.1
diamond1.visible=false


diamond2=createSprite(500,300,20,20)
diamond2.addImage(cartoondiamondimage)
diamond2.scale=0.1
diamond2.visible=false



diamond3=createSprite(700,500,20,20)
diamond3.addImage(cartoondiamondimage)
diamond3.scale=0.1
diamond3.visible=false

diamond4=createSprite(500,700,20,20)
diamond4.addImage(cartoondiamondimage)
diamond4.scale=0.1
diamond4.visible=false

diamond5=createSprite(1000,100,20,20)
diamond5.addImage(cartoondiamondimage)
diamond5.scale=0.1
diamond5.visible=false

diamond6=createSprite(800,300,20,20)
diamond6.addImage(cartoondiamondimage)
diamond6.scale=0.1
diamond6.visible=false

diamond7=createSprite(1000,450,20,20)
diamond7.addImage(cartoondiamondimage)
diamond7.scale=0.1
diamond7.visible=false

diamond8=createSprite(800,600,20,20)
diamond8.addImage(cartoondiamondimage)
diamond8.scale=0.1
diamond8.visible=false

diamond9=createSprite(1200,300,20,20)
diamond9.addImage(cartoondiamondimage)
diamond9.scale=0.1
diamond9.visible=false

diamond10=createSprite(1350,500,20,20)
diamond10.addImage(cartoondiamondimage)
diamond10.scale=0.1
diamond10.visible=false

exit1=createSprite(width/1,height/1,100,130)
exit1.shapeColor=("orange")
exit1.visible=false








messagebox2=createSprite(700,250,50,50)
messagebox2.scale=1.3
messagebox2.visible=false
messagebox2.addImage(messageboximage)

messagebox3=createSprite(500,350,50,50)
messagebox3.scale=0.9
messagebox3.visible=false
messagebox3.addImage(messagebox2image)

backbutton1=createSprite(60,60,30,30)
backbutton1.addImage(backbutton1image)
backbutton1.visible=false

backbutton2=createSprite(60,60,30,30)
backbutton2.addImage(backbutton1image)
backbutton2.visible=false

backbutton3=createSprite(60,60,30,30)
backbutton3.addImage(backbutton1image)
backbutton3.visible=false

backbutton4=createSprite(60,120,30,30)
backbutton4.addImage(backbutton1image)
backbutton4.visible=false


window1=createSprite(width/2,height/2,100,100)
window1.addImage(windowimage)
window1.visible=false


messagebox=createSprite(1050,350,50,50)
messagebox.scale=0.9
messagebox.addImage(messageboximage)
messagebox.visible=false

rutugamelogo=createSprite(800,50,100,40)
rutugamelogo.addImage(rutugamelogoimage)

levelnextbutton=createSprite(1100,600,50,50)
levelnextbutton.addImage(levelnextbuttonimage)
levelnextbutton.scale=0.6
levelnextbutton.visible=false

levelbackbutton=createSprite(400,600,50,50)
levelbackbutton.addImage(levelbackbuttonimage)
levelbackbutton.scale=0.6
levelbackbutton.visible=false

levelnextbutton2=createSprite(1200,300,50,50)
levelnextbutton2.addImage(levelnextbuttonimage)
levelnextbutton2.scale=0.6
levelnextbutton2.visible=false

levelbackbutton2=createSprite(400,300,50,50)
levelbackbutton2.addImage(levelbackbuttonimage)
levelbackbutton2.scale=0.6
levelbackbutton2.visible=false

gamerestartbutton=createSprite(1200,300,50,50)
gamerestartbutton.addImage(restartbuttonimg)
gamerestartbutton.scale=0.5
gamerestartbutton.visible=false

gamebackbuttton=createSprite(400,300,50,50)
gamebackbuttton.addImage(gamebackbutttonimg)
gamebackbuttton.scale=0.9
gamebackbuttton.visible=false

rutucrying=createSprite(width/2,height/2,80,500)
rutucrying.addImage(rutucryingimg)
rutucrying.visible=false

laughingrutu=createSprite(width/2,height/2,80,500)
laughingrutu.addImage(laughingrutuimg)
laughingrutu.scale=0.8
laughingrutu.visible=false

edge1=createSprite(width/2,height/100,width,20)
edge1.visible=false

edge2=createSprite(width/2,height/1,width,20)
edge2.visible=false

edge3=createSprite(width/1,height/2,20,height)
edge3.visible=false

edge4=createSprite(width/200,height/2,20,height)
edge4.visible=false



this.submitbutton= createButton('done');
this.submitbutton.position(1000,370);
this.submitbutton.hide();

this.submitbutton.mousePressed(()=>{
            
this.input1.hide();
this.submitbutton.hide()
 gamestate="iknowname"

 
});



this.input1 = createInput("player");
this.input1.position(950, 330);
this.input1.hide()

if(gamestate==="serve"){
this.storyButton = createButton("Adventures");
this.storyButton.position(300, 335);
this.storyButton.class("customButton")

this.minigamesButton = createButton("mini games");
this.minigamesButton.position(300,400);
this.minigamesButton.class("customButton")

this.instructionButton = createButton("About game");
this.instructionButton.position(300, 460);
this.instructionButton.class("customButton")

this.aboutButton = createButton("About me");
this.aboutButton.position(300, 520);
this.aboutButton.class("customButton")
this.aboutButton.hide()

this.storynextbutton1=createButton("next")
this.storynextbutton1.position(1150,350)
this.storynextbutton1.class("nextButton")
this.storynextbutton1.hide();

this.storypreviousbutton1=createButton("prev")
this.storypreviousbutton1.position(900,350)
this.storypreviousbutton1.class("previousButton")
this.storypreviousbutton1.hide();

this.storynextbutton2=createButton("next")
this.storynextbutton2.position(1150,350)
this.storynextbutton2.class("nextButton")
this.storynextbutton2.hide();

this.storypreviousbutton2=createButton("prev")
this.storypreviousbutton2.position(900,350)
this.storypreviousbutton2.class("previousButton")
this.storypreviousbutton2.hide();

this.storynextbutton3=createButton("next")
this.storynextbutton3.position(1150,350)
this.storynextbutton3.class("nextButton")
this.storynextbutton3.hide();

this.storypreviousbutton3=createButton("prev")
this.storypreviousbutton3.position(900,350)
this.storypreviousbutton3.class("previousButton")
this.storypreviousbutton3.hide();

this.level1=createButton("junckfood fighters")
this.level1.position(670,150)
this.level1.class("levelButton")
this.level1.hide()

this.level2=createButton("santa help")
this.level2.position(670,240)
this.level2.class("levelButton")
this.level2.hide()

this.level3=createButton("plane terrain")
this.level3.position(670,330)
this.level3.class("levelButton")
this.level3.hide()

this.level4=createButton("save rutu")
this.level4.position(670,420)
this.level4.class("levelButton")
this.level4.hide()

this.level5=createButton("swampy zombie")
this.level5.position(670,510)
this.level5.class("levelButton")
this.level5.hide()

this.level6=createButton("Go Corona Go")
this.level6.position(643,600)
this.level6.class("finallevelButton")
this.level6.hide()


this.minigame1=createButton("escape!!")
this.minigame1.position(203,140)
this.minigame1.class("minigamelevelButton")
this.minigame1.hide()

this.minigame2=createButton("escape!!")
this.minigame2.position(203,230)
this.minigame2.class("minigamelevelButton")
this.minigame2.hide()

this.minigame3=createButton("escape!!")
this.minigame3.position(203,320)
this.minigame3.class("minigamelevelButton")
this.minigame3.hide()



}


this.aboutButton.mousePressed(()=>{

 
  messagebox2.visible=true
  backbutton1.visible=true
  rutuinstart.y=600
  rutuinstart.x=900
  gamestate="tellaboutme"

  });

  this.instructionButton.mousePressed(()=>{
    backbutton2.visible=true
    window1.visible=true
    gamestate="tellinstruction"
    });

    this.storyButton.mousePressed(()=>{
      backbutton3.visible=true
      this.input1.show()
      rutuinstart.y=600
      rutuinstart.x=1000
      gamestate="storywise1"
      });
    
      this.storypreviousbutton1.mousePressed(()=>{
        backbutton3.visible=true
        this.storypreviousbutton1.hide()
        this.storynextbutton1.hide()

        this.input1.show()
        rutuinstart.y=600
        rutuinstart.x=1000
        gamestate="storywise1"
        });
    
        this.storynextbutton1.mousePressed(()=>{
          backbutton3.visible=true
          this.storypreviousbutton1.hide()
          this.storynextbutton1.hide()
          text("and i am going to help you in" ,870,320)
          rutuinstart.y=600
          rutuinstart.x=1000
          gamestate="storywise2"
          });

          this.storypreviousbutton2.mousePressed(()=>{
            backbutton3.visible=true
            this.storypreviousbutton2.hide()
            this.storynextbutton2.hide()
                rutuinstart.y=600
            rutuinstart.x=1000
            gamestate="iknowname"
            });
        
            this.storynextbutton2.mousePressed(()=>{
              backbutton3.visible=true
              this.storypreviousbutton2.hide()
              this.storynextbutton2.hide()
              rutuinstart.y=600
              rutuinstart.x=1000
              gamestate="storywise3"
              });
    
              this.storypreviousbutton3.mousePressed(()=>{
                backbutton3.visible=true
                this.storypreviousbutton3.hide()
                this.storynextbutton3.hide()
                   
                gamestate="storywise2"
                dinoinstart.visible=false
                messagebox3.visible=false
                messagebox.visible=true

                });
    
                this.storynextbutton3.mousePressed(()=>{
                  backbutton3.visible=true
                  this.storypreviousbutton3.hide()
                  this.storynextbutton3.hide()
                  rutuinstart.y=400
                  rutuinstart.x=1100
                  messagebox.visible=false
                  messagebox3.visible=false
                  gamestate="levels"
                

                  });
    
    this.level1.mousePressed(()=>{
backbutton3.visible=true

gamestate="level1story"

    })

    this.level2.mousePressed(()=>{
      backbutton3.visible=true
      
      gamestate="level2story"
      
          })

          this.level3.mousePressed(()=>{
            backbutton3.visible=true
            
            gamestate="level3story"
            
                })

                this.level4.mousePressed(()=>{
                  backbutton3.visible=true
                  
                  gamestate="level4story"
                  
                      })

                      this.level5.mousePressed(()=>{
                        backbutton3.visible=true
                        
                        gamestate="level5story"
                        
                            })
      
                            this.level6.mousePressed(()=>{
                              backbutton3.visible=true
                              
                              gamestate="level6story"
                              
                                  })

                                  this.minigamesButton.mousePressed(()=>{
                                    backbutton3.visible=true
                                    
                                    gamestate="showminigames"
                                    
                                        })


                                        this.minigame1.mousePressed(()=>{
                                          backbutton3.visible=true
                                          
                                          gamestate="minigame1"
                                          
                                              })

                                              this.minigame2.mousePressed(()=>{
                                                backbutton3.visible=true
                                                
                                                gamestate="minigame2"
                                                
                                                    })
   
    
    
    
    }

 

function draw() {
  background(backgroundimg)
  fill("black")
  textSize(40)
text(mouseX+":"+mouseY,200,100)
if(gamestate==="level1game"){
//translate(  -rutuinforest.spt.x + width/2 , 0);
backbutton4.visible=true
backbutton3.visible=false

if(citybackground.x<500){
  citybackground.x= width/2  
    
  }
  score1 = score1 + getFrameRate()/60
              time = time-getFrameRate()/1000
 
}

if(gamestate==="level2game"){
  //translate(  -rutuinforest.spt.x + width/2 , 0);
  backbutton4.visible=true
  backbutton3.visible=false
  
  if(snowbackground.x<270){
    snowbackground.x= width/2+400  
      
    }
  score1 = score1 + getFrameRate()/60
               // time = time-getFrameRate()/1000

             
   
  }

if(forestfruitsgroup.isTouching(rutuinforest.spt)){
  forestfruitsgroup.destroyEach()
  forestenergy=forestenergy+5
 
}

if(forestobstaclegroup.isTouching(rutuinforest.spt)){
  
  playerpromise=playerpromise-50
  forestobstaclegroup.destroyEach()
  collisionsound.play()
}

if(candycanegroup.isTouching(santarutu)){
  candycanegroup.destroyEach()
  candycanecollected=candycanecollected+3

}

if(snowobstaclegroup.isTouching(santarutu)){
  
santalife=santalife-100
  snowobstaclegroup.destroyEach()
  collisionsound.play()
}

if(gamestate==="level3game"){

 if(skybackground.x<450){
    skybackground.x= width/2+100 
      
    }

    if(skyobstaclegroup1.isTouching(rutuplane)){
      skyobstaclegroup1.destroyEach()
      planelife=planelife-50
      collisionsound.play()
    }

    if(skyobstaclegroup2.isTouching(rutuplane)){
      skyobstaclegroup2.destroyEach()
      planelife=planelife-50
      collisionsound.play()

    }
    if(skyobstaclegroup3.isTouching(rutuplane)){
      skyobstaclegroup3.destroyEach()
      planelife=planelife-50
      collisionsound.play()

    }

    if(skyobstaclegroup3.isTouching(planebullet)){
      skyobstaclegroup3.destroyEach()
      enemykilled=enemykilled-1

    }
}

if(gamestate==="level4game"){
  if(nightbackground.x<450){
    nightbackground.x= width/2+200
      
    }

    if(tomatocoin1group.isTouching(dino)){
      tomatocoin1group.destroyEach()
      dinoenergy=dinoenergy+30

    }

    if(tomatocoin2group.isTouching(dino)){
      tomatocoin2group.destroyEach()
      dinoenergy=dinoenergy+30


    }

    if(tomatocoin3group.isTouching(dino)){
      tomatocoin3group.destroyEach()
      dinoenergy=dinoenergy+30


    }

    if(rockgroup.isTouching(dino)){
      rockgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(crowgroup.isTouching(dino)){
      crowgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(wizardgroup.isTouching(dino)){
      wizardgroup.destroyEach()
      dinolife=dinolife-60

    }

    if(plantsgroup.isTouching(dino)){
      plantsgroup.destroyEach()
dinolife=dinolife-60
    }



}

if(gamestate==="level5game"){
  if(nightcitybackground.x<220){
    nightcitybackground.x= width/2+300
      
    }

    if(potiongroup.isTouching(zombiegroup)){
      zombiegroup.destroyEach()
      zombieremaining=zombieremaining-6
      potiongroup.destroyEach()
    }

    if(cplanegroup.isTouching(rutu)){
      rutulife=rutulife-50
cplanegroup.destroyEach()
    }

    if(barricadegroup.isTouching(rutu)){
      barricadegroup.destroyEach()
      rutulife=rutulife-50

    }

    if(zombiegroup.isTouching(rutu)){
      rutulife=rutulife-50
      zombiegroup.destroyEach()

    }

    if(crowgroup2.isTouching(rutu)){
      rutulife=rutulife-50
      crowgroup2.destroyEach()

    }



}

if(gamestate==="level6game"){

  if(skycitybackground.x<220){
    skycitybackground.x= width/2+300
      
    }

    if(corona1group.isTouching(vaccinegroup)){
      corona1group.destroyEach()
      coronaremaining=coronaremaining-5

vaccinegroup.destroyEach()
    }

    if(corona2group.isTouching(vaccinegroup)){
      corona2group.destroyEach()
vaccinegroup.destroyEach()
coronaremaining=coronaremaining-5

    }

    if(corona3group.isTouching(vaccinegroup)){
      corona3group.destroyEach()
vaccinegroup.destroyEach()
coronaremaining=coronaremaining-5
    }

    if(maskgroup.isTouching(rutu)){
      maskgroup.destroyEach()
      immunity=immunity+10

    }

    if(corona1group.isTouching(rutu)){
      corona1group.destroyEach()
immunity=immunity-60
collisionsound.play()

    }

    if(corona2group.isTouching(rutu)){
      corona2group.destroyEach()
      immunity=immunity-60
      collisionsound.play()

    }

    if(corona3group.isTouching(rutu)){
      corona3group.destroyEach()
      immunity=immunity-60
      collisionsound.play()

    }

    if(ipersongroup.isTouching(rutu)){
      ipersongroup.destroyEach()
immunity=immunity-70
collisionsound.play()

    }

    if(barricade2group.isTouching(rutu)){
    barricade2group.destroyEach()
immunity=immunity-60
collisionsound.play()

    }

}

wizard1.bounceOff(housewall1)
wizard1.bounceOff(housewall2)

wizard2.bounceOff(housewall1)
wizard2.bounceOff(housewall2)

wizard3.bounceOff(housewall1)
wizard3.bounceOff(housewall2)
wizard3.bounceOff(housewall3)


laser1.bounceOff(housewall1)
laser1.bounceOff(housewall2)
laser1.bounceOff(housewall3)

laser2.bounceOff(housewall1)
laser2.bounceOff(housewall2)
laser2.bounceOff(housewall3)

laser3.bounceOff(housewall1)
laser3.bounceOff(housewall2)
laser3.bounceOff(housewall3)

cartoonflytrap3.bounceOff(housewall3)
cartoonflytrap3.bounceOff(edge3)

cartoonflytrap2.bounceOff(housewall3)
cartoonflytrap2.bounceOff(edge3)

cartoonflytrap1.bounceOff(housewall3)
cartoonflytrap1.bounceOff(edge3)

if(gamestate==="minigame2"){
jelly.collide(minigame2ground)





}

for(var i=0;i<16;i+60){

  block1=createSprite(i,500,200,10)
  block1.shapeColor=("brown")
  //block1.visible=false


    }







  drawSprites();

  if(gamestate==="showminigames"){
this.minigame1.show()
this.minigame2.show()
this.minigame3.show()

this.aboutButton.hide()
this.minigamesButton.hide()
this.instructionButton.hide()
this.storyButton.hide()

this.level1.hide()
this.level2.hide()
this.level3.hide()
this.level4.hide()
this.level5.hide()
this.level6.hide()

rutuinstart.visible=false

  }


  
if(gamestate==="serve"){
aboutButton.show();
storyButton.show();
instructionButton.show();
minigamesButton.show();
this.storypreviousbutton1.hide();
this.storynextbutton1.hide();
this.storypreviousbutton2.hide()
this.storynextbutton2.hide()
rutugamelogo.visible=true
}
  
if(gamestate==="storywise1"){

  messagebox.visible=true
this.submitbutton.show()

this.aboutButton.hide()
this.minigamesButton.hide()
this.instructionButton.hide()
this.storyButton.hide()

fill("red")
textSize(40)
textFont("comfortaa")
  text("HELLO",980,250)
  textSize(30)
  text("can I know your name",900,280)}
 
  if(gamestate==="iknowname"){
    fill("green")
textSize(40)
textFont("comfortaa")
    text("Hello "+this.input1.value(),940,250)
    textSize(30)
  

    text("I am rutu.." ,980,290)
   // text("and i am going to help you in" ,870,320)
    this.storynextbutton1.show();
    this.storypreviousbutton1.show()

  }

  if(gamestate==="storywise2"){
    fill("red")
textSize(40)
textFont("comfortaa")
    text("And ",1000,250)
    textSize(30)
  

    text("you have to help me " ,920,280)
    text("to complete this adventures " ,880,310)
    text("and save the world" ,970,340)
  
    this.storypreviousbutton2.show()
    this.storynextbutton2.show()
  }


 if(  gamestate==="tellaboutme"){
  this.aboutButton.hide()
  this.minigamesButton.hide()
  this.instructionButton.hide()
  this.storyButton.hide()
  rutugamelogo.visible=false
    fill("red")
    textSize(40)
    textFont("Algerian")
      text("my maker is shivam",500,100)
      fill("blue")
      text("A proud",600,150)
      text(" whitehat junior coder",430,200)
      fill("yellow")
      text("completed C-48",520,250)}


      if(  gamestate==="tellinstruction"){
        this.aboutButton.hide()
        this.minigamesButton.hide()
        this.instructionButton.hide()
        this.storyButton.hide()
        rutuinstart.y=height/2
        rutugamelogo.visible=false
rutuinstart.x=width/2
          fill("red")
          textSize(40)
          textFont("Source Code Pro")
            text("my maker is shivam",500,100)
            fill("blue")
            text("A proud",600,150)
            text(" whitehat junior coder",430,200)
            fill("yellow")
            text("completed C-48",520,250)}

            if(  gamestate==="storywise3"){
              this.aboutButton.hide()
              this.minigamesButton.hide()
              this.instructionButton.hide()
              this.storyButton.hide()
               messagebox.visible=true
            this.storypreviousbutton3.show();
            this.storynextbutton3.show();

            fill("green")
            textSize(40)
            textFont("comfortaa")
              text("so lets start",974,270)
              fill("green")
              text("with this astonishing",890,310)
              text("adventure",980,340)


          
            }

            if(gamestate==="levels"){

              this.level1.show()
              this.level2.show()
              this.level3.show() 
              this.level4.show()
              this.level5.show()
              this.level6.show()

            }

            if(gamestate==="level1story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()

              level1story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level2story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level2story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level3story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level3story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level4story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level4story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            
            if(gamestate==="level5story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level5story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level6story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level6story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }


            if(gamestate==="1levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level1storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="2levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level2storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="3levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level3storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="4levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level4storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="5levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level5storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="6levelstorybut2"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              this.level5.hide()
              this.level6.hide()
              level6storybut2();
              levelbackbutton2.visible=true
              levelnextbutton2.visible=true
            }

            if(gamestate==="level1game"){
            
fill("pink")
textSize(80)
textFont("Algerian")
stroke("blue")
strokeWeight(5)
              text("Energy: "+ forestenergy, 1000,70);
              fill("orange")
textSize(50)
textFont("Algerian")
stroke("blue")
strokeWeight(5)
              text("Time Left: "+ time, 150,50);

              rutugamelogo.visible=false
              rutuinstart.visible=false
              citybackground.visible=true
             rutuinforest.spt.visible=true

             rutuinforest.rutuapplyGravity();
             rutuinforest.spt.collide(foresttilesgroup);
             rutuinforest.spt.collide(invisibleground1);
             rutuinforest.spt.collide(invisiblewall1);
             spawnforestobstacles()
             spawnforestfruitsandvegetables()
             showplayerpromise()
             forestobstaclegroup.setVelocityEach(-1,0)
             forestfruitsgroup.setVelocityEach(-1,0)

              citybackground.velocityX=0
            
             
             //Calling various function to controll mario
            if (keyDown("left"))  
             { 
              rutuinforest.rutumoveLeft();
             
             }
             if (keyDown("right")) 
             { 
            //  time = time-frameCount/20000;

              rutuinforest.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
              citybackground.velocityX=-(8 + 1*score1/20000)
              forestobstaclegroup.setVelocityEach(-(8 + 1*score1/4000),0)
              forestfruitsgroup.setVelocityEach(-(8 + 1*score1/4000),0)
             }

             if (keyDown("up") && rutuinforest.spt.velocityY===0) 
             {
              rutuinforest.rutujump();
             }

             if( rutuinforest.spt.y<500){
              rutuinforest.spt.changeAnimation("rutuinforestjump",rutuinforestjump);

             }
            }

            
            if(gamestate==="level2game"){

              image(candycaneimage,1050,40,100,100)
              fill("black")
              strokeWeight(5)
              stroke("yellow")
              text(" : "+candycanecollected,1150,100)
              santarutu.visible=true
              snowbackground.visible=true
                           rutugamelogo.visible=false
                           backbutton3.visible=false
                           rutuinstart.visible=false

                           santarutu.collide(invisibleground2);
                           giftgroup.collide(invisibleground2);

                           spawncandycane()
                           spawnsnowobstacles()
                           spawnflag()
                           showsantalife()
                           showhappinessrate()


                         


                           santarutu.velocityY= santarutu.velocityY+0.8;

                           candycanegroup.setVelocityEach(-1,0)
                           snowobstaclegroup.setVelocityEach(-1,0)
                           flaggroup.setVelocityEach(-1,0)

                           //Calling various function to controll mario
                           santarutu.changeAnimation("santaidle", santaidle)

                           snowbackground.velocityX=0
                           if (keyDown("right")) 
                           { 
                            candycanegroup.setVelocityEach(-8,0)
                            snowobstaclegroup.setVelocityEach(-8,0)
                            flaggroup.setVelocityEach(-8,0)
                          //  time = time-frameCount/20000;
                          snowbackground.velocityX=-(8 + 1*score1/20000)
                          santarutu.changeAnimation("santarunning", santarunning)
                           }
              
                           if (keyDown("up") && santarutu.y>450) 
                           {
                          santarutu.velocityY=-20;
	
                           }

                           if(keyDown("down")){
                          
                            gift=createSprite( santarutu.x,
                            santarutu.y-100,50,50)
giftimg=Math.round(random(1,2))
gift.visible=true
gift.velocityY=10
giftgroup.add(gift)
gift.addImage(gift1img)
//gift.debug=true
gift.setCollider("circle",0,0,40)
gift.scale=0.01
                                                  }

                                                  if(giftgroup.isTouching(invisibleground2)){
                                                    giftgroup.destroyEach()

                                                  }

                                                  if(flaggroup.isTouching(giftgroup)){
                                                    happinessrate=happinessrate+10
                                                    giftgroup.destroyEach()
                                                    flaggroup.destroyEach()

                                                  }
                            
                 

                          
              
                           if( santarutu.y<500){
                            santarutu.changeAnimation("santajump", santajumping)

              
                           }
                          }

                          if(gamestate==="level3game"){

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
                            skybackground.visible=true
                            rutuplane.visible=true
                            planebullet.visible=true
                            skybackground.velocityX=0
                           

                            skyobstaclegroup1.setVelocityEach(-1,0)
                            skyobstaclegroup2.setVelocityEach(-1,0)
                            skyobstaclegroup3.setVelocityEach(-1,0)
                            fuelgroup.setVelocityEach(-1,0)

                            rutuplane.collide(invisibleground3);
                            rutuplane.collide(invisibleground4);
                            planebullet.collide(invisibleground3);
                           planebullet.collide(invisibleground4);
                           rutuplane.changeAnimation("plane",planeimg)


                            showplanefuel()
                            showplanelife()

fill("red")
stroke("yellow")
strokeWeight(10)
textSize(40)
textFont("Algerian")
                            text("Enemy remaining : "+enemykilled,920,100)


                            if (keyDown("right")) 
                            { 
                              planefuel=planefuel-0.3

                           //  time = time-frameCount/20000;
                          skybackground.velocityX=-8
                          skyobstaclegroup1.setVelocityEach(-8,0)
                          skyobstaclegroup2.setVelocityEach(-8,0)
                          skyobstaclegroup3.setVelocityEach(-8,0)
                          fuelgroup.setVelocityEach(-8,0)


                          spawnskycrow()
                          spawnskyhotairballoon()
                          spawnskyplane()
                          spawnplanefuel()
                         

                            }
               
                            if (keyDown("up")) 
                            {
                              rutuplane.y= rutuplane.y-8;
                              planebullet.y=planebullet.y-8
                            }
 
                            if(keyDown("down")){
                           
                              rutuplane.y= rutuplane.y+8;
                              planebullet.y=planebullet.y+8
                                                   }

                                                   if(keyDown("space")&&rutuplane.velocityY===0){

planebullet.velocityX=32
rutuplane.changeAnimation("shootingplane",shootingplaneimg)


                                                   }

                                                   if(planebullet.x>width/1  ){
planebullet.x=300
planebullet.y=rutuplane.y
planebullet.velocityX=0
                                                   }

                                                   if(fuelgroup.isTouching(rutuplane)){
                                                     planefuel=planefuel+40
                                                     fuelgroup.destroyEach()
                                                   }


                          }

                          if(gamestate==="level4game"){
                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
                            nightbackground.visible=true
                            nightbackground.velocityX=0

                            dino.visible=true
                            dino.velocityY= dino.velocityY+0.4;
                            dinoenergy=dinoenergy-0.4

                            dino.changeAnimation("dinoidle",dinoidleimg)

                            dino.collide(invisibleground5)
crowgroup.setVelocityEach(-1,0)
wizardgroup.setVelocityEach(-1,0)
rockgroup.setVelocityEach(-1,0)
plantsgroup.setVelocityEach(-1,0)
tomatocoin1group.setVelocityEach(-1,0)
tomatocoin2group.setVelocityEach(-1,0)
tomatocoin3group.setVelocityEach(-1,0)

showdinolife()
showdinoenergy()

text("distance : "+distance1,900,100)



                            if(keyDown("right")){
                              nightbackground.velocityX=-8
  dino.changeAnimation("dino",dinoimage)

  distance1=distance1-frameCount%60



  crowgroup.setVelocityEach(-8,0)
wizardgroup.setVelocityEach(-8,0)
rockgroup.setVelocityEach(-8,0)
plantsgroup.setVelocityEach(-8,0)
tomatocoin1group.setVelocityEach(-8,0)
tomatocoin2group.setVelocityEach(-8,0)
tomatocoin3group.setVelocityEach(-8,0)






  spawnwizard()
  spawnskycrow2()
  spawnrock()
  spawnvillanplants()
  spawntomatocoin1()
  spawntomatocoin2()
  spawntomatocoin3()


                            }

                            if(keyDown("up")&&dino.y>500){
dino.velocityY=-15


                            }

                            if( dino.y<500){
                              dino.changeAnimation("dinojump",dinojumpimg)
  
                
                             }




                          }

                          if(gamestate==="level5game"){
                            nightcitybackground.visible=true

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false
backbutton4.visible=true
rutu.visible=true
nightcitybackground.velocityX=0
rutu.velocityY=rutu.velocityY+0.5

rutu.collide(invisibleground6)
rutu.changeAnimation("rutuinforestidle1",rutuinforestidle);
zombiegroup.setVelocityEach(-1,0)
barricadegroup.setVelocityEach(-1,0)

showrutulife()
showzremaining()

if(keyDown("right")){
  nightcitybackground.velocityX=-8

  zombiegroup.setVelocityEach(-8,0)
  barricadegroup.setVelocityEach(-8,0)


  rutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning)
spawnzombie()
spawncerashingplane()
spawnbarricade()
//spawnskycrow3()
}

if(keyDown("up")&&rutu.y>400){
rutu.velocityY=-15

}

if(keyDown("space")){
  shootpotion()
}

if(rutu.y<400){
  rutu.changeAnimation("rutuinforestjump",rutuinforestjump)

}


                          }

                          if(gamestate==="level6game"){
                            skycitybackground.visible=true

                            rutugamelogo.visible=false
                            backbutton3.visible=false
                            rutuinstart.visible=false

                            rutu.visible=true
                           

                            skycitybackground.velocityX=0

                            rutu.velocityY=rutu.velocityY+0.5

rutu.collide(invisibleground7)
rutu.changeAnimation("rutuinforestidle1",rutuinforestidle);

corona1group.setVelocityEach(-1,0)
corona2group.setVelocityEach(-1,0)
corona3group.setVelocityEach(-1,0)
barricade2group.setVelocityEach(-1,0)
maskgroup.setVelocityEach(-1,0)
ipersongroup.setVelocityEach(-1,0)

showrutu2life()
showcoronaremaining()


                            if(keyDown("right")){
                              skycitybackground.velocityX=-8
                            
                              spawncorona1()
                              spawncorona2()
                              spawncorona3()
                              spawnbarricade2()
                              cartoonspawnmaskandsanitizer()
                              spawniperson()

                              corona1group.setVelocityEach(-8,0)
corona2group.setVelocityEach(-8,0)
corona3group.setVelocityEach(-8,0)
barricade2group.setVelocityEach(-8,0)
maskgroup.setVelocityEach(-8,0)
ipersongroup.setVelocityEach(-8,0)
                              
                            
                              rutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning)
                           
                            }
                            
                            if(keyDown("up")&&rutu.y>400){
                            rutu.velocityY=-15
                            
                            }
                            
                            if(keyDown("space")){
                              shootvaccine()
                            }

                            if(rutu.y<400){
                              rutu.changeAnimation("rutuinforestjump",rutuinforestjump)
                            
                            }
                          }


      if(mousePressedOver(backbutton1)&&gamestate==="tellaboutme"){
gamestate="serve"
messagebox2.visible=false
backbutton1.visible=false
rutuinstart.y=400
rutuinstart.x=1000


      }

      if(mousePressedOver(backbutton2)&&gamestate==="tellinstruction"){
        gamestate="serve"
        messagebox2.visible=false
        backbutton2.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        window1.visible=false
        
              }

              
      if(mousePressedOver(backbutton3)&&gamestate==="storywise1"){
        gamestate="serve"
        messagebox2.visible=false
        backbutton3.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        messagebox.visible=false
        this.input1.hide()
        this.submitbutton.hide()
        
              }

              if(mousePressedOver(backbutton3)&&gamestate==="iknowname"){
                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                this.input1.hide()
                this.submitbutton.hide()
                
                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="storywise2"){
                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        this.input1.hide()
                        this.submitbutton.hide()
                        
                              }

              if(mousePressedOver(backbutton3)&&gamestate==="storywise3"){
                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                messagebox3.visible=false
                dinoinstart.visible=false
                this.storypreviousbutton3.hide();
                this.storynextbutton3.hide();

                

                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="levels"){
                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        messagebox3.visible=false
                        dinoinstart.visible=false
                        this.storypreviousbutton3.hide();
                        this.storynextbutton3.hide();
                        this.level1.hide()
                        this.level2.hide()
                        this.level3.hide() 
                        this.level4.hide()
                        this.level5.hide()
                        this.level6.hide()
                        
        
                              }

                              if(mousePressedOver(backbutton3)&&gamestate==="level1story"){
                                gamestate="serve"
                                messagebox2.visible=false
                                backbutton3.visible=false
                                rutuinstart.y=400
                                rutuinstart.x=1000
                                messagebox.visible=false
                                messagebox3.visible=false
                                dinoinstart.visible=false
                                this.storypreviousbutton3.hide();
                                this.storynextbutton3.hide();
                                levelnextbutton.visible=false
                                levelbackbutton.visible=false
                                
                
                                      }

                                      if(mousePressedOver(backbutton3)&&gamestate==="1levelstorybut2"){
                                        gamestate="serve"
                                        messagebox2.visible=false
                                        backbutton3.visible=false
                                        rutuinstart.y=400
                                        rutuinstart.x=1000
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                        
                        
                                              }

                                              if(mousePressedOver(backbutton3)&&gamestate==="2levelstorybut2"){
                                                gamestate="serve"
                                                messagebox2.visible=false
                                                backbutton3.visible=false
                                                rutuinstart.y=400
                                                rutuinstart.x=1000
                                                levelnextbutton2.visible=false
                                                levelbackbutton2.visible=false
                                                
                                
                                                      }
                                              if(mousePressedOver(backbutton3)&&gamestate==="level2story"){
                                                gamestate="serve"
                                                messagebox2.visible=false
                                                backbutton3.visible=false
                                                rutuinstart.y=400
                                                rutuinstart.x=1000
                                                messagebox.visible=false
                                                messagebox3.visible=false
                                                dinoinstart.visible=false
                                                this.storypreviousbutton3.hide();
                                                this.storynextbutton3.hide();
                                                levelnextbutton.visible=false
                                                levelbackbutton.visible=false
                                                
                                
                                                      }

                                                      if(mousePressedOver(backbutton3)&&gamestate==="level3story"||mousePressedOver(backbutton3)&&gamestate==="3levelstorybut2"){
                                                        gamestate="serve"
                                                        messagebox2.visible=false
                                                        backbutton3.visible=false
                                                        rutuinstart.y=400
                                                        rutuinstart.x=1000
                                                        messagebox.visible=false
                                                        messagebox3.visible=false
                                                        dinoinstart.visible=false
                                                        this.storypreviousbutton3.hide();
                                                        this.storynextbutton3.hide();
                                                        levelnextbutton.visible=false
                                                        levelbackbutton.visible=false
                                                        levelnextbutton2.visible=false
                                                        levelbackbutton2.visible=false
                                                        
                                        
                                                              }

                                                              if(mousePressedOver(backbutton3)&&gamestate==="level4story"||mousePressedOver(backbutton3)&&gamestate==="4levelstorybut2"){
                                                                gamestate="serve"
                                                                messagebox2.visible=false
                                                                backbutton3.visible=false
                                                                rutuinstart.y=400
                                                                rutuinstart.x=1000
                                                                messagebox.visible=false
                                                                messagebox3.visible=false
                                                                dinoinstart.visible=false
                                                                this.storypreviousbutton3.hide();
                                                                this.storynextbutton3.hide();
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                levelnextbutton2.visible=false
                                                                levelbackbutton2.visible=false
                                                                
                                                
                                                                      }


                                                                      if(mousePressedOver(backbutton3)&&gamestate==="level5story"||mousePressedOver(backbutton3)&&gamestate==="5levelstorybut2"){
                                                                        gamestate="serve"
                                                                        messagebox2.visible=false
                                                                        backbutton3.visible=false
                                                                        rutuinstart.y=400
                                                                        rutuinstart.x=1000
                                                                        messagebox.visible=false
                                                                        messagebox3.visible=false
                                                                        dinoinstart.visible=false
                                                                        this.storypreviousbutton3.hide();
                                                                        this.storynextbutton3.hide();
                                                                        levelnextbutton.visible=false
                                                                        levelbackbutton.visible=false
                                                                        levelnextbutton2.visible=false
                                                                        levelbackbutton2.visible=false
                                                                        
                                                        
                                                                              }

                                                                              if(mousePressedOver(backbutton3)&&gamestate==="showminigames"){
                                                                                gamestate="serve"
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                backbutton3.visible=false
                                                                                laughingrutu.visible=false
                                                                                this.minigame1.hide()
                                                                                this.minigame2.hide()
                                                                                this.minigame3.hide()

                                                                                rutuinstart.visible=true
                                                                              minigamebackground1.visible=false
                                                                                rutugamelogo.visible=true
                                                                                smallrutu.x=300
                                                                                smallrutu.y=500



                                                                              }

                                                      if(mousePressedOver(backbutton4)&&gamestate==="level1game"){
                                                        gamestate="levels"
                                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        citybackground.visible=false
                                        rutuinforest.spt.visible=false
                                        backbutton3.visible=true
                                        backbutton4.visible=false
                                        forestobstaclegroup.destroyEach()
                                        forestfruitsgroup.destroyEach()
                                        rutugamelogo.visible=true
                                        rutuinstart.visible=true
rutuinforest.spt.x=300
rutuinforest.spt.y=200

                                                        
                                        
                                                              }

                                                              if(mousePressedOver(backbutton4)&&gamestate==="level2game"){
                                                                gamestate="levels"
                                                                this.level1.show()
                                                this.level2.show()
                                                this.level3.show() 
                                                this.level4.show()
                                                this.level5.show()
                                        this.level6.show()
                                                gamestate="levels"
                                                levelnextbutton.visible=false
                                                levelbackbutton.visible=false
                                                snowbackground.visible=false
                                                santarutu.visible=false
                                                santarutu.x=300
                                                santarutu.y=200

                                                backbutton3.visible=true
                                                backbutton4.visible=false
                                                snowobstaclegroup.destroyEach()
                                                flaggroup.destroyEach()
                                                candycanegroup.destroyEach()

                                                rutugamelogo.visible=true
                                                rutuinstart.visible=true
                                                                
                                                
                                                                      }

                                                                      if(mousePressedOver(backbutton4)&&gamestate==="level3game"){
                                                                        gamestate="levels"
                                                                        this.level1.show()
                                                        this.level2.show()
                                                        this.level3.show() 
                                                        this.level4.show()
                                                        this.level5.show()
                                        this.level6.show()
                                                        gamestate="levels"
                                                        levelnextbutton.visible=false
                                                        levelbackbutton.visible=false
                                                        skybackground.visible=false
                                                        
                                                        backbutton3.visible=true
                                                        backbutton4.visible=false
                                                        skyobstaclegroup1.destroyEach()
                                                        skyobstaclegroup2.destroyEach()
                                                        skyobstaclegroup3.destroyEach()

                                                      
                                                      rutuplane.visible=false
                                                      planebullet.visible=false
                                                        fuelgroup.destroyEach()
        
                                                        rutugamelogo.visible=true
                                                        rutuinstart.visible=true


                                                                        
                                                        
                                                                              }


                                                                              if(mousePressedOver(backbutton4)&&gamestate==="level4game"){
                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                this.level2.show()
                                                                this.level3.show() 
                                                                this.level4.show()
                                                                this.level5.show()
                                                this.level6.show()
                                                                gamestate="levels"
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                nightbackground.visible=false
                                                                
                                                                backbutton3.visible=true
                                                                backbutton4.visible=false
                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                wizardgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()

                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                                                                                                distance1=100000
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
        rutu.visible=false
                                                              
                                                            dino.visible=false
                
                                                                rutugamelogo.visible=true
                                                                rutuinstart.visible=true
                                                                                
                                                                
                                                                                      }


                                                                              if(mousePressedOver(backbutton4)&&gamestate==="level5game"){
                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                this.level2.show()
                                                                this.level3.show() 
                                                                this.level4.show()
                                                                this.level5.show()
                                                this.level6.show()
                                                                gamestate="levels"
                                                                levelnextbutton.visible=false
                                                                levelbackbutton.visible=false
                                                                nightcitybackground.visible=false
                                                                
                                                                backbutton3.visible=true
                                                                backbutton4.visible=false
                                                                barricadegroup.destroyEach()
                                                                zombiegroup.destroyEach()
                                                                cplanegroup.destroyEach()
                                                                potiongroup.destroyEach()

        rutu.visible=false
        rutu.x=300
        rutu.y=200
                                                              
                                                              rutuplane.visible=false
                
                                                                rutugamelogo.visible=true
                                                                rutuinstart.visible=true
                                                                                
                                                                
                                                                                      }

                                                                                      if(mousePressedOver(backbutton4)&&gamestate==="minigame1"){
                                                                                        this.minigame1.show()
                                                                                        
                                                                                        gamestate="showminigames"
                                                                                        backbutton3.visible=true
                                                                backbutton4.visible=false
                                                                smallrutu.visible=false
                                                                smallrutu.x=300
                                                                smallrutu.y=200
                                                                rutugamelogo.visible=true

                                                                           
                                                                diamond1.visible=false
                                                                minigamebackground1.visible=false
diamond2.visible=false
diamond3.visible=false
diamond4.visible=false
diamond5.visible=false
diamond6.visible=false
diamond7.visible=false
diamond8.visible=false
diamond9.visible=false
diamond10.visible=false
cartoonflytrap1.visible=false
cartoonflytrap2.visible=false
cartoonflytrap3.visible=false
wizard1.visible=false
wizard2.visible=false
wizard3.visible=false
smallrutu.visible=false
housewall1.visible=false
housewall2.visible=false
housewall3.visible=false
laser1.visible=false
laser2.visible=false
laser3.visible=false
exit1.visible=false
diamondcollected=0





                                                                                      }


                                                                                      if(gamestate==="minigame1"){

                                                                                        image(cartoondiamondimage,100,50,100,100)
                                                                                        text("="+diamondcollected,200,120)

                                                                                        fill("red")
                                                                                        textFont("Algerian")
                                                                                        textSize(60)
                                                                                        stroke("black")
                                                                                       
                                                                                        text("collect all diamonds and reach the exit",150,60)
                                                                                        fill("black")
                                                                                        textSize(50)
                                                                                        stroke("white")

                                                                                        text("EXIT",1400,680)

                                                                                        smallrutu.collide(edge1)
                                                                                        smallrutu.collide(edge2)
                                                                                        smallrutu.collide(edge3)
                                                                                        smallrutu.collide(edge4)

                                                                                        smallrutu.collide(housewall1)
                                                                                        smallrutu.collide(housewall2)
                                                                                        smallrutu.collide(housewall3)

                                                                                        diamond1.visible=true
                                                                                        diamond2.visible=true
                                                                                        diamond3.visible=true
                                                                                        diamond4.visible=true
                                                                                        diamond5.visible=true
                                                                                        diamond6.visible=true
                                                                                        diamond7.visible=true
                                                                                        diamond8.visible=true
                                                                                        diamond9.visible=true
                                                                                        diamond10.visible=true

                                                                                        exit1.visible=true






                                                                                        minigamebackground1.visible=true
rutugamelogo.visible=false
backbutton3.visible=false

housewall1.visible=true
housewall2.visible=true
housewall3.visible=true

smallrutu.visible=true

wizard1.visible=true
wizard2.visible=true
wizard3.visible=true

laser1.visible=true
laser2.visible=true
laser3.visible=true

cartoonflytrap1.visible=true
cartoonflytrap2.visible=true
cartoonflytrap3.visible=true

backbutton4.visible=true

this.minigame1.hide()
this.minigame2.hide()
this.minigame3.hide()
smallrutu.changeAnimation("rutuinforestidle1",rutuinforestidle);

if(minigame1obstaclegroup.isTouching(smallrutu)){
  smallrutu.x=300
  smallrutu.y=400
 

}

if(smallrutu.isTouching(exit1)&&diamondcollected===9){
gamestate="minigame1end"
winsound.play()
}

if(smallrutu.isTouching(diamond1)){
  diamond1.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond2)){
  diamond2.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond3)){
  diamond3.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond4)){
  diamond4.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond5)){
  diamond5.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond6)){
  diamond6.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond7)){
  diamond7.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond8)){
  diamond8.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond9)){
  diamond9.destroy()
  diamondcollected=diamondcollected+1
}
if(smallrutu.isTouching(diamond10)){
  diamond10.destroy()
  diamondcollected=diamondcollected+1
}


if(keyDown("right")){
  smallrutu.x=smallrutu.x+5
  smallrutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
}

if(keyDown("left")){
  smallrutu.x=smallrutu.x-5
  smallrutu.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
}

if(keyDown("up")){
  smallrutu.y=smallrutu.y-5

}      

if(keyDown("down")){
  smallrutu.y=smallrutu.y+5

}         
}

if(gamestate==="minigame1end"){
diamond1.visible=false
diamond2.visible=false
diamond3.visible=false
diamond4.visible=false
diamond5.visible=false
diamond6.visible=false
diamond7.visible=false
diamond8.visible=false
diamond9.visible=false
diamond10.visible=false
cartoonflytrap1.visible=false
cartoonflytrap2.visible=false
cartoonflytrap3.visible=false
wizard1.visible=false
wizard2.visible=false
wizard3.visible=false
smallrutu.visible=false
housewall1.visible=false
housewall2.visible=false
housewall3.visible=false
laser1.visible=false
laser2.visible=false
laser3.visible=false
exit1.visible=false
diamondcollected=0
laughingrutu.visible=true
gamebackbuttton.visible=true
gamerestartbutton.visible=true

}

if(gamestate==="minigame2"){

  rutugamelogo.visible=false
backbutton3.visible=false
this.minigame1.hide()
this.minigame2.hide()
this.minigame3.hide()

minigame2ground.visible=true
jelly.visible=true
minigamebackground2.visible=true

jelly.velocityY=jelly.velocityY+0.7

jelly.collide(edge1)
jelly.collide(edge2)
jelly.collide(edge3)
jelly.collide(edge4)

if(keyDown("up")){
jelly.y=jelly.y-12


}

if(keyDown("right")){
  jelly.x=jelly.x+12
  
  
  }

  if(keyDown("left")){
    jelly.x=jelly.x-12
    
    
    }
}
        
                                      

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level1story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="1levelstorybut2"){
                                        
                                        gamestate="level1story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level2story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="2levelstorybut2"){
                                        
                                        gamestate="level2story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level3story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="3levelstorybut2"){
                                        
                                        gamestate="level3story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level4story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="4levelstorybut2"){
                                        
                                        gamestate="level4story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }


                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level5story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="5levelstorybut2"){
                                        
                                        gamestate="level5story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }


                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level6story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        this.level5.show()
                                        this.level6.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        
                                      }

                                      if(mousePressedOver(levelbackbutton2)&&gamestate==="6levelstorybut2"){
                                        
                                        gamestate="level6story"
                                        levelnextbutton.visible=true
                                        levelbackbutton.visible=true
                                        levelnextbutton2.visible=false
                                        levelbackbutton2.visible=false
                                      }





                                     


                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level1story"){
gamestate="1levelstorybut2"
levelbackbutton.visible=false
levelnextbutton.visible=false
                                   

                                      }

                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level2story"){
                                        gamestate="2levelstorybut2"
                                        levelbackbutton.visible=false
                                        levelnextbutton.visible=false
                                                                           
                                        
                                                                              }

                                                                              

                                                                              if(mousePressedOver(levelnextbutton)&&gamestate==="level3story"){
                                                                                gamestate="3levelstorybut2"
                                                                                levelbackbutton.visible=false
                                                                                levelnextbutton.visible=false
                                                                                                                   
                                                                                
                                                                                                                      }

                                                                                                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level4story"){
                                                                                                                        gamestate="4levelstorybut2"
                                                                                                                        levelbackbutton.visible=false
                                                                                                                        levelnextbutton.visible=false
                                                                                                                                                           
                                                                                                                        
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(levelnextbutton)&&gamestate==="level5story"){
                                                                                                                                                                gamestate="5levelstorybut2"
                                                                                                                                                                levelbackbutton.visible=false
                                                                                                                                                                levelnextbutton.visible=false
                                                                                                                                                                                                   
                                                                                                                                                                
                                                                                                                                                                                                      }


                                                                                                                                                                                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level6story"){
                                                                                                                                                                                                        gamestate="6levelstorybut2"
                                                                                                                                                                                                        levelbackbutton.visible=false
                                                                                                                                                                                                        levelnextbutton.visible=false
                                                                                                                                                                                                                                           
                                                                                                                                                                                                        
                                                                                                                                                                                                                                              }

                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="1levelstorybut2"){
                                        gamestate="level1game"
                                        levelbackbutton2.visible=false
                                        levelnextbutton2.visible=false
                                                                            
                                        
                                                                              }

                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="2levelstorybut2"){
                                                                                gamestate="level2game"
                                                                                levelbackbutton2.visible=false
                                                                                levelnextbutton2.visible=false
                                                                                                                    
                                                                                
                                                                                                                      }

                                                                                                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="3levelstorybut2"){
                                                                                                                        gamestate="level3game"
                                                                                                                        levelbackbutton2.visible=false
                                                                                                                        levelnextbutton2.visible=false
                                                                                                                                                            
                                                                                                                        
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="4levelstorybut2"){
                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                levelbackbutton2.visible=false
                                                                                                                                                                levelnextbutton2.visible=false
                                                                                                                                                                                                    
                                                                                                                                                                
                                                                                                                                                                                                      }


                                                                                                                                                                                                      if(mousePressedOver(levelnextbutton2)&&gamestate==="5levelstorybut2"){
                                                                                                                                                                                                        gamestate="level5game"
                                                                                                                                                                                                        levelbackbutton2.visible=false
                                                                                                                                                                                                        levelnextbutton2.visible=false
                                                                                                                                                                                                                                            
                                                                                                                                                                                                        
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(levelnextbutton2)&&gamestate==="6levelstorybut2"){
                                                                                                                                                                                                                                                gamestate="level6game"
                                                                                                                                                                                                                                                levelbackbutton2.visible=false
                                                                                                                                                                                                                                                levelnextbutton2.visible=false
                                                                                                                                                                                                                                                                                  rutu.visible=true
                                                                                                                                                                                                                                                                                  rutu.x=300
                                                                                                                                                                                                                                                                                  rutu.y=200  
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                      }
                                                              
                      



                                                                              if(playerpromise===0||playerpromise<0||time<0&&gamestate==="level1game"){
gamestate="level1end"
gameoversound.play()
                                                                              }

                                                                              if(santalife===0||santalife<0&&gamestate==="level2game"){
                                                                                gamestate="level2end"
                                                                                gameoversound.play()
                                                                                                                                                              }

                                                                              if(forestenergy===100&&time>0&&gamestate==="level1game"){
gamestate="level1win"
winsound.play()
                                                                              
                                                                              }

                                                                              if(happinessrate===300&&gamestate==="level2game"){
                                                                                gamestate="level2win" 
                                                                                winsound.play()

                                                                              }

                                                                              if(planelife===0||planefuel===0||planefuel<0&&gamestate==="level3game"){

gamestate="level3end"
gameoversound.play()

                                                                              }

                                                                              if(enemykilled===0&&gamestate=="level3game"){
gamestate="level3win"
winsound.play()
                                                                              }

                                                                              if(dinolife===0||dinolife<0||dinoenergy===0||dinoenergy<0){
                                                                                gamestate="level4end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(distance1===0||distance1<0){
                                                                                gamestate="level4win"
                                                                                winsound.play()

                                                                              }

                                                                              if(rutulife===0){
                                                                                gamestate="level5end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(zombieremaining===0){
                                                                                gamestate="level5win"
                                                                                winsound.play()
                                                                              }

                                                                              if(immunity===0||immunity<0){
                                                                                gamestate="level6end"
                                                                                gameoversound.play()

                                                                              }

                                                                              if(coronaremaining===0||coronaremaining<0){
                                                                                gamestate="level6win"
                                                                                winsound.play()

                                                                              }

                                                                              if(gamestate==="level1end"){
forestobstaclegroup.destroyEach()
forestfruitsgroup.destroyEach()
flaggroup.destroyEach()
rutuinforest.spt.visible=false
citybackground.velocityX=0
rutucrying.visible=true
playerpromise=200
gamebackbuttton.visible=true
gamerestartbutton.visible=true

                                                                              }

                                                                              
                                                                              if(gamestate==="level2end"){
                                                                                snowobstaclegroup.destroyEach()
                                                                                candycanegroup.destroyEach()
                                                                                flaggroup.destroyEach()
                                                                                santarutu.visible=false
                                                                                snowbackground.velocityX=0
                                                                                rutucrying.visible=true
                                                                                santalife=300
                                                                                gamebackbuttton.visible=true
                                                                                gamerestartbutton.visible=true
                                                                                backbutton4.visible=false


                                                                                
                                                                                                                                                              }

                                                                                                                                                              if(gamestate==="level3end"){
                                                                                                                                                                skyobstaclegroup1.destroyEach()
                                                                                                                                                                skyobstaclegroup2.destroyEach()
                                                                                                                                                                skyobstaclegroup3.destroyEach()
                                                                                                                                                                fuelgroup.destroyEach()
                                                                                                                                                                rutuplane.visible=false
                                                                                                                                                                planebullet.visible=false

                                                                                                                                                                skybackground.velocityX=0
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                planefuel=300
                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                backbutton4.visible=false
                                                                                
                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(gamestate==="level4end"){
                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()
                                                                                                                                                                                                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                wizardgroup.destroyEach()

                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(gamestate==="level5end"){
                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                nightcitybackground.velocityX=0
                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                potiongroup.destroyEach()
                                                                                                                                                                                                                                                zombiegroup.destroyEach()
                                                                                                                                                                                                                                          cplanegroup.destroyEach()
                                                                                                                                                                                                                                          barricadegroup.destroyEach()







                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(gamestate==="level6end"){
                                                                                                                                                                                                                                                corona1group.destroyEach()
                                                                                                                                                                                                                                                corona2group.destroyEach()
                                                                                                                                                                                                                                                corona3group.destroyEach()
                                                                                                                                                                                                                                                barricade2group.destroyEach()
                                                                                                                                                                                                                                                vaccinegroup.destroyEach()
                                                                                                                                                                                                                                                maskgroup.destroyEach()
                                                                                                                                                                                                                                                ipersongroup.destroyEach()

                                                                                                                                                                                                                                                rutucrying.visible=true
                                                                                                                                                                
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                coronaremaining=300













                                                                                                                                                                                                                                              }

                                                                              if(gamestate==="level1win"){
                                                                                forestobstaclegroup.destroyEach()
                                                                                forestfruitsgroup.destroyEach()
                                                                                rutuinforest.spt.visible=false
                                                                                citybackground.velocityX=0
                                                                                laughingrutu.visible=true
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=true
                                                                                gamerestartbutton.visible=true
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(gamestate==="level2win"){
                                                                                                                                                                snowobstaclegroup.destroyEach()
                                                                                                                                                                candycanegroup.destroyEach()
                                                                                                                                                                flaggroup.destroyEach()
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                snowbackground.velocityX=0
                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                santalife=200
                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                backbutton4.visible=false

                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(gamestate==="level3win"){
                                                                                                                                                                                                                                                skyobstaclegroup1.destroyEach()
                                                                                                                                                                                                                                                skyobstaclegroup3.destroyEach()
                                                                                                                                                                                                                                                skyobstaclegroup2.destroyEach()
                                                                                                                                                                                                                                                fuelgroup.destroyEach()
                                                                                                                                                                                                                                                
                                                                                                                                                               
                                                                                                                                                                                                                                               rutuplane.visible=false
                                                                                                                                                                                                                                                 planebullet.visible=false
                                                                                                                                                                                                                                                      skybackground.velocityX=0
                                                                                                                                                                                                                                                      planelife=300
                                                                                                                                                                                                                                                  enemykilled=20
                                                                                                                                                                                                                                                planefuel=300
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                              if(gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                crowgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                rockgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                wizardgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                plantsgroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin1group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin2group.destroyEach()
                                                                                                                                                                                                                                                                                                                                tomatocoin3group.destroyEach()

                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                dino.visible=false
                                                                                                                                                                                                                                                                                                                                nightbackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                                                                                                                distance1=100000
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                potiongroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                                zombiegroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                          cplanegroup.destroyEach()
                                                                                                                                                                                                                                                                                                                                                                                                          barricadegroup.destroyEach()
                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                          zombieremaining=300
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(gamestate==="level6win"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                corona1group.destroyEach()
                                                                                                                                                                                                                                                corona2group.destroyEach()
                                                                                                                                                                                                                                                corona3group.destroyEach()
                                                                                                                                                                                                                                                barricade2group.destroyEach()
                                                                                                                                                                                                                                                vaccinegroup.destroyEach()
                                                                                                                                                                                                                                                maskgroup.destroyEach()
                                                                                                                                                                                                                                                ipersongroup.destroyEach()

                                                                                                                                                                
                                                                                                                                                                                                                                                

                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                skycitybackground.velocityX=0
                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                coronaremaining=300
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          zombieremaining=300
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level1end"){
gamestate="level1game"
playerpromise=200
gamebackbuttton.visible=false
gamerestartbutton.visible=false
rutucrying.visible=false
rutuinforest.spt.visible=true
rutuinforest.spt.x=500
rutuinforest.spt.y=200
time=200
forestenergy=0


                                                                              }

                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level2end"){
                                                                                gamestate="level2game"
                                                                                santalife=300
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                rutucrying.visible=false
                                                                                santarutu.visible=true
                                                                                santarutu.x=500
                                                                                santarutu.y=200
                                                                                happinessrate=0
                                                                                
                                                                                
                                                                                                                                                              }

                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level3end"){
                                                                                                                                                                gamestate="level3game"
                                                                                                                                                                planelife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                rutuplane.visible=true
                                                                                                                                                                rutuplane.x=300
                                                                                                                                                               rutuplane.y=200
                                                                                                                                                               planebullet.visible=true
                                                                                                                                                               planebullet.x=300
                                                                                                                                                               planebullet.y=200
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level4end"){
                                                                                                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                dino.visible=true
                                                                                                                                                                                                                                                dino.x=300
                                                                                                                                                                                                                                               dino.y=200
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                dinoenergy=300
                                                                                                                                                                                                                                              distance1=100000
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level5end"){
                                                                                                                                                                                                                                                                                                                                gamestate="level5game"
                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                               rutu.y=200
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                              zombieremaining=300

                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level6end"){
                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="level6game"
                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                               rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                              coronaremaining=300
                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
                                                                                

                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level1win"){
                                                                                gamestate="level1game"
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                laughingrutu.visible=false
                                                                                rutuinforest.spt.visible=true
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                time=200
                                                                                forestenergy=0
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level2win"){
                                                                                                                                                                gamestate="level2game"
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                            santarutu.visible=true
                                                                                                                                                                santarutu.x=500
                                                                                                                                                                santarutu.y=200
                                                                                                                                                               
                                                                                                                                                                happinessrate=0
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level3win"){
                                                                                                                                                                                                                                                gamestate="level3game"
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                rutuplane.visible=true
                                                                                                                                                                rutuplane.x=300
                                                                                                                                                               rutuplane.y=200
                                                                                                                                                               planebullet.visible=true
                                                                                                                                                               planebullet.x=300
                                                                                                                                                               planebullet.y=200
                                                                                                                                                                planelife=300
                                                                                                                                                                enemykilled=20
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                gamestate="level4game"
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                dino.visible=true
                                                                                                                                                                                                                                                dino.x=300
                                                                                                                                                                                                                                                dino.y=200
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                dinolife=300
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="level5game"
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                                rutu.y=200
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                rutulife=300
                                                                                                                                                                                                                                                                                                                                                    zombieremaining=300                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="level6win"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="level6game"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                                rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                immunity=300
                                                                                                                                                                                                                                                                                                                                                                                                                                  coronaremaining=300                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamerestartbutton)&&gamestate==="minigame1end"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="minigame1"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               smallrutu.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                smallrutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                smallrutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level1end"){
                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                                this.level2.show()
                                                                                this.level3.show() 
                                                                                this.level4.show()
                                                                                this.level5.show()
                                        this.level6.show()
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false
                                                                                gamerestartbutton.visible=false
                                                                                rutucrying.visible=false
                                                                                rutuinforest.spt.visible=false
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                rutuinstart.visible=true
                                                                                time=200
                                                                                forestenergy=0
                                                                                citybackground.visible=false
                                                                                rutugamelogo.visible=true
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level2end"){
                                                                                                                                                                gamestate="levels"
                                                                                                                                                                this.level1.show()
                                                                                                                                                                this.level2.show()
                                                                                                                                                                this.level3.show() 
                                                                                                                                                                this.level4.show()
                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                candycanecollected=0
                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                santarutu.x=500
                                                                                                                                                            santarutu.y=200
                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                               happinessrate=0
                                                                                                                                                                snowbackground.visible=false
                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level3end"){
                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                skybackground.visible=false
                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level4end"){
                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                nightbackground.visible=false
                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level5end"){
                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level6end"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutucrying.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="minigame1end"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="showminigames"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level6.hide()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton3.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              minigamebackground1.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                smallrutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                smallrutu.y=500
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                              
                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level1win"){
                                                                                gamestate="levels"
                                                                                this.level1.show()
                                                                                this.level2.show()
                                                                                this.level3.show() 
                                                                                this.level4.show()
                                                                                playerpromise=200
                                                                                gamebackbuttton.visible=false

                                                                                gamerestartbutton.visible=false
                                                                                laughingrutu.visible=false
                                                                                rutuinforest.spt.visible=false
                                                                                rutuinforest.spt.x=500
                                                                                rutuinforest.spt.y=200
                                                                                rutuinstart.visible=true
                                                                                time=200
                                                                                forestenergy=0
                                                                                citybackground.visible=false
                                                                                rutugamelogo.visible=true
                                                                                
                                                                                
                                                                                                                                                              }


                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level2win"){
                                                                                                                                                                gamestate="levels"
                                                                                                                                                                this.level1.show()
                                                                                                                                                                this.level2.show()
                                                                                                                                                                this.level3.show() 
                                                                                                                                                                this.level4.show()
                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                santalife=300
                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                santarutu.visible=false
                                                                                                                                                                santarutu.x=500
                                                                                                                                                            santarutu.y=200
                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                               happinessrate=0
                                                                                                                                                                snowbackground.visible=false
                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level3win"){
                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                skybackground.visible=false
                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level4win"){
                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                               dino.x=300
                                                                                                                                                                                                                                                                                                                               dino.y=200
                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                nightbackground.visible=false
                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level5win"){
                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                               rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                              rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                nightcitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              if(mousePressedOver(gamebackbuttton)&&gamestate==="level6win"){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamestate="levels"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level1.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level2.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level3.show() 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level4.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                this.level5.show()
                                                                                                                                                                                                        this.level6.show()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamebackbuttton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                gamerestartbutton.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                backbutton4.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                laughingrutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               rutu.x=300
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              rutu.y=200
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutuinstart.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutu.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                skycitybackground.visible=false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rutugamelogo.visible=true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
  
}

function level1story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("JunkFood fighters",550,150)
  textFont("Algerian")
  fill("green")
  textSize(30)
  text(" Rutu is so determined to his words.",500,200)
  text("one day he promised his mom that he ",500,250)
  text(" will always eat fruits and vegetables ",500,300)
  text("and he will not eat junk food  ",500,350)
  text("doing this was not less than a adventure. ",500,400)
  text("you have to help him do this. eat only fruits and vegetables",500,450)
  text(" nothing other than that ",500,500)

}

function level2story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("santa help",630,150)
  textFont("Algerian")
  fill("blue")
  textSize(30)
  text("ho ho ho...christmas has come and rutu is so excited for his gift and",300,200)
  text(" for meeting santa as rutu and santa are best friends...santa always ",300,250)
  text("brings big gifts for rutu...but this time he gave rutu a much big gift",300,300)
  text("of an adventure...this time santa got fever and cannot go out and give ",300,350)
  text("gifts to children now he asked rutu for help and our rutu never says",300,400)
  text("no for help...rutu now have become santa and you have to help rutu to ",300,450)
  text("deliever gifts...happiness of all children is now dependent on you and rutu",300,500)

}


function level3story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("plane terrain",630,150)
  textFont("Algerian")
  fill("lightgreen")
  textSize(30)
  text("as we know..our rutu is so talented and his talent was also recognised",300,200)
  text("by indian aeronautics organisation and rutu got selected for their",300,250)
  text("special program pilotkids and this program could fulfill his dream of  ",300,300)
  text("becoming a pilot but for that he have to pass a test and if he passes ",300,350)
  text("this test....he will get admission in the flight school...... now rutu",300,400)
  text("needs your help to make his dream fulfilled....",400,450)
  text("All The Best",700,500)

}

function level4story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("save rutu",630,150)
  textFont("Algerian")
  fill("darkred")
  textSize(30)
  text("OH NO!!  rutu has been kidnapped by an fantasy magician..... and now he ",300,200)
  text("asked 'dino' rutus pet to complete his adventure and then only he coud",300,250)
  text("reach rutu....and this definately wont be easy...but like our rutu is ",300,300)
  text("not afraid of challenges..his pet dino is also not afraid of challenges",300,350)
  text("this is an copy of that adventure of dino and you have to help dino",300,400)
  text("to rescue rutu.....",710,450)
  text("All The Best",700,500)

}


function level5story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("swampy zombie",630,150)
  textFont("Algerian")
  fill("green")
  textSize(30)
  text("oh no! world is in big danger because a zombie acolypse",300,200)
  text("has happened and rutu is the last human on earth and other",300,250)
  text("humans have become zombies but we have antitode too by which ",300,300)
  text("zombies can become humans but now its your task to save all",300,350)
  text("humans by throwing antitodes on them......",300,400)
  text("                  Dont let zombies rule our world",400,450)
  text("All The Best",700,500)

}

function level6story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  strokeWeight(3)
  text("Go Corona",630,150)
  textFont("Algerian")
  fill("orange")
  textSize(30)
  text("OMG !!!!!  a more big problem than zombie acolypse has come and its name is",200,200)
  text("corona....it will attack and kill people mercissely and its spread all over the ",200,250)
  text("world...but as we know that each problem is having a solution like that corona  ",200,300)
  text("also have a vaccine.. just the problem is that someone have to shoot it on them ",200,350)
  text("and our rutu confidently said yes for this task but now you have to help rutu to",200,400)
  text("accomplish this mission and save the world.... ",400,450)
  text("All The Best",700,500)

}

function level1storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("JunkFood fighters",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("and press up arrow key to jump...",500,300)
  text("avoid all junk food and if you eat junk ",500,350)
  text("food your promise rate will decrease...",500,400)
  text("eat only fruits and vegetables and this will ",500,450)
  text("increase your energy...",500,500)
  text("when your energy becomes 100 you will win.. ",500,550)

}

function level2storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("santa help",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("press up arrow key to jump...",500,300)
  text("and press down arrow key to release gifts and make ",500,350)
  text(" sure that gifts are touching flags that will come than only",500,400)
  text("gifts will be counted....avoid bell,snowmans and other ",500,450)
  text("obstacles....and collect candysticks too ",500,500)
  text("when the yellow bar will be full than you will win ",500,550)
  text("note: the yellow bar will increase only when you will ",500,600)
  text(" release gifts that are touching flags ",500,650)



}

function level3storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("plane terrain",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press up arrow key to move up",500,250)
  text("and press down arrow key to move down",500,300)
  text("and press space to shoot fireballs ",500,350)
  text("there are total 20 enemy planes which are red",500,400)
  text("in color....and when you will them enemy remaining ",500,450)
  text("will decrease and also keep a  watch on fuel and keep",500,500)
  text("on collecting fuels...avoid hot air balloon,birds and ",500,550)
  text("other obstacles....when enemy remaining will be 0 you will win...",500,600)


}

function level4storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("santa help",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text(" press up arrow key to jump...",500,250)
  text("and dino has limited energy so you have",500,300)
  text("to keep on eating tomato to increase dinos",500,350)
  text("energy...avoid wizard,crow,rock and other",500,400)
  text("obstacles....when the distance become 0 you  ",500,450)
  text("will win...",500,500)
  text("please save rutu...... ",500,550)

}

function level5storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("swampy zombie",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text(" press up arrow key to jump...",500,300)
  text("and press space to shoot antitode on zombies..",500,350)
  text("avoid zombies ,crashing planes, barricades and",500,400)
  text("and other obstacles...when the green bar will ",500,450)
  text("be empty you will win and it will become empty",500,500)
  text("when you shoot antitodes on zombies....",500,550)

}

function level6storybut2(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("go corona",550,150)
  textFont("Algerian")
  fill("red")
  textSize(30)
  text(" press right arrow key to move right..",500,200)
  text("press left arrow key to move left",500,250)
  text("press up arrow key to jump...",500,300)
  text("and press space to shoot vaccine on corona",500,350)
  text("collect mask and sanitizer which will increase ",500,400)
  text("your immunity...avoid corona,barricades,infected person ",500,450)
  text("and other obstacle...when the corona bar will be empty you",500,500)
  text("will win and it will become empty when you will shoot coronas...",500,550)

}

function spawnforestobstacles(){
  if(frameCount%150===0){
    forestobstacle=createSprite() 
    forestobstacle.x=width/1
    forestobstacle.y=height/1.1
    forestobstacle.w=30
    forestobstacle.h=30
    forestobstacle.velocityX=-8;
    //forestobstacle.debug=true
    forestobstaclegroup.add(forestobstacle)
    //car.debug=true
    //forestobstacle.setCollider("rectangle",0,0,50,80)
    
    var forestobstacleimage=Math.round(random(1,4))
    switch(forestobstacleimage){
      case 1:forestobstacle.addImage(hotdogimage) 
      forestobstacle.scale=0.21;
      forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
       case 2:forestobstacle.addImage(hamburgerimage) 
       forestobstacle.scale=0.35;
       forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
       case 3:forestobstacle.addImage(colaimage) 
       forestobstacle.scale=0.14;
       forestobstacle.setCollider("rectangle",0,0,210,250)
      break;
      case 4:forestobstacle.addImage(pizzaimage) 
      forestobstacle.scale=0.4;
      forestobstacle.setCollider("rectangle",0,0,210,250)
     break;  
        
    }  
    }
}

function spawnforestfruitsandvegetables(){
  if(frameCount%60===0){
    forestfruits=createSprite(width/1,random([height/2,height/1.3,height/1.6,height/1.8]),30,30) 
    forestfruits.velocityX=-8;
    forestfruitsgroup.add(forestfruits)
    //car.debug=true
    //forestobstacle.setCollider("rectangle",0,0,50,80)
    
    var   forestfruitsimage=Math.round(random(1,4))
    switch(forestfruitsimage){
      case 1:  forestfruits.addImage(tomatoimage) 
      forestfruits.scale=0.2;
      break;
       case 2:  forestfruits.addImage(cucumberimage) 
       forestfruits.scale=0.2;
      break;
       case 3:  forestfruits.addImage(grapesimage) 
       forestfruits.scale=0.2;
      break;
      case 4:  forestfruits.addImage(bananaimage) 
      forestfruits.scale=0.2;
     break;  
        
    }  
    }
}

function spawncandycane(){
if(frameCount%170===0){
candycane=createSprite(width/1,random([height/2,height/1.3,height/1.6,height/1.8]),30,30) 
candycane.velocityX=-8;
candycane.scale=0.07
//candycane.debug=true
candycanegroup.add(candycane)
candycane.addImage(candycaneimage)

}

}

function spawnsnowobstacles(){
  if(frameCount%270===0){
  snowobstacle=createSprite(width/1,500,30,30) 
  snowobstacle.velocityX=-8;
  snowobstacle.scale=0.1
  //snowobstacle.debug=true
  snowobstaclegroup.add(snowobstacle)

  var   snowobstacleimage=Math.round(random(1,3))
  switch(snowobstacleimage){
    case 1:  snowobstacle.addImage(bellimage) 
    snowobstacle.scale=0.2;
    snowobstacle.setCollider("circle",0,0,300)
    break;
     case 2:  snowobstacle.addImage(pinetreeimg) 
     snowobstacle.scale=0.3
     snowobstacle.setCollider("rectangle",0,0,350,750)
    break;
     case 3:  snowobstacle.addImage(snowmanimg) 
     snowobstacle.scale=0.1;
     snowobstacle.setCollider("rectangle",0,0,500,2150)
    break;
    
      
  } 
  
  }
  
  }

  function spawnflag(){
if(frameCount%230===0){
flag=createSprite(width/1,500,30,30)
flag.velocityX=-8;
flag.scale=0.1
flaggroup.add(flag)
//flag.debug=true
flag.setCollider("rectangle",-400,1200,1000,700)
flag.addImage(flagimg)
}
  }


  function spawnskyhotairballoon(){
    if(frameCount%250===0){
      skyobstacle1=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle1.velocityX=-8;
      skyobstacle1.scale=0.05
      //skyobstacle1.debug=true
      skyobstaclegroup1.add(skyobstacle1)
      skyobstacle1.addImage(hotairballoonimage)
     
      }

  }

  function spawnskycrow(){
    if(frameCount%50===0){
      skyobstacle2=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle2.velocityX=-8;
      skyobstacle2.scale=0.3
      //skyobstacle2.debug=true
      skyobstaclegroup2.add(skyobstacle2)
      skyobstacle2.addAnimation("crow",crowimg)
      skyobstacle2.setCollider("rectangle",0,0,200,100)
     
      }

  }

  function spawnskyplane(){
    if(frameCount%300===0){
      skyobstacle3=createSprite(width/1,Math.round(random(100,600)),30,30) 
      skyobstacle3.velocityX=-8;
      skyobstacle3.scale=0.5
     // skyobstacle3.debug=true
      skyobstaclegroup3.add(skyobstacle3)
      skyobstacle3.addAnimation("obstacleplane",fighterplaneimg)
      skyobstacle3.setCollider("rectangle",0,0,300,200)

     
      }

  }

  function spawnplanefuel(){
    if(frameCount%200===0){
      fuel=createSprite(width/1,Math.round(random(100,600)),30,30) 
      fuel.velocityX=-8;
      fuel.scale=0.02
      //snowobstacle.debug=true
      fuelgroup.add(fuel)
      fuel.addImage("fuel",fuelimage)
     
      }




  }

  function spawnwizard(){
    if(frameCount%200===0){
     wizard=createSprite(width/1,500,30,30) 
    wizard.velocityX=-8;
      wizard.scale=0.5
      //wizard.debug=true
      wizard.setCollider("rectangle",0,0,120,250)
      wizardgroup.add(wizard)
      wizard.addAnimation("wizardimg",wizardimg2)
          
     

      }



  }

  function spawnskycrow2(){
    if(frameCount%70===0){
      crow=createSprite(width/1,Math.round(random(0,150)),30,30) 
crow.velocityX=-8;
      crow.scale=0.3
      //skyobstacle2.debug=true
      crowgroup.add(crow)
      crow.addAnimation("crow",crowimg)
      crow.setCollider("rectangle",0,0,200,100)
     
      }

  }

  function spawnrock(){
    if(frameCount%350===0){
      rock=createSprite(width/1,500,30,30) 
      rock.velocityX=-8;
      rock.scale=0.1
      //rock.debug=true
      rockgroup.add(rock)
      rock.addImage(rockimg)
      rock.setCollider("rectangle",0,0,200,100)
     
      }
  }

  function spawnvillanplants(){
    if(frameCount%500===0){
plants=createSprite(width/1,500,30,30)
plants.velocityX=-8;
plantsgroup.add(plants)
plantsimage=Math.round(random(1,2))
switch(plantsimage){
case 1:plants.addImage(plantsimg1)
plants.scale=0.26
//plants.debug=true
plants.setCollider("rectangle",0,0,400,300)
break;
case 2:plants.addImage(plantsimg2)
plants.scale=0.04
//plants.debug=true

break;



}

    }




  }

  function spawntomatocoin1(){
if(frameCount%150===0){
  tomatocoin1=createSprite(width/1,Math.round(random(200,500)),30,30)
  tomatocoin1.addImage(tomatoimage)
  tomatocoin1.velocityX=-8
  tomatocoin1.scale=0.2
  tomatocoin1group.add(tomatocoin1)


}}

function spawntomatocoin2(){
  if(frameCount%180===0){
    tomatocoin2=createSprite(width/1,Math.round(random(200,500)),30,30)
    tomatocoin2.addImage(tomatoimage)
    tomatocoin2.velocityX=-8
    tomatocoin2.scale=0.2
    tomatocoin2group.add(tomatocoin2)
  
  
  }}

  
  function spawntomatocoin3(){
    if(frameCount%210===0){
      tomatocoin3=createSprite(width/1,Math.round(random(200,500)),30,30)
      tomatocoin3.addImage(tomatoimage)
      tomatocoin3.velocityX=-8
      tomatocoin3.scale=0.2
      tomatocoin3group.add(tomatocoin3)
    
    
    }
    


  }

  function spawnzombie(){
if(frameCount%170===0){
  zombie=createSprite(width/1,450,30,30) 
  zombie.velocityX=-8;
  zombie.scale=0.4
  //zombie.debug=true
zombie.setCollider("rectangle",0,0,120,400)
  zombiegroup.add(zombie)
zombieimage=Math.round(random(1,2))
switch(zombieimage){
case 1:zombie.addImage(zombieimg1)
break;
case 2:zombie.addImage(zombieimg2)
break;

}

}

  }

function spawncerashingplane(){
if(frameCount%400===0){
cplane=createSprite(width/1,0,50,50)
cplanegroup.add(cplane)
cplane.addImage(crashingplane2img)
cplane.velocityX=-36
//cplane.debug=true
cplane.setCollider("rectangle",100,0,500,100)
cplane.velocityY=random([10,11,12,13,14])
cplane.scale=0.5

}

}

function spawnbarricade(){
  if(frameCount%280===0){
    barricade=createSprite(width/1,500,50,50)
    barricadegroup.add(barricade)
    barricade.addImage(barricadeimg)
    barricade.velocityX=-8
    //barricade.debug=true
    barricade.setCollider("rectangle",0,0,500,200)
    barricade.scale=0.2
    
    }
}

function shootpotion(){
potion=createSprite(rutu.x,rutu.y,20,20)
potion.addImage(tonicimg)
potion.scale=0.01
potion.velocityX=16
potiongroup.add(potion)

}

function spawnskycrow3(){
  if(frameCount%70===0){
    crow2=createSprite(width/1,Math.round(random(0,150)),30,30) 
crow2.velocityX=-8;
    crow2.scale=0.3
    //skyobstacle2.debug=true
    crowgroup2.add(crow2)
    crow2.addAnimation("crow",crowimg)
    crow2.setCollider("rectangle",0,0,200,100)
   
    }

}

function spawncorona1(){
if(frameCount%180===0){
corona1=createSprite(width/1,Math.round(random(250,300)),50,50)
corona1.velocityX=-8
corona1.scale=0.35
corona1group.add(corona1)
corona1.addImage(corona1img)

}

}

function spawncorona2(){
  if(frameCount%350===0){
  corona2=createSprite(width/1,Math.round(random(250,350)),50,50)
  corona2.velocityX=-8
  corona2.scale=0.35
  corona2group.add(corona2)
  corona2.addImage(corona2img)
  
  }
  
  }

  function spawncorona3(){
    if(frameCount%550===0){
    corona3=createSprite(width/1,Math.round(random(150,250)),50,50)
    corona3.velocityX=-8
    corona3.scale=0.35
    corona3group.add(corona3)
    corona3.addImage(corona3img)
    
    }
    
    }

    function spawnbarricade2(){
      if(frameCount%750===0){
        barricade2=createSprite(width/1,565,50,50)
        barricade2group.add(barricade2)
        barricade2.addImage(barricadeimg)
        barricade2.velocityX=-8
        //barricade.debug=true
        barricade2.setCollider("rectangle",0,0,500,200)
        barricade2.scale=0.2
        
        }
    }

    function cartoonspawnmaskandsanitizer(){
if(frameCount%150===0){
mask=createSprite(width/1,400,50,50)
mask.velocityX=-8
maskgroup.add(mask)
mask.scale=0.5

maskimg2=Math.round(random(1,2))
switch(maskimg2){
case 1:mask.addImage(maskimg)
mask.scale=0.3
break;
case 2:mask.addImage(sanitizerimg)
mask.scale=0.03
break;



}
}

    }

    function spawniperson(){
if(frameCount%220===0){
  iperson=createSprite(width/1,500,50,50)
  iperson.addImage(infectedpersonimg)
  iperson.scale=0.5
 // iperson.debug=true
  iperson.setCollider("rectangle",0,0,180,400)
  ipersongroup.add(iperson)
  iperson.velocityX=-8


}

    }

    function shootvaccine(){
vaccine=createSprite(rutu.x,rutu.y,50,20)
vaccine.addImage(vaccineimg)
vaccine.velocityX=16
vaccine.scale=0.26
vaccinegroup.add(vaccine)

    }


function showplayerpromise() {
  image(heartimg,520,70,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,200, 20);
  fill("#f50057");
  rect(600,100,playerpromise, 20);
  //noStroke();
  
}


function showsantalife() {
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("#ff0000");
  rect(600,100,santalife, 20);
  //noStroke();
  
}

function showhappinessrate() {
  image(happyimage,525,20,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("#fddf00");
  rect(600,50,happinessrate, 20);
  //noStroke();
  
}

function showplanefuel() {
  image(fuelimage,525,20,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("#fddf00");
  rect(600,50,planefuel,20);
  //noStroke();
  
}

function showplanelife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("#ff0000");
  rect(600,100,planelife, 20);





}

function showdinolife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("red");
  rect(600,100,dinolife, 20);

}

function showdinoenergy(){
  image(energyimage,525,20,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("blue");
  rect(600,50,dinoenergy, 20);


}

function showrutulife(){
  image(heartimg,535,90,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("red");
  rect(600,100,rutulife, 20);


}

function showzremaining(){
  image(zombieimg1,525,20,70,70)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("lightgreen");
  rect(600,50,zombieremaining, 20);


}

function showrutu2life(){
  image(heartimg,535,30,50,50)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,50,300, 20);
  fill("red");
  rect(600,50,immunity, 20);


}

function showcoronaremaining(){
  image(corona1img,535,90,60,60)
  strokeWeight(5)
  stroke("black")
  fill("white");
  rect(600,100,300, 20);
  fill("lightgreen");
  rect(600,100,coronaremaining, 20);

}



 













