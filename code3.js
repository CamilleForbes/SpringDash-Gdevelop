gdjs.GameOverCode = {};
gdjs.GameOverCode.GDPlatformObjects1= [];
gdjs.GameOverCode.GDPlatformObjects2= [];
gdjs.GameOverCode.GDPlatformObjects3= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects3= [];
gdjs.GameOverCode.GDDustParticlesObjects1= [];
gdjs.GameOverCode.GDDustParticlesObjects2= [];
gdjs.GameOverCode.GDDustParticlesObjects3= [];
gdjs.GameOverCode.GDScorePannelObjects1= [];
gdjs.GameOverCode.GDScorePannelObjects2= [];
gdjs.GameOverCode.GDScorePannelObjects3= [];
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects3= [];
gdjs.GameOverCode.GDPlayerNameInputObjects1= [];
gdjs.GameOverCode.GDPlayerNameInputObjects2= [];
gdjs.GameOverCode.GDPlayerNameInputObjects3= [];
gdjs.GameOverCode.GDRestartButtonObjects1= [];
gdjs.GameOverCode.GDRestartButtonObjects2= [];
gdjs.GameOverCode.GDRestartButtonObjects3= [];
gdjs.GameOverCode.GDSubmitButtonObjects1= [];
gdjs.GameOverCode.GDSubmitButtonObjects2= [];
gdjs.GameOverCode.GDSubmitButtonObjects3= [];
gdjs.GameOverCode.GDScoresButtonObjects1= [];
gdjs.GameOverCode.GDScoresButtonObjects2= [];
gdjs.GameOverCode.GDScoresButtonObjects3= [];
gdjs.GameOverCode.GDSubmitLoaderObjects1= [];
gdjs.GameOverCode.GDSubmitLoaderObjects2= [];
gdjs.GameOverCode.GDSubmitLoaderObjects3= [];
gdjs.GameOverCode.GDDinoObjects1= [];
gdjs.GameOverCode.GDDinoObjects2= [];
gdjs.GameOverCode.GDDinoObjects3= [];
gdjs.GameOverCode.GDPlayer1Objects1= [];
gdjs.GameOverCode.GDPlayer1Objects2= [];
gdjs.GameOverCode.GDPlayer1Objects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects1Objects = Hashtable.newFrom({"DustParticles": gdjs.GameOverCode.GDDustParticlesObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11190780);
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects1);
gdjs.GameOverCode.GDDustParticlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects1Objects, (( gdjs.GameOverCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects1[0].getPointX("DustProjection")), (( gdjs.GameOverCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects1[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setZOrder(0);
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameOverCode.GDDustParticlesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameOverCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayer1Objects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects2[i].setPosition((( gdjs.GameOverCode.GDPlayer1Objects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDPlayer1Objects2[0].getPointX("DustProjection")),(( gdjs.GameOverCode.GDPlayer1Objects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDPlayer1Objects2[0].getPointY("DustProjection")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameOverCode.GDPlayer1Objects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects1);
/* Reuse gdjs.GameOverCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayer1Objects1[i].setX(-((( gdjs.GameOverCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects1[0].getWidth())));
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameOverCode.GDRestartButtonObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDSubmitButtonObjects2Objects = Hashtable.newFrom({"SubmitButton": gdjs.GameOverCode.GDSubmitButtonObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDScoresButtonObjects1Objects = Hashtable.newFrom({"ScoresButton": gdjs.GameOverCode.GDScoresButtonObjects1});
gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverCode.GDRestartButtonObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].enableEffect("Disabled", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDSubmitButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", true);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.GameOverCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects2[0].getString()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.GameOverCode.GDScoresButtonObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDScoresButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.hasSavingErrored("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDSubmitButtonObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}}

}


};gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11142412);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].enableEffect("Disabled", true);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.isSaving("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11143220);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects2[i].hide(false);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isSaving("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d"));
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11144204);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Beache Breaker 4 - QuickSounds.com2.mp3", true, 70, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


{


gdjs.GameOverCode.eventsList3(runtimeScene);
}


{


gdjs.GameOverCode.eventsList5(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDPlatformObjects1.length = 0;
gdjs.GameOverCode.GDPlatformObjects2.length = 0;
gdjs.GameOverCode.GDPlatformObjects3.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects3.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects1.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects2.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects3.length = 0;
gdjs.GameOverCode.GDScorePannelObjects1.length = 0;
gdjs.GameOverCode.GDScorePannelObjects2.length = 0;
gdjs.GameOverCode.GDScorePannelObjects3.length = 0;
gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects3.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects1.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects2.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects3.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects1.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects2.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects3.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects1.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects2.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects3.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects3.length = 0;
gdjs.GameOverCode.GDPlayer1Objects1.length = 0;
gdjs.GameOverCode.GDPlayer1Objects2.length = 0;
gdjs.GameOverCode.GDPlayer1Objects3.length = 0;

gdjs.GameOverCode.eventsList6(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
