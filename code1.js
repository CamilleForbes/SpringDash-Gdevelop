gdjs.GameCode = {};
gdjs.GameCode.GDCrab2Objects2_1final = [];

gdjs.GameCode.GDCrabObjects2_1final = [];

gdjs.GameCode.GDPlayer1Objects2_1final = [];

gdjs.GameCode.stopDoWhile5 = false;

gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDPlatformObjects5= [];
gdjs.GameCode.GDPlatformObjects6= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDBackgroundObjects6= [];
gdjs.GameCode.GDDustParticlesObjects1= [];
gdjs.GameCode.GDDustParticlesObjects2= [];
gdjs.GameCode.GDDustParticlesObjects3= [];
gdjs.GameCode.GDDustParticlesObjects4= [];
gdjs.GameCode.GDDustParticlesObjects5= [];
gdjs.GameCode.GDDustParticlesObjects6= [];
gdjs.GameCode.GDCrabObjects1= [];
gdjs.GameCode.GDCrabObjects2= [];
gdjs.GameCode.GDCrabObjects3= [];
gdjs.GameCode.GDCrabObjects4= [];
gdjs.GameCode.GDCrabObjects5= [];
gdjs.GameCode.GDCrabObjects6= [];
gdjs.GameCode.GDCrab2Objects1= [];
gdjs.GameCode.GDCrab2Objects2= [];
gdjs.GameCode.GDCrab2Objects3= [];
gdjs.GameCode.GDCrab2Objects4= [];
gdjs.GameCode.GDCrab2Objects5= [];
gdjs.GameCode.GDCrab2Objects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDTutorialSpriteObjects1= [];
gdjs.GameCode.GDTutorialSpriteObjects2= [];
gdjs.GameCode.GDTutorialSpriteObjects3= [];
gdjs.GameCode.GDTutorialSpriteObjects4= [];
gdjs.GameCode.GDTutorialSpriteObjects5= [];
gdjs.GameCode.GDTutorialSpriteObjects6= [];
gdjs.GameCode.GDBonusObjectObjects1= [];
gdjs.GameCode.GDBonusObjectObjects2= [];
gdjs.GameCode.GDBonusObjectObjects3= [];
gdjs.GameCode.GDBonusObjectObjects4= [];
gdjs.GameCode.GDBonusObjectObjects5= [];
gdjs.GameCode.GDBonusObjectObjects6= [];
gdjs.GameCode.GDBonusParticleObjects1= [];
gdjs.GameCode.GDBonusParticleObjects2= [];
gdjs.GameCode.GDBonusParticleObjects3= [];
gdjs.GameCode.GDBonusParticleObjects4= [];
gdjs.GameCode.GDBonusParticleObjects5= [];
gdjs.GameCode.GDBonusParticleObjects6= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects1= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects2= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects3= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects4= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects5= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects6= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects1= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects2= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects3= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects4= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects5= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects6= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects4= [];
gdjs.GameCode.GDJumpButtonObjects5= [];
gdjs.GameCode.GDJumpButtonObjects6= [];
gdjs.GameCode.GDDuckButtonObjects1= [];
gdjs.GameCode.GDDuckButtonObjects2= [];
gdjs.GameCode.GDDuckButtonObjects3= [];
gdjs.GameCode.GDDuckButtonObjects4= [];
gdjs.GameCode.GDDuckButtonObjects5= [];
gdjs.GameCode.GDDuckButtonObjects6= [];
gdjs.GameCode.GDLimitObjects1= [];
gdjs.GameCode.GDLimitObjects2= [];
gdjs.GameCode.GDLimitObjects3= [];
gdjs.GameCode.GDLimitObjects4= [];
gdjs.GameCode.GDLimitObjects5= [];
gdjs.GameCode.GDLimitObjects6= [];
gdjs.GameCode.GDDinoObjects1= [];
gdjs.GameCode.GDDinoObjects2= [];
gdjs.GameCode.GDDinoObjects3= [];
gdjs.GameCode.GDDinoObjects4= [];
gdjs.GameCode.GDDinoObjects5= [];
gdjs.GameCode.GDDinoObjects6= [];
gdjs.GameCode.GDPlayer1Objects1= [];
gdjs.GameCode.GDPlayer1Objects2= [];
gdjs.GameCode.GDPlayer1Objects3= [];
gdjs.GameCode.GDPlayer1Objects4= [];
gdjs.GameCode.GDPlayer1Objects5= [];
gdjs.GameCode.GDPlayer1Objects6= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialSprite"), gdjs.GameCode.GDTutorialSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Touch to start running.");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialSpriteObjects2[i].hide();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Limit"), gdjs.GameCode.GDLimitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenDuck"), gdjs.GameCode.GDTutorialTouchscreenDuckObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenJump"), gdjs.GameCode.GDTutorialTouchscreenJumpObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLimitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLimitObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenJumpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenJumpObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenDuckObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenDuckObjects1[i].hide();
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.GameCode.GDDustParticlesObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Limit"), gdjs.GameCode.GDLimitObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialSprite"), gdjs.GameCode.GDTutorialSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenDuck"), gdjs.GameCode.GDTutorialTouchscreenDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenJump"), gdjs.GameCode.GDTutorialTouchscreenJumpObjects3);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenJumpObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenJumpObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenDuckObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenDuckObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDLimitObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLimitObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialSpriteObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects3[i].setAnimationName("Run1");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects3[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "musicbyaden-jurgance-beach2.mp3", true, 50, 1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11190780);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects2);
gdjs.GameCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDustParticlesObjects2Objects, (( gdjs.GameCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects2[0].getPointX("DustProjection")), (( gdjs.GameCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects2[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayer1Objects4, gdjs.GameCode.GDPlayer1Objects5);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects5[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects5[k] = gdjs.GameCode.GDPlayer1Objects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects5.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayer1Objects5 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects5[i].setAnimationName("Run1");
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10973492);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
/* Reuse gdjs.GameCode.GDPlayer1Objects4 */
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].setPosition((( gdjs.GameCode.GDPlayer1Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects4[0].getPointX("DustProjection")),(( gdjs.GameCode.GDPlayer1Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects4[0].getPointY("DustProjection")));
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].startEmission();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects5);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects5[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects5[k] = gdjs.GameCode.GDPlayer1Objects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects5.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10975492);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayer1Objects5 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects5[i].setAnimationName("Jump1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects4[i].isCurrentAnimationName("Duck1") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects4[k] = gdjs.GameCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10976708);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Skid.mp3", false, 30, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpButtonObjects4Objects = Hashtable.newFrom({"JumpButton": gdjs.GameCode.GDJumpButtonObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDuckButtonObjects3Objects = Hashtable.newFrom({"DuckButton": gdjs.GameCode.GDDuckButtonObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpButtonObjects4Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects4[k] = gdjs.GameCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayer1Objects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DuckButton"), gdjs.GameCode.GDDuckButtonObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDuckButtonObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects3[i].setAnimationName("Duck1");
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setX((( gdjs.GameCode.GDPlayer1Objects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects3[0].getAABBRight()));
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects4[k] = gdjs.GameCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects4.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10978532);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
/* Reuse gdjs.GameCode.GDPlayer1Objects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects4[i].setAnimationName("Duck1");
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].setX((( gdjs.GameCode.GDPlayer1Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects4[0].getAABBRight()));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10979452);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects4[k] = gdjs.GameCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayer1Objects4[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects4[k] = gdjs.GameCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10974436);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].stopEmission();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects4Objects = Hashtable.newFrom({"Player1": gdjs.GameCode.GDPlayer1Objects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusObjectObjects4Objects = Hashtable.newFrom({"BonusObject": gdjs.GameCode.GDBonusObjectObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusParticleObjects4Objects = Hashtable.newFrom({"BonusParticle": gdjs.GameCode.GDBonusParticleObjects4});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BonusObject"), gdjs.GameCode.GDBonusObjectObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects4);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects4Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusObjectObjects4Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBonusObjectObjects4 */
/* Reuse gdjs.GameCode.GDPlayer1Objects4 */
gdjs.GameCode.GDBonusParticleObjects4.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusParticleObjects4Objects, (( gdjs.GameCode.GDPlayer1Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects4[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayer1Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDBonusParticleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusParticleObjects4[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BonusParticle"), gdjs.GameCode.GDBonusParticleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects3);
{for(var i = 0, len = gdjs.GameCode.GDBonusParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBonusParticleObjects3[i].setCenterPositionInScene((( gdjs.GameCode.GDPlayer1Objects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects3[0].getCenterXInScene()),(( gdjs.GameCode.GDPlayer1Objects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayer1Objects3[0].getCenterYInScene()));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects4Objects = Hashtable.newFrom({"Crab": gdjs.GameCode.GDCrabObjects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrab2Objects4Objects = Hashtable.newFrom({"Crab2": gdjs.GameCode.GDCrab2Objects4});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusObjectObjects4Objects = Hashtable.newFrom({"BonusObject": gdjs.GameCode.GDBonusObjectObjects4});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCrab2Objects4 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCrab2Objects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCrab2Objects4[i].getVariableNumber(gdjs.GameCode.GDCrab2Objects4[i].getVariables().get("Reward")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCrab2Objects4[k] = gdjs.GameCode.GDCrab2Objects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCrab2Objects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCrab2Objects4 */
gdjs.GameCode.GDBonusObjectObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBonusObjectObjects4Objects, (( gdjs.GameCode.GDCrab2Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDCrab2Objects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDCrab2Objects4.length === 0 ) ? 0 :gdjs.GameCode.GDCrab2Objects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects5Objects = Hashtable.newFrom({"Crab": gdjs.GameCode.GDCrabObjects5});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


gdjs.GameCode.stopDoWhile5 = false;
do {gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects5);
gdjs.GameCode.GDCrabObjects5.length = 0;

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects5Objects, 100 + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) * 70, (( gdjs.GameCode.GDPlatformObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects5[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDCrabObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCrabObjects5[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}
{ //Subevents: 
gdjs.GameCode.eventsList11(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile5 = true; 
} while ( !gdjs.GameCode.stopDoWhile5 );

}


{


{
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects4);
gdjs.GameCode.GDCrabObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects4Objects, gdjs.randomInRange(75, 125) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDCrabObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCrabObjects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects4);
gdjs.GameCode.GDCrab2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrab2Objects4Objects, gdjs.randomInRange(100, 125) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects4[0].getAABBTop()) - 20, "");
}{for(var i = 0, len = gdjs.GameCode.GDCrab2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDCrab2Objects4[i].returnVariable(gdjs.GameCode.GDCrab2Objects4[i].getVariables().get("Reward")).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDCrab2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDCrab2Objects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) < 2000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 8);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 0.7;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.GameCode.GDPlayer1Objects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrab2Objects3Objects = Hashtable.newFrom({"Crab2": gdjs.GameCode.GDCrab2Objects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects3Objects = Hashtable.newFrom({"Player1": gdjs.GameCode.GDPlayer1Objects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects3Objects = Hashtable.newFrom({"Crab": gdjs.GameCode.GDCrabObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects3ObjectsGDgdjs_46GameCode_46GDBonusObjectObjects3Objects = Hashtable.newFrom({"Crab": gdjs.GameCode.GDCrabObjects3, "BonusObject": gdjs.GameCode.GDBonusObjectObjects3});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BonusObject"), gdjs.GameCode.GDBonusObjectObjects3);
gdjs.copyArray(gdjs.GameCode.GDCrabObjects2, gdjs.GameCode.GDCrabObjects3);

{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects3ObjectsGDgdjs_46GameCode_46GDBonusObjectObjects3Objects);
}{for(var i = 0, len = gdjs.GameCode.GDCrabObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCrabObjects3[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects3[i].clearForces();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "Beache Breaker 4 - QuickSounds.com.mp3", false, 30, 0.5);
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].stopEmission();
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDCrabObjects2.length = 0;

gdjs.GameCode.GDCrab2Objects2.length = 0;

gdjs.GameCode.GDPlayer1Objects2.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDCrabObjects2_1final.length = 0;gdjs.GameCode.GDCrab2Objects2_1final.length = 0;gdjs.GameCode.GDPlayer1Objects2_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crab2"), gdjs.GameCode.GDCrab2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects3);
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrab2Objects3Objects, false, runtimeScene, true);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCrab2Objects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCrab2Objects2_1final.indexOf(gdjs.GameCode.GDCrab2Objects3[j]) === -1 )
            gdjs.GameCode.GDCrab2Objects2_1final.push(gdjs.GameCode.GDCrab2Objects3[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDPlayer1Objects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayer1Objects2_1final.indexOf(gdjs.GameCode.GDPlayer1Objects3[j]) === -1 )
            gdjs.GameCode.GDPlayer1Objects2_1final.push(gdjs.GameCode.GDPlayer1Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Crab"), gdjs.GameCode.GDCrabObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects3);
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayer1Objects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCrabObjects3Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCrabObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCrabObjects2_1final.indexOf(gdjs.GameCode.GDCrabObjects3[j]) === -1 )
            gdjs.GameCode.GDCrabObjects2_1final.push(gdjs.GameCode.GDCrabObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDPlayer1Objects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayer1Objects2_1final.indexOf(gdjs.GameCode.GDPlayer1Objects3[j]) === -1 )
            gdjs.GameCode.GDPlayer1Objects2_1final.push(gdjs.GameCode.GDPlayer1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDCrabObjects2_1final, gdjs.GameCode.GDCrabObjects2);
gdjs.copyArray(gdjs.GameCode.GDCrab2Objects2_1final, gdjs.GameCode.GDCrab2Objects2);
gdjs.copyArray(gdjs.GameCode.GDPlayer1Objects2_1final, gdjs.GameCode.GDPlayer1Objects2);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayer1Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").abortJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects2[i].setAnimationName("Dead1");
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead1");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameCode.GDBackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects3[i].setXOffset(gdjs.GameCode.GDPlatformObjects3[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBackgroundObjects3[i].setXOffset(gdjs.GameCode.GDBackgroundObjects3[i].getXOffset() + ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 500) * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects3);
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setEmitterForceMin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setEmitterForceMax(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2 + 45);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setFlow((100 / 1000) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setEmitterAngleB((90 / 1000) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}}

}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects1[i].isCurrentAnimationName("Dead1") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects1[k] = gdjs.GameCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayer1Objects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayer1Objects1[k] = gdjs.GameCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayer1Objects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead1";
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


gdjs.GameCode.eventsList20(runtimeScene);
}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects1[i].setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1Objects1[i].activateBehavior("Anchor", false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList21(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects5.length = 0;
gdjs.GameCode.GDPlatformObjects6.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects6.length = 0;
gdjs.GameCode.GDDustParticlesObjects1.length = 0;
gdjs.GameCode.GDDustParticlesObjects2.length = 0;
gdjs.GameCode.GDDustParticlesObjects3.length = 0;
gdjs.GameCode.GDDustParticlesObjects4.length = 0;
gdjs.GameCode.GDDustParticlesObjects5.length = 0;
gdjs.GameCode.GDDustParticlesObjects6.length = 0;
gdjs.GameCode.GDCrabObjects1.length = 0;
gdjs.GameCode.GDCrabObjects2.length = 0;
gdjs.GameCode.GDCrabObjects3.length = 0;
gdjs.GameCode.GDCrabObjects4.length = 0;
gdjs.GameCode.GDCrabObjects5.length = 0;
gdjs.GameCode.GDCrabObjects6.length = 0;
gdjs.GameCode.GDCrab2Objects1.length = 0;
gdjs.GameCode.GDCrab2Objects2.length = 0;
gdjs.GameCode.GDCrab2Objects3.length = 0;
gdjs.GameCode.GDCrab2Objects4.length = 0;
gdjs.GameCode.GDCrab2Objects5.length = 0;
gdjs.GameCode.GDCrab2Objects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects1.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects2.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects3.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects4.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects5.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects6.length = 0;
gdjs.GameCode.GDBonusObjectObjects1.length = 0;
gdjs.GameCode.GDBonusObjectObjects2.length = 0;
gdjs.GameCode.GDBonusObjectObjects3.length = 0;
gdjs.GameCode.GDBonusObjectObjects4.length = 0;
gdjs.GameCode.GDBonusObjectObjects5.length = 0;
gdjs.GameCode.GDBonusObjectObjects6.length = 0;
gdjs.GameCode.GDBonusParticleObjects1.length = 0;
gdjs.GameCode.GDBonusParticleObjects2.length = 0;
gdjs.GameCode.GDBonusParticleObjects3.length = 0;
gdjs.GameCode.GDBonusParticleObjects4.length = 0;
gdjs.GameCode.GDBonusParticleObjects5.length = 0;
gdjs.GameCode.GDBonusParticleObjects6.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects1.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects2.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects3.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects4.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects5.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects6.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects1.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects2.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects3.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects4.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects5.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects6.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects5.length = 0;
gdjs.GameCode.GDJumpButtonObjects6.length = 0;
gdjs.GameCode.GDDuckButtonObjects1.length = 0;
gdjs.GameCode.GDDuckButtonObjects2.length = 0;
gdjs.GameCode.GDDuckButtonObjects3.length = 0;
gdjs.GameCode.GDDuckButtonObjects4.length = 0;
gdjs.GameCode.GDDuckButtonObjects5.length = 0;
gdjs.GameCode.GDDuckButtonObjects6.length = 0;
gdjs.GameCode.GDLimitObjects1.length = 0;
gdjs.GameCode.GDLimitObjects2.length = 0;
gdjs.GameCode.GDLimitObjects3.length = 0;
gdjs.GameCode.GDLimitObjects4.length = 0;
gdjs.GameCode.GDLimitObjects5.length = 0;
gdjs.GameCode.GDLimitObjects6.length = 0;
gdjs.GameCode.GDDinoObjects1.length = 0;
gdjs.GameCode.GDDinoObjects2.length = 0;
gdjs.GameCode.GDDinoObjects3.length = 0;
gdjs.GameCode.GDDinoObjects4.length = 0;
gdjs.GameCode.GDDinoObjects5.length = 0;
gdjs.GameCode.GDDinoObjects6.length = 0;
gdjs.GameCode.GDPlayer1Objects1.length = 0;
gdjs.GameCode.GDPlayer1Objects2.length = 0;
gdjs.GameCode.GDPlayer1Objects3.length = 0;
gdjs.GameCode.GDPlayer1Objects4.length = 0;
gdjs.GameCode.GDPlayer1Objects5.length = 0;
gdjs.GameCode.GDPlayer1Objects6.length = 0;

gdjs.GameCode.eventsList22(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
