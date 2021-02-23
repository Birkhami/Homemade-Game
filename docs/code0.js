gdjs.GameCode = {};
gdjs.GameCode.GDFloorObjects1= [];
gdjs.GameCode.GDFloorObjects2= [];
gdjs.GameCode.GDFloorObjects3= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDRecipeObjects1= [];
gdjs.GameCode.GDRecipeObjects2= [];
gdjs.GameCode.GDRecipeObjects3= [];
gdjs.GameCode.GDCollectionPointObjects1= [];
gdjs.GameCode.GDCollectionPointObjects2= [];
gdjs.GameCode.GDCollectionPointObjects3= [];
gdjs.GameCode.GDMoneyObjects1= [];
gdjs.GameCode.GDMoneyObjects2= [];
gdjs.GameCode.GDMoneyObjects3= [];
gdjs.GameCode.GDOrder0Objects1= [];
gdjs.GameCode.GDOrder0Objects2= [];
gdjs.GameCode.GDOrder0Objects3= [];
gdjs.GameCode.GDOrder1Objects1= [];
gdjs.GameCode.GDOrder1Objects2= [];
gdjs.GameCode.GDOrder1Objects3= [];
gdjs.GameCode.GDOrder2Objects1= [];
gdjs.GameCode.GDOrder2Objects2= [];
gdjs.GameCode.GDOrder2Objects3= [];
gdjs.GameCode.GDOrder3Objects1= [];
gdjs.GameCode.GDOrder3Objects2= [];
gdjs.GameCode.GDOrder3Objects3= [];
gdjs.GameCode.GDOrder4Objects1= [];
gdjs.GameCode.GDOrder4Objects2= [];
gdjs.GameCode.GDOrder4Objects3= [];
gdjs.GameCode.GDTimeObjects1= [];
gdjs.GameCode.GDTimeObjects2= [];
gdjs.GameCode.GDTimeObjects3= [];
gdjs.GameCode.GDClockObjects1= [];
gdjs.GameCode.GDClockObjects2= [];
gdjs.GameCode.GDClockObjects3= [];
gdjs.GameCode.GDCoinsObjects1= [];
gdjs.GameCode.GDCoinsObjects2= [];
gdjs.GameCode.GDCoinsObjects3= [];
gdjs.GameCode.GDInventorySlot0Objects1= [];
gdjs.GameCode.GDInventorySlot0Objects2= [];
gdjs.GameCode.GDInventorySlot0Objects3= [];
gdjs.GameCode.GDInventorySlot1Objects1= [];
gdjs.GameCode.GDInventorySlot1Objects2= [];
gdjs.GameCode.GDInventorySlot1Objects3= [];

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


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder0Objects2Objects = Hashtable.newFrom({"Order0": gdjs.GameCode.GDOrder0Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder1Objects2Objects = Hashtable.newFrom({"Order1": gdjs.GameCode.GDOrder1Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder2Objects2Objects = Hashtable.newFrom({"Order2": gdjs.GameCode.GDOrder2Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder3Objects2Objects = Hashtable.newFrom({"Order3": gdjs.GameCode.GDOrder3Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder4Objects1Objects = Hashtable.newFrom({"Order4": gdjs.GameCode.GDOrder4Objects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Order0"), gdjs.GameCode.GDOrder0Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder0Objects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Order1"), gdjs.GameCode.GDOrder1Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Order2"), gdjs.GameCode.GDOrder2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder2Objects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) != 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Order3"), gdjs.GameCode.GDOrder3Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder3Objects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) != 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Order4"), gdjs.GameCode.GDOrder4Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOrder4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)));
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCollectionPointObjects1Objects = Hashtable.newFrom({"CollectionPoint": gdjs.GameCode.GDCollectionPointObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(120);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(90);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects1Objects, false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Money"), gdjs.GameCode.GDMoneyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Order0"), gdjs.GameCode.GDOrder0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Order1"), gdjs.GameCode.GDOrder1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Order2"), gdjs.GameCode.GDOrder2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Order3"), gdjs.GameCode.GDOrder3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Order4"), gdjs.GameCode.GDOrder4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Recipe"), gdjs.GameCode.GDRecipeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.GameCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMoneyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMoneyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameCode.GDRecipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRecipeObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDOrder0Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDOrder0Objects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.GameCode.GDOrder1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDOrder1Objects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.GameCode.GDOrder2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDOrder2Objects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.GameCode.GDOrder3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDOrder3Objects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.GameCode.GDOrder4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDOrder4Objects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.GameCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimeObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) / 12), "Time");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
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
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7761220);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("CollectionPoint"), gdjs.GameCode.GDCollectionPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCollectionPointObjects1Objects, false, runtimeScene, true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7767668);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)), "Time");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time");
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDFloorObjects1.length = 0;
gdjs.GameCode.GDFloorObjects2.length = 0;
gdjs.GameCode.GDFloorObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDRecipeObjects1.length = 0;
gdjs.GameCode.GDRecipeObjects2.length = 0;
gdjs.GameCode.GDRecipeObjects3.length = 0;
gdjs.GameCode.GDCollectionPointObjects1.length = 0;
gdjs.GameCode.GDCollectionPointObjects2.length = 0;
gdjs.GameCode.GDCollectionPointObjects3.length = 0;
gdjs.GameCode.GDMoneyObjects1.length = 0;
gdjs.GameCode.GDMoneyObjects2.length = 0;
gdjs.GameCode.GDMoneyObjects3.length = 0;
gdjs.GameCode.GDOrder0Objects1.length = 0;
gdjs.GameCode.GDOrder0Objects2.length = 0;
gdjs.GameCode.GDOrder0Objects3.length = 0;
gdjs.GameCode.GDOrder1Objects1.length = 0;
gdjs.GameCode.GDOrder1Objects2.length = 0;
gdjs.GameCode.GDOrder1Objects3.length = 0;
gdjs.GameCode.GDOrder2Objects1.length = 0;
gdjs.GameCode.GDOrder2Objects2.length = 0;
gdjs.GameCode.GDOrder2Objects3.length = 0;
gdjs.GameCode.GDOrder3Objects1.length = 0;
gdjs.GameCode.GDOrder3Objects2.length = 0;
gdjs.GameCode.GDOrder3Objects3.length = 0;
gdjs.GameCode.GDOrder4Objects1.length = 0;
gdjs.GameCode.GDOrder4Objects2.length = 0;
gdjs.GameCode.GDOrder4Objects3.length = 0;
gdjs.GameCode.GDTimeObjects1.length = 0;
gdjs.GameCode.GDTimeObjects2.length = 0;
gdjs.GameCode.GDTimeObjects3.length = 0;
gdjs.GameCode.GDClockObjects1.length = 0;
gdjs.GameCode.GDClockObjects2.length = 0;
gdjs.GameCode.GDClockObjects3.length = 0;
gdjs.GameCode.GDCoinsObjects1.length = 0;
gdjs.GameCode.GDCoinsObjects2.length = 0;
gdjs.GameCode.GDCoinsObjects3.length = 0;
gdjs.GameCode.GDInventorySlot0Objects1.length = 0;
gdjs.GameCode.GDInventorySlot0Objects2.length = 0;
gdjs.GameCode.GDInventorySlot0Objects3.length = 0;
gdjs.GameCode.GDInventorySlot1Objects1.length = 0;
gdjs.GameCode.GDInventorySlot1Objects2.length = 0;
gdjs.GameCode.GDInventorySlot1Objects3.length = 0;

gdjs.GameCode.eventsList2(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
