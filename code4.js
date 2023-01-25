gdjs.GameOver2Code = {};
gdjs.GameOver2Code.GDPlatformObjects1= [];
gdjs.GameOver2Code.GDPlatformObjects2= [];
gdjs.GameOver2Code.GDPlatformObjects3= [];
gdjs.GameOver2Code.GDBackgroundObjects1= [];
gdjs.GameOver2Code.GDBackgroundObjects2= [];
gdjs.GameOver2Code.GDBackgroundObjects3= [];
gdjs.GameOver2Code.GDDustParticlesObjects1= [];
gdjs.GameOver2Code.GDDustParticlesObjects2= [];
gdjs.GameOver2Code.GDDustParticlesObjects3= [];
gdjs.GameOver2Code.GDScorePannelObjects1= [];
gdjs.GameOver2Code.GDScorePannelObjects2= [];
gdjs.GameOver2Code.GDScorePannelObjects3= [];
gdjs.GameOver2Code.GDScoreTextObjects1= [];
gdjs.GameOver2Code.GDScoreTextObjects2= [];
gdjs.GameOver2Code.GDScoreTextObjects3= [];
gdjs.GameOver2Code.GDPlayerNameInputObjects1= [];
gdjs.GameOver2Code.GDPlayerNameInputObjects2= [];
gdjs.GameOver2Code.GDPlayerNameInputObjects3= [];
gdjs.GameOver2Code.GDRestartButtonObjects1= [];
gdjs.GameOver2Code.GDRestartButtonObjects2= [];
gdjs.GameOver2Code.GDRestartButtonObjects3= [];
gdjs.GameOver2Code.GDSubmitButtonObjects1= [];
gdjs.GameOver2Code.GDSubmitButtonObjects2= [];
gdjs.GameOver2Code.GDSubmitButtonObjects3= [];
gdjs.GameOver2Code.GDScoresButtonObjects1= [];
gdjs.GameOver2Code.GDScoresButtonObjects2= [];
gdjs.GameOver2Code.GDScoresButtonObjects3= [];
gdjs.GameOver2Code.GDSubmitLoaderObjects1= [];
gdjs.GameOver2Code.GDSubmitLoaderObjects2= [];
gdjs.GameOver2Code.GDSubmitLoaderObjects3= [];
gdjs.GameOver2Code.GDDinoObjects1= [];
gdjs.GameOver2Code.GDDinoObjects2= [];
gdjs.GameOver2Code.GDDinoObjects3= [];
gdjs.GameOver2Code.GDPlayer2Objects1= [];
gdjs.GameOver2Code.GDPlayer2Objects2= [];
gdjs.GameOver2Code.GDPlayer2Objects3= [];

gdjs.GameOver2Code.conditionTrue_0 = {val:false};
gdjs.GameOver2Code.condition0IsTrue_0 = {val:false};
gdjs.GameOver2Code.condition1IsTrue_0 = {val:false};
gdjs.GameOver2Code.condition2IsTrue_0 = {val:false};
gdjs.GameOver2Code.conditionTrue_1 = {val:false};
gdjs.GameOver2Code.condition0IsTrue_1 = {val:false};
gdjs.GameOver2Code.condition1IsTrue_1 = {val:false};
gdjs.GameOver2Code.condition2IsTrue_1 = {val:false};


gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDDustParticlesObjects1Objects = Hashtable.newFrom({"DustParticles": gdjs.GameOver2Code.GDDustParticlesObjects1});
gdjs.GameOver2Code.eventsList0 = function(runtimeScene) {

{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOver2Code.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.GameOver2Code.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDPlayerNameInputObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
{gdjs.GameOver2Code.conditionTrue_1 = gdjs.GameOver2Code.condition0IsTrue_0;
gdjs.GameOver2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11190780);
}
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOver2Code.GDDinoObjects1);
gdjs.GameOver2Code.GDDustParticlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDDustParticlesObjects1Objects, (( gdjs.GameOver2Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOver2Code.GDDinoObjects1[0].getPointX("DustProjection")), (( gdjs.GameOver2Code.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOver2Code.GDDinoObjects1[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameOver2Code.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDDustParticlesObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDDustParticlesObjects1[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDDustParticlesObjects1[i].setZOrder(0);
}
}}

}


};gdjs.GameOver2Code.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameOver2Code.GDDustParticlesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameOver2Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs.GameOver2Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDPlayer2Objects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDDustParticlesObjects2[i].setPosition((( gdjs.GameOver2Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs.GameOver2Code.GDPlayer2Objects2[0].getPointX("DustProjection")),(( gdjs.GameOver2Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs.GameOver2Code.GDPlayer2Objects2[0].getPointY("DustProjection")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameOver2Code.GDPlayer2Objects1);

gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOver2Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameOver2Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDPlayer2Objects1[i].setX(-((gdjs.GameOver2Code.GDPlayer2Objects1[i].getWidth())));
}
}}

}


};gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameOver2Code.GDRestartButtonObjects2});
gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDSubmitButtonObjects2Objects = Hashtable.newFrom({"SubmitButton": gdjs.GameOver2Code.GDSubmitButtonObjects2});
gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDScoresButtonObjects1Objects = Hashtable.newFrom({"ScoresButton": gdjs.GameOver2Code.GDScoresButtonObjects1});
gdjs.GameOver2Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOver2Code.GDRestartButtonObjects2);

gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDRestartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects2);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game2");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects2[i].enableEffect("Disabled", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects2);

gdjs.GameOver2Code.condition0IsTrue_0.val = false;
gdjs.GameOver2Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDSubmitButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameOver2Code.condition0IsTrue_0.val ) {
{
gdjs.GameOver2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}}
if (gdjs.GameOver2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOver2Code.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.GameOver2Code.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOver2Code.GDPlayerNameInputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.GameOver2Code.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOver2Code.GDPlayerNameInputObjects2[0].getString()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.GameOver2Code.GDScoresButtonObjects1);

gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver2Code.mapOfGDgdjs_46GameOver2Code_46GDScoresButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.GameOver2Code.eventsList3 = function(runtimeScene) {

{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOver2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameOver2Code.eventsList4 = function(runtimeScene) {

{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.hasSavingErrored("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d");
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOver2Code.GDSubmitButtonObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}}

}


};gdjs.GameOver2Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
gdjs.GameOver2Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), false);
}if ( gdjs.GameOver2Code.condition0IsTrue_0.val ) {
{
{gdjs.GameOver2Code.conditionTrue_1 = gdjs.GameOver2Code.condition1IsTrue_0;
gdjs.GameOver2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11183820);
}
}}
if (gdjs.GameOver2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects2);
{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects2[i].enableEffect("Disabled", true);
}
}}

}


{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
gdjs.GameOver2Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.isSaving("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d");
}if ( gdjs.GameOver2Code.condition0IsTrue_0.val ) {
{
{gdjs.GameOver2Code.conditionTrue_1 = gdjs.GameOver2Code.condition1IsTrue_0;
gdjs.GameOver2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11185372);
}
}}
if (gdjs.GameOver2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOver2Code.GDSubmitLoaderObjects2);
{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitLoaderObjects2[i].hide(false);
}
}}

}


{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
gdjs.GameOver2Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isSaving("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d"));
}if ( gdjs.GameOver2Code.condition0IsTrue_0.val ) {
{
{gdjs.GameOver2Code.conditionTrue_1 = gdjs.GameOver2Code.condition1IsTrue_0;
gdjs.GameOver2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11186684);
}
}}
if (gdjs.GameOver2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOver2Code.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitLoaderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GameOver2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameOver2Code.eventsList6 = function(runtimeScene) {

{


gdjs.GameOver2Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOver2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOver2Code.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOver2Code.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOver2Code.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOver2Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDScoreTextObjects1[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitLoaderObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Beache Breaker 4 - QuickSounds.com3.mp3", true, 70, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOver2Code.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOver2Code.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}
{ //Subevents
gdjs.GameOver2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOver2Code.eventsList1(runtimeScene);
}


{


gdjs.GameOver2Code.eventsList3(runtimeScene);
}


{


gdjs.GameOver2Code.eventsList5(runtimeScene);
}


};

gdjs.GameOver2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOver2Code.GDPlatformObjects1.length = 0;
gdjs.GameOver2Code.GDPlatformObjects2.length = 0;
gdjs.GameOver2Code.GDPlatformObjects3.length = 0;
gdjs.GameOver2Code.GDBackgroundObjects1.length = 0;
gdjs.GameOver2Code.GDBackgroundObjects2.length = 0;
gdjs.GameOver2Code.GDBackgroundObjects3.length = 0;
gdjs.GameOver2Code.GDDustParticlesObjects1.length = 0;
gdjs.GameOver2Code.GDDustParticlesObjects2.length = 0;
gdjs.GameOver2Code.GDDustParticlesObjects3.length = 0;
gdjs.GameOver2Code.GDScorePannelObjects1.length = 0;
gdjs.GameOver2Code.GDScorePannelObjects2.length = 0;
gdjs.GameOver2Code.GDScorePannelObjects3.length = 0;
gdjs.GameOver2Code.GDScoreTextObjects1.length = 0;
gdjs.GameOver2Code.GDScoreTextObjects2.length = 0;
gdjs.GameOver2Code.GDScoreTextObjects3.length = 0;
gdjs.GameOver2Code.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOver2Code.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOver2Code.GDPlayerNameInputObjects3.length = 0;
gdjs.GameOver2Code.GDRestartButtonObjects1.length = 0;
gdjs.GameOver2Code.GDRestartButtonObjects2.length = 0;
gdjs.GameOver2Code.GDRestartButtonObjects3.length = 0;
gdjs.GameOver2Code.GDSubmitButtonObjects1.length = 0;
gdjs.GameOver2Code.GDSubmitButtonObjects2.length = 0;
gdjs.GameOver2Code.GDSubmitButtonObjects3.length = 0;
gdjs.GameOver2Code.GDScoresButtonObjects1.length = 0;
gdjs.GameOver2Code.GDScoresButtonObjects2.length = 0;
gdjs.GameOver2Code.GDScoresButtonObjects3.length = 0;
gdjs.GameOver2Code.GDSubmitLoaderObjects1.length = 0;
gdjs.GameOver2Code.GDSubmitLoaderObjects2.length = 0;
gdjs.GameOver2Code.GDSubmitLoaderObjects3.length = 0;
gdjs.GameOver2Code.GDDinoObjects1.length = 0;
gdjs.GameOver2Code.GDDinoObjects2.length = 0;
gdjs.GameOver2Code.GDDinoObjects3.length = 0;
gdjs.GameOver2Code.GDPlayer2Objects1.length = 0;
gdjs.GameOver2Code.GDPlayer2Objects2.length = 0;
gdjs.GameOver2Code.GDPlayer2Objects3.length = 0;

gdjs.GameOver2Code.eventsList6(runtimeScene);

return;

}

gdjs['GameOver2Code'] = gdjs.GameOver2Code;
