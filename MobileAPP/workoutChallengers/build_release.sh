rm -f ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
rm -f workout_challengers.apk
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore workout_challengers.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk workout_challengers_key
zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk workout_challengers.apk
