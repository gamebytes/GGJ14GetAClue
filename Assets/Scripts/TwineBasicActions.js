#pragma strict

/* Twine Basic Actions
 *
 * Twine behavior script. Receives messages from the Unity API inside the
 * sugarcaneUnity Twine target. Attach to a singleton game object called
 * `TwineScript` in each scene.
 */

private var _nextPassage = '';

function Start() {
  Debug.Log('foo|bar'.Split("|"[0])[1]);
}

// Change scenes
function NewRoom(passageName : String) {
  _nextPassage = passageName.Split("|" [0])[1];
  var sceneName = passageName.Split("|" [0])[0];
  Application.LoadLevel(sceneName);
}

function OnLevelWasLoaded(_level) {
  yield WaitForSeconds(3);
  Twine.loadPassage(_nextPassage);
  _nextPassage = '';
}
