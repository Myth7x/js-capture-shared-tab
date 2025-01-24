# Browser-Screencast-Aufnahme

Dieses Skript ermöglicht es Ihnen, das aktuelle Fenster oder Tab Ihres Webbrowsers aufzuzeichnen. Es wird direkt in der Entwicklerkonsole des Browsers ausgeführt.

## Wichtige Warnung

Beachten Sie bitte, dass die Aufnahme von DMCA-geschützten Inhalten illegal ist und nicht unterstützt werden sollte. Verwenden Sie dieses Tool verantwortungsbewusst und stellen Sie sicher, dass alle aufgezeichneten Inhalte gesetzeskonform sind.

## Anleitung zur Verwendung

### Schritt 1: Öffnen Sie die Entwicklerkonsole
- Auf Windows/Linux: Drücken Sie `Ctrl + Shift + I`.
- Auf macOS: Drücken Sie `Cmd + Option + I`.

### Schritt 2: Skript in der Konsole ausführen
Kopieren Sie den bereitgestellten JavaScript-Code und fügen Sie ihn in die Konsole ein, gefolgt von der Eingabetaste.

### Schritt 3: Starten Sie die Aufnahme
Nach dem Ausführen des Codes sollten Sie eine Nachricht sehen, dass die Aufnahme gestartet wurde. Um die Aufnahme zu stoppen, rufen Sie `stopRecording()` in der Konsole auf.

### Schritt 4: Datei speichern
Sobald die Aufnahme gestoppt wird, beginnt ein automatischer Download eines Videos mit dem Namen `recording-<current-date>.mp4`.

## Hinweise

- Stellen Sie sicher, dass Ihr Browser die Verwendung von `getDisplayMedia()` unterstützt.
- Der Code muss in einer Umgebung ausgeführt werden, in der Pop-ups und Downloads zugelassen sind.
- Dieser Code funktioniert nur im Kontext des Webbrowsers aufgrund der Sicherheitsrichtlinien für Medienzugriffe.

## Problemlösung

- **Fehlermeldung:** Wenn Sie eine Fehlermeldung erhalten, überprüfen Sie die Browserkonsole auf spezifische Informationen. Möglicherweise müssen Sie Ihre Browsereinstellungen ändern oder sicherstellen, dass Ihr Browser aktualisiert ist.
- **Kein Aufnahmezugriff:** Stellen Sie sicher, dass Sie die Berechtigung zur Erfassung des Bildschirms erteilen, wenn Sie dazu aufgefordert werden.

## Lizenz

Dieser Code steht unter der MIT-Lizenz. Sie dürfen ihn für persönliche und kommerzielle Zwecke verwenden, ändern und teilen, solange Sie diese Lizenz beibehalten.
