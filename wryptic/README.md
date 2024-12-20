# Wryptic (cryptic wordle)

Just a light-touch change for my internet friend's Cryptic Wordle project. No big rewrite.

## Notes

### To change about existing site

- Vertical overflow, often meaning keyboard is not fully visible  
  - [x] FIXME: easy version
  - [ ] FIXME: properly/bigger styling rewrite
- Slight horizontal overflow
  - [ ] FIXME
- Today's answer logged in console -- potential accidental spoiler
  - [x] FIXME: Stop console log
- All Qs & As in the source code, more spoiler potential
  - [x] Encode in BASE64? Then can automatically decode immediately, at least meaning they're not instantly readable
  - [ ] Store in another file (as well as do a proper API req) to make the main source smaller?
- [x] Avoid overflow of "Explained!" button
