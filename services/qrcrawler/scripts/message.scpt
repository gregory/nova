on run {targetBuddy, attachmentPath, messageText}
  tell application "Messages"
    set targetService to first service whose service type is iMessage
    set targetBuddy to buddy targetBuddy of targetService
    if messageText is not "" then
      send messageText to targetBuddy
    end if
    if attachmentPath is not "" then
      send (POSIX file attachmentPath) to targetBuddy
    end if
  end tell
end run

--on run {targetBuddy, attachmentPath, messageText}
  --set AppleScript's text item delimiters to " "
  --set targetBuddyNoSpaces to text items of targetBuddy as text
  --set AppleScript's text item delimiters to ""

  --tell application "Messages"
    --activate
    --set targetService to first service whose service type = iMessage

    --set targetBuddyRef to missing value
    --try
      --set targetBuddyRef to first buddy of targetService whose handle is targetBuddyNoSpaces
    --end try
    --if targetBuddyRef is missing value then
      --set targetBuddyRef to buddy targetBuddy of targetService
    --end if

    --if attachmentPath is not "" then
      --set attachmentAlias to POSIX file attachmentPath as alias
      --send attachmentAlias to targetBuddyRef
    --else if messageText is not "" then
      --send messageText to targetBuddyRef
    --end if
  --end tell
--end run
