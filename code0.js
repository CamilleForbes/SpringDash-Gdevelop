gdjs.IntroCode = {};
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];
gdjs.IntroCode.GDStartTextObjects1= [];
gdjs.IntroCode.GDStartTextObjects2= [];
gdjs.IntroCode.GDStartTextObjects3= [];
gdjs.IntroCode.GDGameTitleObjects1= [];
gdjs.IntroCode.GDGameTitleObjects2= [];
gdjs.IntroCode.GDGameTitleObjects3= [];
gdjs.IntroCode.GDSignArrowObjects1= [];
gdjs.IntroCode.GDSignArrowObjects2= [];
gdjs.IntroCode.GDSignArrowObjects3= [];
gdjs.IntroCode.GDPlatformRightObjects1= [];
gdjs.IntroCode.GDPlatformRightObjects2= [];
gdjs.IntroCode.GDPlatformRightObjects3= [];
gdjs.IntroCode.GDPlatformMiddleObjects1= [];
gdjs.IntroCode.GDPlatformMiddleObjects2= [];
gdjs.IntroCode.GDPlatformMiddleObjects3= [];
gdjs.IntroCode.GDPlatformLeftObjects1= [];
gdjs.IntroCode.GDPlatformLeftObjects2= [];
gdjs.IntroCode.GDPlatformLeftObjects3= [];
gdjs.IntroCode.GDIslandObjects1= [];
gdjs.IntroCode.GDIslandObjects2= [];
gdjs.IntroCode.GDIslandObjects3= [];
gdjs.IntroCode.GDUmbrellaObjects1= [];
gdjs.IntroCode.GDUmbrellaObjects2= [];
gdjs.IntroCode.GDUmbrellaObjects3= [];
gdjs.IntroCode.GDBeachBallObjects1= [];
gdjs.IntroCode.GDBeachBallObjects2= [];
gdjs.IntroCode.GDBeachBallObjects3= [];
gdjs.IntroCode.GDSandBucketObjects1= [];
gdjs.IntroCode.GDSandBucketObjects2= [];
gdjs.IntroCode.GDSandBucketObjects3= [];
gdjs.IntroCode.GDTreeObjects1= [];
gdjs.IntroCode.GDTreeObjects2= [];
gdjs.IntroCode.GDTreeObjects3= [];
gdjs.IntroCode.GDPlayer1Objects1= [];
gdjs.IntroCode.GDPlayer1Objects2= [];
gdjs.IntroCode.GDPlayer1Objects3= [];
gdjs.IntroCode.GDPlayer2Objects1= [];
gdjs.IntroCode.GDPlayer2Objects2= [];
gdjs.IntroCode.GDPlayer2Objects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.IntroCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDStartTextObjects1[i].setString("Click which player you want to be");
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.IntroCode.GDPlayer1Objects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.IntroCode.GDPlayer2Objects2});
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.IntroCode.GDPlayer1Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects, runtimeScene, false, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.IntroCode.GDPlayer2Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


{



}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.IntroCode.GDPlayer1Objects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.IntroCode.GDDustParticlesObjects2});
gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11190780);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDDustParticlesObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.IntroCode.GDPlayer2Objects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.IntroCode.GDDustParticlesObjects2});
gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11190781);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDDustParticlesObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.IntroCode.GDPlayer1Objects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.IntroCode.GDPlayer2Objects2});
gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.IntroCode.GDPlayer1Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects, runtimeScene, false, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10905764);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDPlayer1Objects2 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayer1Objects2[i].setAnimationName("Run");
}
}
{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.IntroCode.GDPlayer2Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects, runtimeScene, false, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10897612);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayer2Objects2[i].setAnimationName("Run1");
}
}
{ //Subevents
gdjs.IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.IntroCode.GDPlayer1Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer1Objects2Objects, runtimeScene, false, true);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10888780);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.IntroCode.GDDustParticlesObjects2);
/* Reuse gdjs.IntroCode.GDPlayer1Objects2 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayer1Objects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.IntroCode.GDPlayer2Objects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayer2Objects2Objects, runtimeScene, false, true);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10880684);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.IntroCode.GDDustParticlesObjects2);
/* Reuse gdjs.IntroCode.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs.IntroCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayer2Objects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.IntroCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDDustParticlesObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10873788);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10871948);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
}

}


};gdjs.IntroCode.eventsList6 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "YWSB8UP-beach.mp3", true, 30, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.eventsList2(runtimeScene);
}


{


gdjs.IntroCode.eventsList5(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDGameTitleObjects1.length = 0;
gdjs.IntroCode.GDGameTitleObjects2.length = 0;
gdjs.IntroCode.GDGameTitleObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDUmbrellaObjects1.length = 0;
gdjs.IntroCode.GDUmbrellaObjects2.length = 0;
gdjs.IntroCode.GDUmbrellaObjects3.length = 0;
gdjs.IntroCode.GDBeachBallObjects1.length = 0;
gdjs.IntroCode.GDBeachBallObjects2.length = 0;
gdjs.IntroCode.GDBeachBallObjects3.length = 0;
gdjs.IntroCode.GDSandBucketObjects1.length = 0;
gdjs.IntroCode.GDSandBucketObjects2.length = 0;
gdjs.IntroCode.GDSandBucketObjects3.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDPlayer1Objects1.length = 0;
gdjs.IntroCode.GDPlayer1Objects2.length = 0;
gdjs.IntroCode.GDPlayer1Objects3.length = 0;
gdjs.IntroCode.GDPlayer2Objects1.length = 0;
gdjs.IntroCode.GDPlayer2Objects2.length = 0;
gdjs.IntroCode.GDPlayer2Objects3.length = 0;

gdjs.IntroCode.eventsList6(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
