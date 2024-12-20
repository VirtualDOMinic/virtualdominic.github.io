// Encoded answers using btoa (same map as line 9179 with reverse function)
const targetWordle = [
  [
      "Vouchsafed information about Roman square",
      "Z2l2ZW4="
  ],
  [
      "Country parrot seen round city",
      "a2VueWE="
  ],
  [
      "Volunteers express disapproval — that’s not acceptable",
      "dGFib28="
  ],
  [
      "Sound beginning when hummingbird is rapidly returning",
      "d2hpcnI="
  ],
  [
      "Dynamic person is good in bank",
      "dGlnZXI="
  ],
  [
      "Record single up around number four in chart",
      "ZW5yb2w="
  ],
  [
      "It may get endless representation",
      "aW1hZ2U="
  ],
  [
      "Maxim’s garden feature?",
      "Z25vbWU="
  ],
  [
      "Plant serving sauce with meat",
      "b3hsaXA="
  ],
  [
      "Roofer left in middle or row",
      "dGlsZXI="
  ],
  [
      "Model put up by a fabulous writer",
      "YWVzb3A="
  ],
  [
      "Surprisingly content to ignore every new music group",
      "b2N0ZXQ="
  ],
  [
      "Praise out of place in review of books",
      "YXVkaXQ="
  ],
  [
      "Class left out of big house",
      "Y2FzdGU="
  ],
  [
      "Quickly take horse from native American",
      "YXBhY2U="
  ],
  [
      "Singer in first ENO Rigoletto",
      "dGVub3I="
  ],
  [
      "Eroded around front of ship — not so good",
      "d29yc2U="
  ],
  [
      "Choirmaster’s beginning to repeat part of Mass",
      "Y3JlZG8="
  ],
  [
      "The man’s gaining tons in robbery",
      "aGVpc3Q="
  ],
  [
      "Proposer is Shaker’s companion?",
      "bW92ZXI="
  ],
  [
      "Present of francs given to monarch",
      "b2ZmZXI="
  ],
  [
      "Express dismay as relative has nothing to eat",
      "Z3JvYW4="
  ],
  [
      "Med resort's inspiring hotel in suitable place",
      "bmljaGU="
  ],
  [
      "High official and old men laugh",
      "cGFzaGE="
  ],
  [
      "Round and large character",
      "b21lZ2E="
  ],
  [
      "Left port carrying cargo",
      "bGFkZW4="
  ],
  [
      "Old-fashioned fool interrupts gym class",
      "cGFzc2U="
  ],
  [
      "Son to possess smooth face?",
      "c2hhdmU="
  ],
  [
      "Fool accepting second surprising plot development",
      "dHdpc3Q="
  ],
  [
      "Beam of light in contact with synthetic fabric",
      "cmF5b24="
  ],
  [
      "Someone acting for another in favour of two unknowns",
      "cHJveHk="
  ],
  [
      "Nothing right in girl? That's hard!",
      "aXZvcnk="
  ],
  [
      "Stipulations for academic periods",
      "dGVybXM="
  ],
  [
      "Greek party with wealth not half evident",
      "ZG9yaWM="
  ],
  [
      "The Spanish drink in Scottish city",
      "ZWxnaW4="
  ],
  [
      "Pole’s few lines of poetry",
      "YW5vZGU="
  ],
  [
      "Traffic needs to speed up heading for Edinburgh",
      "dHJhZGU="
  ],
  [
      "Cheats and criminals caught out",
      "cm9va3M="
  ],
  [
      "Key rings unable to be brought up",
      "dGFib28="
  ],
  [
      "Asian dog covering miles",
      "dGFtaWw="
  ],
  [
      "Like this young lady from East African port",
      "bGFnb3M="
  ],
  [
      "Plaintiff's back behind person who won't be appealing?",
      "ZnJ1bXA="
  ],
  [
      "Give a lift to European and others around",
      "ZWxhdGU="
  ],
  [
      "Writer quite slowly knocking out leading article",
      "ZGFudGU="
  ],
  [
      "Funds in Madison County",
      "YnVja3M="
  ],
  [
      "Treasure for Paris Commune Le Havre's seized back",
      "aGVsZW4="
  ],
  [
      "Very fine short name for a hedgehog?",
      "c29uaWM="
  ],
  [
      "Fool about to produce gunpowder ingredient",
      "bml0cmU="
  ],
  [
      "Fear of god?",
      "cGFuaWM="
  ],
  [
      "Condemn explosion",
      "Ymxhc3Q="
  ],
  [
      "Queen follows favourite saint",
      "cGV0ZXI="
  ],
  [
      "Family member doesn't start to let loose",
      "dW50aWU="
  ],
  [
      "Province in actual centre of Germany",
      "cmVhbG0="
  ],
  [
      "Extra snake almost died",
      "YWRkZWQ="
  ],
  [
      "Extremely desirable drug store",
      "ZGVwb3Q="
  ],
  [
      "Encouraging word for Charlie's predecessor",
      "YnJhdm8="
  ],
  [
      "Uncommon sense in a German city",
      "ZXNzZW4="
  ],
  [
      "Clubs fancy something spicy?",
      "Y2xvdmU="
  ],
  [
      "Server missing one essential liquid",
      "d2F0ZXI="
  ],
  [
      "New farmer oddly quiet",
      "ZnJlc2g="
  ],
  [
      "Introduction of competition hurt store",
      "Y2FjaGU="
  ],
  [
      "Municipal head from Irish county? Right",
      "bWF5b3I="
  ],
  [
      "Refuse hard slog",
      "bWFyY2g="
  ],
  [
      "Burned remains after emptying secret store",
      "c3Rhc2g="
  ],
  [
      "Check a Buddhist at regular intervals",
      "YXVkaXQ="
  ],
  [
      "Treatment of savant by university",
      "dXNhZ2U="
  ],
  [
      "Trifling child",
      "bWlub3I="
  ],
  [
      "Letters from schoolmaster never enforcing discipline",
      "c3Rlcm4="
  ],
  [
      "Tea from northbound service area",
      "YXNzYW0="
  ],
  [
      "Organ adds energy for fast movement",
      "bHVuZ2U="
  ],
  [
      "Small bag for art",
      "c2tpbGw="
  ],
  [
      "Distinguished Muslim reversed interdiction binding Washington",
      "bmF3YWI="
  ],
  [
      "Hospital thanks bringer of gifts",
      "c2FudGE="
  ],
  [
      "Native American’s article read in bed",
      "Y2FyaWI="
  ],
  [
      "How to address Hindu dignitary in the morning in Westminster?",
      "c3dhbWk="
  ],
  [
      "Live on cape overlooking a palm-tree",
      "YXJlY2E="
  ],
  [
      "Poor mark in school given by master",
      "Z2FtbWE="
  ],
  [
      "Trim short leggings",
      "dGlnaHQ="
  ],
  [
      "Make altogether disgusting",
      "Z3Jvc3M="
  ],
  [
      "Sort of lamp I plugged in picked up as benefit",
      "YXZhaWw="
  ],
  [
      "Man I have heard on the radio",
      "cm9nZXI="
  ],
  [
      "Horrible feeling commonly looms over time",
      "YW5nc3Q="
  ],
  [
      "College window",
      "b3JpZWw="
  ],
  [
      "Compound kept by some Westerners",
      "ZXN0ZXI="
  ],
  [
      "Instrument played by old Marx",
      "aGFycG8="
  ],
  [
      "Criticise one Conservative creating alarm",
      "cGFuaWM="
  ],
  [
      "Female bird always returning full of energy",
      "cmVldmU="
  ],
  [
      "We hear horses eat in field",
      "Z3JhemU="
  ],
  [
      "Like female not looking very well",
      "YXNoZW4="
  ],
  [
      "Girl in New York who looks after children?",
      "bmFubnk="
  ],
  [
      "Chop end off dining chair",
      "Y2FydmU="
  ],
  [
      "Be left with large and ultimately unlovely stomach",
      "YmVsbHk="
  ],
  [
      "Athlete runs behind lots of people",
      "cmFjZXI="
  ],
  [
      "Severe reduction in A & E",
      "YWN1dGU="
  ],
  [
      "Nobleman upset Liberal? That's funny",
      "ZHJvbGw="
  ],
  [
      "Terribly nice English family member",
      "bmllY2U="
  ],
  [
      "Make circular motion with part of foot",
      "d2hlZWw="
  ],
  [
      "Join a Parisian welcoming computers etc.",
      "dW5pdGU="
  ],
  [
      "Movable chair some used anywhere",
      "c2VkYW4="
  ],
  [
      "Remnant of fire found at the end of three months",
      "ZW1iZXI="
  ],
  [
      "Proudly claim vessel carries spades",
      "Ym9hc3Q="
  ],
  [
      "Safe place to jump",
      "dmF1bHQ="
  ],
  [
      "Seal swimming at end of beach shows restraint for an animal",
      "bGVhc2g="
  ],
  [
      "Royal Society’s in misery with lower standards",
      "d29yc2U="
  ],
  [
      "Speak at length with old judge",
      "b3JhdGU="
  ],
  [
      "Girl trapping judge’s assassin",
      "bmluamE="
  ],
  [
      "Bulk large on the outside?",
      "YnVsZ2U="
  ],
  [
      "Certain about Chile’s capital being somewhere in the Andes",
      "c3VjcmU="
  ],
  [
      "Section of poem to preserve — Tasso’s no fool",
      "Y2FudG8="
  ],
  [
      "Socialists pursuing Conservative split",
      "Y2xlZnQ="
  ],
  [
      "Mike’s stuffing piece of meat to munch with gusto",
      "Y2hvbXA="
  ],
  [
      "Trinity right within you",
      "dGhyZWU="
  ],
  [
      "Parrot of old lady put with cashew when she is absent",
      "bWFjYXc="
  ],
  [
      "Delete Times puzzle at the end",
      "ZXJhc2U="
  ],
  [
      "Suffer at home with vicious mutt",
      "aW5jdXI="
  ],
  [
      "Come gallantly holding final letter",
      "b21lZ2E="
  ],
  [
      "Very easy task collecting river junk",
      "ZHJvc3M="
  ],
  [
      "Greek character hiding in handsome garden",
      "b21lZ2E="
  ],
  [
      "Tuna swimming with small relations",
      "YXVudHM="
  ],
  [
      "Knock out jockey regularly — that's strange!",
      "a29va3k="
  ],
  [
      "Robot starts to design rocket on its doorstep",
      "ZHJvaWQ="
  ],
  [
      "Finally clean a pig enclosure that's unpleasant!",
      "bmFzdHk="
  ],
  [
      "Custom from American era",
      "dXNhZ2U="
  ],
  [
      "Shellfish that’s uncooked put into empty pan",
      "cHJhd24="
  ],
  [
      "Pursue ornament with engraving",
      "Y2hhc2U="
  ],
  [
      "Deduce number will have escaped fire",
      "aW5mZXI="
  ],
  [
      "Be sad for us in midst of glumness",
      "bW91cm4="
  ],
  [
      "Arrange to bring in computers for people",
      "bGFpdHk="
  ],
  [
      "Suspends comments about post finally",
      "c3RheXM="
  ],
  [
      "King taking a position no longer viable",
      "a2FwdXQ="
  ],
  [
      "Rather wet smell concealed from some Londoner",
      "aHVtaWQ="
  ],
  [
      "Type of city where one does as the locals?",
      "cm9tYW4="
  ],
  [
      "Material in patch in overalls",
      "Y2hpbm8="
  ],
  [
      "Despairing poet moving end of verse to earlier position",
      "YmxlYWs="
  ],
  [
      "Democrat and friend are amorous together",
      "ZGFsbHk="
  ],
  [
      "Reminder about university being complacent",
      "cHJvdWQ="
  ],
  [
      "Design on cent’s piece coined for particular occasion",
      "bm9uY2U="
  ],
  [
      "Bones in bag next to top drawer?",
      "c2FjcmE="
  ],
  [
      "Learner in military group not exactly bright",
      "dW5saXQ="
  ],
  [
      "Eponymous heroine saves island home for birds",
      "ZXlyaWU="
  ],
  [
      "Poet’s residence by river",
      "aG9tZXI="
  ],
  [
      "Ate some shortbread in Edinburgh",
      "ZGluZWQ="
  ],
  [
      "Book a woman’s back treatment",
      "cmVoYWI="
  ],
  [
      "The same detective returned over the top",
      "ZGl0dG8="
  ],
  [
      "Great Britain's flipping harsh",
      "YWNlcmI="
  ],
  [
      "Vehicle broken by butcher’s van in badly neglected state",
      "bGltYm8="
  ],
  [
      "Spray bound to release nitrogen",
      "c3ByaWc="
  ],
  [
      "Do away with Times editorial’s introduction",
      "ZXJhc2U="
  ],
  [
      "Places quotes from speakers",
      "c2l0ZXM="
  ],
  [
      "Meat embargo broken by firm",
      "YmFjb24="
  ],
  [
      "Little bird: spot it?",
      "cGlwaXQ="
  ],
  [
      "Assistant brought up to support mass TV etc",
      "bWVkaWE="
  ],
  [
      "Some discontent on gallant island nation",
      "dG9uZ2E="
  ],
  [
      "Average is capital!",
      "cGFyaXM="
  ],
  [
      "Artist mid-morning",
      "bWF5YmU="
  ],
  [
      "Arctic fleet",
      "bmlwcHk="
  ],
  [
      "Pan for cook",
      "cm9hc3Q="
  ],
  [
      "Former article and manuscript used for tests",
      "ZXhhbXM="
  ],
  [
      "Teacher to express disapproval otherwise",
      "dHV0b3I="
  ],
  [
      "Bring down one that goes “moo”",
      "bG93ZXI="
  ],
  [
      "Female occupying barn or mansion",
      "bm9ybWE="
  ],
  [
      "Do well reading out two letters",
      "ZXhjZWw="
  ],
  [
      "Open a series of deliveries arriving on time",
      "b3ZlcnQ="
  ],
  [
      "Fruit drink containing pip's husk",
      "YXBwbGU="
  ],
  [
      "Worry about Democratic campaign group?",
      "Y2FkcmU="
  ],
  [
      "Old stone prison",
      "b2ZsYWc="
  ],
  [
      "Head of chemistry has a way with English class",
      "Y2FzdGU="
  ],
  [
      "Police inspector seizing stolen garment",
      "ZGhvdGk="
  ],
  [
      "US president put on gangster's uniform",
      "YWxpa2U="
  ],
  [
      "Textual marks written up in Vile Bodies",
      "b2JlbGk="
  ],
  [
      "Sauce bottle?",
      "bmVydmU="
  ],
  [
      "Law maker's final words not good",
      "c29sb24="
  ],
  [
      "Puzzle concerning naval vessel turning over",
      "cmVidXM="
  ],
  [
      "Saga inevitably reduced in length once more",
      "YWdhaW4="
  ],
  [
      "Time perhaps upsets heartless old priest",
      "bWFndXM="
  ],
  [
      "Idler putting away small drink",
      "d2F0ZXI="
  ],
  [
      "Symbolic artefact filled scripture the wrong way",
      "dG90ZW0="
  ],
  [
      "Bones served up in mean lunch",
      "dWxuYWU="
  ],
  [
      "Some wine put down",
      "cGxvbms="
  ],
  [
      "Pro restricts French and creates a stink",
      "ZmV0b3I="
  ],
  [
      "Programme run out on this is awaiting confirmation",
      "YXBwcm8="
  ],
  [
      "Enjoy view in common area gardened regularly",
      "YWdyZWU="
  ],
  [
      "Bird of river and lake",
      "b3VzZWw="
  ],
  [
      "Extract of gum: a mild taste",
      "dW1hbWk="
  ],
  [
      "Girl absolutely losing weight",
      "aG9sbHk="
  ],
  [
      "South American native in Lima with Buddhist monk",
      "bGxhbWE="
  ],
  [
      "Deepest point in Mahanadi river",
      "bmFkaXI="
  ],
  [
      "Romeo among undesirables in riotous struggle",
      "c2NydW0="
  ],
  [
      "Sitcom’s beginning with Nora Batty giving offence",
      "YXJzb24="
  ],
  [
      "Pound making comeback cheers nation",
      "bWFsdGE="
  ],
  [
      "Rows of headless corpses",
      "dGlmZnM="
  ],
  [
      "Turmoil when duke meets a divine being in India",
      "ZHJhbWE="
  ],
  [
      "Deduce number will escape fire",
      "aW5mZXI="
  ],
  [
      "Topic most of you and me will deliver",
      "dGhlbWU="
  ],
  [
      "Excessive sign of hesitation in river creature",
      "b3R0ZXI="
  ],
  [
      "After the first minute becomes restless",
      "aXRjaHk="
  ],
  [
      "Cross river close to Romsey",
      "dGVzdHk="
  ],
  [
      "What artist does is attractive",
      "ZHJhd3M="
  ],
  [
      "Pants son's wearing split more than once",
      "Z2FzcHM="
  ],
  [
      "Lakeland setting for youth leader",
      "YWtlbGE="
  ],
  [
      "Soft fabric supplier from America completely revolutionised",
      "bGxhbWE="
  ],
  [
      "Loner's curious since travelling north",
      "c2FkZG8="
  ],
  [
      "Approximately finishing what's said to be tea chest",
      "dG9yc28="
  ],
  [
      "Minute person on horse maybe a philosopher?",
      "bXVzZXI="
  ],
  [
      "Pair with little time for cathedral",
      "ZHVvbW8="
  ],
  [
      "What repeat offender may do for secreted substance",
      "cmVzaW4="
  ],
  [
      "Keen on captivating start to Rameau prelude",
      "aW50cm8="
  ],
  [
      "Spikes crack large and small walls",
      "bGFjZXM="
  ],
  [
      "Taxmen once with a measure of intelligence upset Arab?",
      "aXJhcWk="
  ],
  [
      "Split open part of head",
      "Y2xvdmU="
  ],
  [
      "Is mother initially proud of us?",
      "cG91cnM="
  ],
  [
      "Usual practice of a bishop wearing belt",
      "aGFiaXQ="
  ],
  [
      "Gather popular judge retired",
      "aW5mZXI="
  ],
  [
      "A flower sprang up",
      "YXJvc2U="
  ],
  [
      "Foreign character shortly put name to parent",
      "c2lnbWE="
  ],
  [
      "Timid person I click with?",
      "bW91c2U="
  ],
  [
      "Transport losing time in monsoon",
      "cmFpbnM="
  ],
  [
      "Sound investment may be shown in court",
      "Z3VpbHQ="
  ],
  [
      "Be suffering? Take on the Bible for help",
      "YXZhaWw="
  ],
  [
      "Drama not unknown to philosopher",
      "cGxhdG8="
  ],
  [
      "Fit in curve round lake",
      "YmxlbmQ="
  ],
  [
      "One impaled on terrible horn — its?",
      "cmhpbm8="
  ],
  [
      "Quickly grabbing uniform for opera",
      "ZmF1c3Q="
  ],
  [
      "Avoid Santa Fe Trail city",
      "ZG9kZ2U="
  ],
  [
      "Seaweed from liquid realm",
      "bWFlcmw="
  ],
  [
      "Drizzle in southern commune overlooking river",
      "c21pcnI="
  ],
  [
      "Rod applied to kiddie’s bottom brings hatred",
      "c3BpdGU="
  ],
  [
      "Item of archaeological interest curator finally housed in building",
      "c2hlcmQ="
  ],
  [
      "Secure area of the sea",
      "c291bmQ="
  ],
  [
      "High-ranking Asian woman say taken in by tramp",
      "YmVndW0="
  ],
  [
      "Hard man with practical skills",
      "aGFuZHk="
  ],
  [
      "Single chap from east embracing old woman",
      "bmFvbWk="
  ],
  [
      "Book house overlooking ocean",
      "aG9zZWE="
  ],
  [
      "Point outside of India that has some pyramids",
      "bnViaWE="
  ],
  [
      "Sailor trapped by traitor in an Atlantic port",
      "cmFiYXQ="
  ],
  [
      "Rhymester engaged in Japanese poetry? Just the reverse",
      "cmVuZ2E="
  ],
  [
      "Fruit couples mentioned in conversation",
      "cGVhcnM="
  ],
  [
      "Greek for ‘Room at the Top’?",
      "YXR0aWM="
  ],
  [
      "Friend promoting a group of associated stores",
      "Y2hhaW4="
  ],
  [
      "More sordid compound north of river",
      "YmFzZXI="
  ],
  [
      "Assume that one judge must visit French city",
      "ZGlqb24="
  ],
  [
      "What was taken from Samson and Lot",
      "c2lnaHQ="
  ],
  [
      "Covered on the inside with wrinkles",
      "bGluZWQ="
  ],
  [
      "Pan perhaps necessary for recipe — teriyaki?",
      "cGV0ZXI="
  ],
  [
      "Space traveller wasn’t the only one to get in contact?",
      "Y29tZXQ="
  ],
  [
      "Turn out fine in the end: I’m out of Casualty",
      "ZXZpY3Q="
  ],
  [
      "The writer contributing to series that could be tripe",
      "cnVtZW4="
  ],
  [
      "Some particular premises unfinished",
      "dGhlc2U="
  ],
  [
      "Entertainment round piano with English artist",
      "b3BlcmE="
  ],
  [
      "Irritable man admits drinking nothing alcoholic",
      "cmF0dHk="
  ],
  [
      "Angelic group you and I will appear in",
      "c3dlZXQ="
  ],
  [
      "Himalayan creature literally covering two fifths of Nepal?",
      "cGFuZGE="
  ],
  [
      "State of Florida holidays?",
      "aWRhaG8="
  ],
  [
      "Product that’s widely drunk without whisky",
      "eWllbGQ="
  ],
  [
      "Supermarket division is cutting beer",
      "YWlzbGU="
  ],
  [
      "Copper retiring is comfortably off",
      "Y3VzaHk="
  ],
  [
      "Buzz coming with a northern person",
      "aHVtYW4="
  ],
  [
      "Party-goer’s setting aside time to have a shot",
      "Z3Vlc3M="
  ],
  [
      "Complaint: it’s endlessly chilly and frosty",
      "Y29saWM="
  ],
  [
      "Sound of fierce creature in northern habitat",
      "dGFpZ2E="
  ],
  [
      "Difficult bottling oxygen for store",
      "aG9hcmQ="
  ],
  [
      "Weapon taking top off simple cart",
      "YXJyb3c="
  ],
  [
      "Children that might be taken in disagreement?",
      "aXNzdWU="
  ],
  [
      "Tried to get boss across river",
      "aGVhcmQ="
  ],
  [
      "Hollow black blocks arrive",
      "Y29tYmU="
  ],
  [
      "Become ready to eat beef — no good before noon",
      "cmlwZW4="
  ],
  [
      "Scorer required in Johannesburg match?",
      "c2F0aWU="
  ],
  [
      "No secret hole on green",
      "b3ZlcnQ="
  ],
  [
      "People’s food likes oddly exposed",
      "Zm9sa3M="
  ],
  [
      "Card player’s score put out?",
      "cGlxdWU="
  ],
  [
      "Marry supporter of international organisation?",
      "dW5pdGU="
  ],
  [
      "Current age of US lawman given in play",
      "dG9kYXk="
  ],
  [
      "Did spring article in Paris: fitting!",
      "bGVhcHQ="
  ],
  [
      "Scavenger has briefly to contain hunger",
      "aHllbmE="
  ],
  [
      "Branch to yield to auditors",
      "Ym91Z2g="
  ],
  [
      "Celebrated day school being over",
      "bm90ZWQ="
  ],
  [
      "Lover runs rings around yours truly",
      "cm9tZW8="
  ],
  [
      "Very sorry about drinks",
      "c29kYXM="
  ],
  [
      "Almost everyone I see gets a greeting",
      "YWxvaGE="
  ],
  [
      "I wander back to see Antipodean people",
      "bWFvcmk="
  ],
  [
      "Job centre welcoming husband",
      "Y2hvcmU="
  ],
  [
      "Top money once",
      "Y3Jvd24="
  ],
  [
      "Dishonest part of family in Genoa",
      "bHlpbmc="
  ],
  [
      "What offers support for female opera star’s first half?",
      "YnJhdmE="
  ],
  [
      "Go around clubs banned from turning tricks",
      "c2tpcnQ="
  ],
  [
      "Evidently vote against party",
      "YmVhbm8="
  ],
  [
      "Shut up about regularly full prison system",
      "Z3VsYWc="
  ],
  [
      "Genderless term the Irish must abandon to some extent",
      "dGhlaXI="
  ],
  [
      "Aim to capture river creature from Asia",
      "Z29yYWw="
  ],
  [
      "One very important obstacle for skiers",
      "bW9ndWw="
  ],
  [
      "Figure out number leaving hell",
      "aW5mZXI="
  ],
  [
      "Company invested in mine that’s a feature of Honiton?",
      "cGljb3Q="
  ],
  [
      "One who boxes up gutted porgy fish",
      "Z3VwcHk="
  ],
  [
      "Big growth in naval architecture",
      "bGFyY2g="
  ],
  [
      "Raucous number’s the finale of “Company”",
      "bm9pc3k="
  ],
  [
      "Turned pink and then turned into something darker",
      "cm9zZWQ="
  ],
  [
      "Brisk constable arresting gentleman from the south",
      "Y3Jpc3A="
  ],
  [
      "Edited Times articles",
      "aXRlbXM="
  ],
  [
      "Leader of prayers has obligations for devout",
      "cGlvdXM="
  ],
  [
      "Surround female and male sheep with pen after shearing",
      "ZnJhbWU="
  ],
  [
      "Indian animal that’s awful crossing a lake",
      "YmFsb28="
  ],
  [
      "A short time entertaining one good chum abroad",
      "YW1pZ28="
  ],
  [
      "Sends back a wee amount",
      "c3RpbWU="
  ],
  [
      "Playful lord in court in charge",
      "bHVkaWM="
  ],
  [
      "Maiden rushed up to meet the first person in embrace",
      "aW5hcm0="
  ],
  [
      "Helps when chance has to be seized",
      "YWJldHM="
  ],
  [
      "Good material that adds a certain gloss",
      "Z2xhY2U="
  ],
  [
      "African with long hair hugging duke",
      "bWFuZGU="
  ],
  [
      "Vehicle coming from Ayr rolled over",
      "bG9ycnk="
  ],
  [
      "Large cola ordered in neighbourhood pub",
      "bG9jYWw="
  ],
  [
      "Fruit pop followed by whisky",
      "cGFwYXc="
  ],
  [
      "Reportedly prison's acceptable for disgraced leader",
      "bml4b24="
  ],
  [
      "Majestic new composition of Elgar",
      "cmVnYWw="
  ],
  [
      "Planet mostly seen over Earth's initial location",
      "dmVudWU="
  ],
  [
      "Love the sound of noses",
      "cHJpemU="
  ],
  [
      "Traitor not quite right to frame lawyer",
      "anVkYXM="
  ],
  [
      "Measure of brightness that would be reversed by degrees",
      "c3RpbGI="
  ],
  [
      "Even less friendly company once meeting Queen",
      "aWNpZXI="
  ],
  [
      "Expenses of companies on the way up",
      "Y29zdHM="
  ],
  [
      "Profess intention to oust idiot from class",
      "Y2xhaW0="
  ],
  [
      "There's nothing about sort of current needed for nuclear research device",
      "bGluYWM="
  ],
  [
      "Nobody wrote one in the nineteenth century",
      "ZGlhcnk="
  ],
  [
      "Story of competition with someone really good knocked out",
      "Y29udGU="
  ],
  [
      "Theatre men going over imitation",
      "cmVwcm8="
  ],
  [
      "Back’s ripped from dress in theatre scrap",
      "c2NydWI="
  ],
  [
      "How a soldier operates device",
      "Z2lzbW8="
  ],
  [
      "Cossack's ready to regret pinning leaders of Light Brigade back",
      "cnVibGU="
  ],
  [
      "Line cut from standard opera",
      "bm9ybWE="
  ],
  [
      "Rose’s part in Sophocles’s Antigone finally overcoming friend",
      "c2VwYWw="
  ],
  [
      "Emperor's hearing complaint tavern ignored",
      "dGl0dXM="
  ],
  [
      "Retired musical group's section of joint",
      "dGVub24="
  ],
  [
      "One sculpting Mother and Child",
      "bWFzb24="
  ],
  [
      "Row about bringing in first of frigates for overhaul",
      "cmVmaXQ="
  ],
  [
      "Plant with insect gathering prime bit of nectar repeatedly",
      "YmVubmU="
  ],
  [
      "Sheep on street close by in Scotland",
      "ZXdlc3Q="
  ],
  [
      "A zone with oxygen and carbon after one without life",
      "YXpvaWM="
  ],
  [
      "Nothing the same in spring?",
      "b2FzaXM="
  ],
  [
      "What's visible if bottom of skirt’s lifted?",
      "dGhpZ2g="
  ],
  [
      "Camp belonging to prisoner?",
      "b2ZsYWc="
  ],
  [
      "Contract for sporting prize",
      "cHVyc2U="
  ],
  [
      "Physician became dictator's prisoner",
      "bWVkaWM="
  ],
  [
      "Chief heading off westward quaffing island's wine",
      "cmlvamE="
  ],
  [
      "Find fault with batsman's innings",
      "a25vY2s="
  ],
  [
      "Attractive female player's first to go in eliminator",
      "Y3V0aWU="
  ],
  [
      "Son in confinement lashed out",
      "c3BlbnQ="
  ],
  [
      "Fine provincial force once set up court abroad",
      "Y3VyaWE="
  ],
  [
      "Pinch mistress's bottom in gallery",
      "dGFzdGU="
  ],
  [
      "Ruined city's favourite artist",
      "cGV0cmE="
  ],
  [
      "Writer rejected one indoor game for another",
      "YmluZ28="
  ],
  [
      "Juvenile journalist particularly cut up",
      "Y3ViZWQ="
  ],
  [
      "Landmark seen in Australian port after docking",
      "Y2Fpcm4="
  ],
  [
      "River taking sulphur to Sumerian city-state",
      "c3RvdXI="
  ],
  [
      "Hospital thanks gift provider",
      "c2FudGE="
  ],
  [
      "Initially athlete looks lively on arrival in Scottish town",
      "YWxsb2E="
  ],
  [
      "Faculty notice about new Society",
      "c2Vuc2U="
  ],
  [
      "Long periods entertaining Northern girl",
      "YWduZXM="
  ],
  [
      "Error about Washington lover",
      "c3dhaW4="
  ],
  [
      "Small area one's leased",
      "aXNsZXQ="
  ],
  [
      "Move fast chasing second allocation",
      "c2hhcmU="
  ],
  [
      "Girl in church originally learnt Old English",
      "Y2hsb2U="
  ],
  [
      "Dizzy and frivolous",
      "Z2lkZHk="
  ],
  [
      "Radio etc aimed to broadcast",
      "bWVkaWE="
  ],
  [
      "Inexpensive hat that man’s wearing",
      "Y2hlYXA="
  ],
  [
      "Conservative opponents of right in split",
      "Y2xlZnQ="
  ],
  [
      "Some tales La Fontaine rejected could be untrue",
      "ZmFsc2U="
  ],
  [
      "Motorist drops velocity with less rain?",
      "ZHJpZXI="
  ],
  [
      "Step right up for review",
      "cmVjYXA="
  ],
  [
      "Husky sounded to be a working animal",
      "aG9yc2U="
  ],
  [
      "The same artist's not in Radio Times cutting",
      "ZGl0dG8="
  ],
  [
      "Horse keeps dry round the bend",
      "YmF0dHk="
  ],
  [
      "Hint of disgrace? It's not said commonly?",
      "dGFpbnQ="
  ],
  [
      "Old Greek version of 'Room at the Top'?",
      "YXR0aWM="
  ],
  [
      "Dug stuff up",
      "bWluZWQ="
  ],
  [
      "Dog rescuers on the road carrying equipment",
      "YWtpdGE="
  ],
  [
      "Celebrate outside with jazzy music",
      "c3dpbmc="
  ],
  [
      "Beliefs of left-winger disrupting firm",
      "Y3JlZG8="
  ],
  [
      "Poet giving answers to binary question",
      "bm95ZXM="
  ],
  [
      "Noise of family beginning to gather",
      "Y2xhbmc="
  ],
  [
      "Cunning plans soldier finally employs",
      "cnVzZXM="
  ],
  [
      "Record poem about cult hero",
      "ZmljaGU="
  ],
  [
      "Energy and ambition having no place for a Russian author",
      "Z29nb2w="
  ],
  [
      "Son getting somewhat hot in crowd",
      "c3dhcm0="
  ],
  [
      "Home established finally by American river",
      "aW5kdXM="
  ],
  [
      "Emotional episode when doctor meets an old woman",
      "ZHJhbWE="
  ],
  [
      "Group of monks giving command",
      "b3JkZXI="
  ],
  [
      "Does it grow down as it grows up?",
      "ZWlkZXI="
  ],
  [
      "Trouble’s besetting one for so long",
      "YWRpb3M="
  ],
  [
      "Do books acclaim hiding place?",
      "YXVkaXQ="
  ],
  [
      "Relations well and truly “cornered”?",
      "bm9va3k="
  ],
  [
      "Military buff",
      "a2hha2k="
  ],
  [
      "Energy old politician displayed in backing House",
      "b29tcGg="
  ],
  [
      "National flag Hibernians originally used?",
      "aXJpc2g="
  ],
  [
      "Italian male feeding horse",
      "cm9tYW4="
  ],
  [
      "One moves quickly outside decayed buildings",
      "cnVpbnM="
  ],
  [
      "Person who digs a gambling game?",
      "cG9rZXI="
  ],
  [
      "Slumber an old PM’s rejected",
      "c2xlZXA="
  ],
  [
      "Girl keeping record in warehouse",
      "ZGVwb3Q="
  ],
  [
      "Note copy artists primarily draw for tourists",
      "bWVjY2E="
  ],
  [
      "Wasn’t dying about Dickens",
      "ZGV2aWw="
  ],
  [
      "A point behind? No good!",
      "cHJvbmc="
  ],
  [
      "Group of model Hindus found here",
      "ZGVsaGk="
  ],
  [
      "Long period of time before noon",
      "eWVhcm4="
  ],
  [
      "Dad taking teacher around European capital",
      "cGFyaXM="
  ],
  [
      "Doctor rejected attack – a distinctive idea",
      "bW90aWY="
  ],
  [
      "Musical entertainment viewed in the Adelphi originally?",
      "ZXZpdGE="
  ],
  [
      "Fabulous flower died taken from wild orchid",
      "aWNob3I="
  ],
  [
      "Comic sent up Liberal peer",
      "ZHJvbGw="
  ],
  [
      "Steep wave on river is a problem for some ships?",
      "Ym9yZXI="
  ],
  [
      "In no sense upstanding!",
      "bHlpbmc="
  ],
  [
      "Strain of uncut narcotic",
      "cHVyZWU="
  ],
  [
      "Parents crossing river in provincial capital",
      "cGFybWE="
  ],
  [
      "Trimmed blossom: it spread leaves out",
      "b21pdHM="
  ],
  [
      "Place for opera’s unfinished melody",
      "dGhlbWU="
  ],
  [
      "Old King taking on difficult question",
      "Z3JpbGw="
  ],
  [
      "A lot of criticism about old philosopher",
      "c3RvaWM="
  ],
  [
      "University pleasant after eliminating one measure",
      "b3VuY2U="
  ],
  [
      "Discourage day trip after Juliet drops out",
      "ZGF1bnQ="
  ],
  [
      "Bread is mine? Cheers!",
      "cGl0dGE="
  ],
  [
      "Tree thriving initially on S American cape",
      "dGhvcm4="
  ],
  [
      "Girl in the morning leaving the US",
      "ZXJpY2E="
  ],
  [
      "Drop in current is in prospect with amps lost",
      "dmlzaXQ="
  ],
  [
      "Acted as a substitute silk",
      "c2F0aW4="
  ],
  [
      "Troublesome insect perhaps over sauce",
      "cGVzdG8="
  ],
  [
      "Banned volunteers voice displeasure",
      "dGFib28="
  ],
  [
      "Forest primate getting energy from small parrots",
      "bG9yaXM="
  ],
  [
      "Seafood’s twenty-one shillings?",
      "c3F1aWQ="
  ],
  [
      "Happy if place does not appear relaxed",
      "ZWFzZWQ="
  ],
  [
      "Section of kangaroo’s trusted sleeping place",
      "cm9vc3Q="
  ],
  [
      "External route revised",
      "b3V0ZXI="
  ],
  [
      "Italian capitalist?",
      "cm9tYW4="
  ],
  [
      "One far from wise in Djibouti oddly",
      "aWRpb3Q="
  ],
  [
      "Well-kept small trading centre",
      "c21hcnQ="
  ],
  [
      "Roam over island for the language?",
      "bWFvcmk="
  ],
  [
      "Downright eccentricity",
      "c2hlZXI="
  ],
  [
      "Find tomb by taking little edition out of trunks",
      "c3Blb3M="
  ],
  [
      "Bleat about no good comic",
      "bWFuZ2E="
  ],
  [
      "Annoy Republican departing with so much levy",
      "dHl0aGU="
  ],
  [
      "We must look up that expression of regret used by Rab C",
      "ZXdob3c="
  ],
  [
      "Get into what introduces synonym for benefactor",
      "ZG9ub3I="
  ],
  [
      "Renowned — as is musical work?",
      "bm90ZWQ="
  ],
  [
      "Get into trouble over religious sayings",
      "bG9naWE="
  ],
  [
      "Vanilla left in French bread",
      "cGxhaW4="
  ],
  [
      "Bird that woman’s cooking",
      "aGVyb24="
  ],
  [
      "Poet in a posh study",
      "YXVkZW4="
  ],
  [
      "Heap — time bagged?",
      "c3RhY2s="
  ],
  [
      "Weight conveyed by spectacular talker",
      "YXJ0YWw="
  ],
  [
      "Fold left stuck in boggy soil?",
      "cGxlYXQ="
  ],
  [
      "One choosing a flying machine? Not half!",
      "b3B0ZXI="
  ],
  [
      "Pulls folk across the Pond",
      "eWFua3M="
  ],
  [
      "Bit of irony from drunkard moving right up",
      "dHJvcGU="
  ],
  [
      "Characteristic of renegade abandoning the rank and file",
      "dHJhaXQ="
  ],
  [
      "Old seaside seller running short",
      "Y29zdGU="
  ],
  [
      "Bellow — where does Irishman’s come from?",
      "dHJvYXQ="
  ],
  [
      "Traffic in March moving easily at first",
      "dHJhZGU="
  ],
  [
      "A German turning back to welcome city relative",
      "bmllY2U="
  ],
  [
      "Almost all the booze knocked back in darkness",
      "bmlnaHQ="
  ],
  [
      "Round-up of stock was carried over",
      "cm9kZW8="
  ],
  [
      "Knight drinking in hell regularly went on a bender",
      "a25lbHQ="
  ],
  [
      "Sound judge brought in by former president",
      "ZmpvcmQ="
  ],
  [
      "Graduate aboard boat mounting compass",
      "Z2FtdXQ="
  ],
  [
      "Problem children",
      "aXNzdWU="
  ],
  [
      "Diplomat only initially involved in deadly sin",
      "ZW52b3k="
  ],
  [
      "Sanctimonious bunch producing TV try-out?",
      "cGlsb3Q="
  ],
  [
      "Superior rating given to second-rate back",
      "YWJib3Q="
  ],
  [
      "Explosive start setting one back a bit",
      "bml0cm8="
  ],
  [
      "Foreign drama that’s painful under any conditions",
      "bm9ob3c="
  ],
  [
      "Students gathering for one drink",
      "bmVndXM="
  ],
  [
      "Mends fencing in king’s colours",
      "c2tld3M="
  ],
  [
      "Some raised cash to oblige assassin",
      "Ym9vdGg="
  ],
  [
      "One living in southern US around early summer",
      "Y2FqdW4="
  ],
  [
      "Cross when hearing match lost",
      "dGlnb24="
  ],
  [
      "Instant good advice to follow up in place of evil?",
      "c29kb20="
  ],
  [
      "Provide a place for a plant",
      "aG9zdGE="
  ],
  [
      "A new venison supplier served up joint",
      "YW5rbGU="
  ],
  [
      "“Flower of Pompeii” publication supported by postgraduate",
      "bWFnbWE="
  ],
  [
      "One running through Berlin in binge",
      "c3ByZWU="
  ],
  [
      "Partly glad I thought about such a wave",
      "dGlkYWw="
  ],
  [
      "Problem getting new start for small person",
      "dGl0Y2g="
  ],
  [
      "Ship’s spar gets spray? Not unknown",
      "c3ByaXQ="
  ],
  [
      "A thing growing in the garden is stemmed",
      "YXJvc2U="
  ],
  [
      "Governed as certain lines may be",
      "cnVsZWQ="
  ],
  [
      "Follow Europe’s directions to return",
      "ZW5zdWU="
  ],
  [
      "Synthetic polymer unknown in northern half of capital",
      "bnlsb24="
  ],
  [
      "Refugee with no time at all for material",
      "ZXhpbGU="
  ],
  [
      "Embellish even choices from garden?",
      "YWRvcm4="
  ],
  [
      "Story gripping one in the very first episode",
      "cGlsb3Q="
  ],
  [
      "King and leader of armada chat in boat",
      "a2F5YWs="
  ],
  [
      "Villain’s Irish accent putting off British",
      "cm9ndWU="
  ],
  [
      "European champion missing out on gold is put out",
      "ZXZpY3Q="
  ],
  [
      "Hot Bovril leaving black discoloration",
      "bGl2b3I="
  ],
  [
      "A stack of papers question resentment",
      "cXVpcmU="
  ],
  [
      "One of two writers getting material rejected?",
      "ZWxpb3Q="
  ],
  [
      "Governs northern city mentioned in speech",
      "bGVhZHM="
  ],
  [
      "… upset old British PM’s slumber",
      "c2xlZXA="
  ],
  [
      "Open secret Charlie let out",
      "b3ZlcnQ="
  ],
  [
      "Finally did ritual dance in capital",
      "ZGhha2E="
  ],
  [
      "Men cut and hold covering",
      "b3Jsb3A="
  ],
  [
      "Ace performer’s way of working in study",
      "ZGVtb24="
  ],
  [
      "Rover has no crackers",
      "bm9tYWQ="
  ],
  [
      "Watch",
      "bWF5YmU="
  ],
  [
      "Nothing in wet rubbish left drier",
      "dG93ZWw="
  ],
  [
      "Restorative note",
      "dG9uaWM="
  ],
  [
      "Treasure finally found under different palm tree",
      "bWFwbGU="
  ],
  [
      "Country ending in tremendous agony",
      "c3BhaW4="
  ],
  [
      "Direct issue",
      "cG9pbnQ="
  ],
  [
      "Track opening of the bar",
      "dHJhaWw="
  ],
  [
      "Revered symbol the Egyptians originally found in cat",
      "dG90ZW0="
  ],
  [
      "This world famine needs heading off",
      "ZWFydGg="
  ],
  [
      "Direct football official about backs",
      "cmVmZXI="
  ],
  [
      "Expert in a reduced department",
      "YWRlcHQ="
  ],
  [
      "Toss first of seals fish",
      "c2xpbmc="
  ],
  [
      "Fruit found in Jerusalem once",
      "bGVtb24="
  ],
  [
      "BBC releasing article for free",
      "dW50aWU="
  ],
  [
      "Sailor following one inside port",
      "bGFnb3M="
  ],
  [
      "Expert in Belfast perhaps turned around plant",
      "b3JwaW4="
  ],
  [
      "Rich fellow pupil no longer under arrest",
      "bmFib2I="
  ],
  [
      "What’s said to fasten a feather?",
      "cGlubmE="
  ],
  [
      "Officers producing plans advanced to the front",
      "YWlkZXM="
  ],
  [
      "Jock’s aim is to enter contest",
      "dmlzaWU="
  ],
  [
      "Defeated king being removed and exposed",
      "b3V0ZWQ="
  ],
  [
      "Librarian sounding a bit wet?",
      "ZGV3ZXk="
  ],
  [
      "Peas from marshlands in the Borders male scythed",
      "ZXJzZXM="
  ],
  [
      "Capuchin against a sectarian",
      "c2FpdmE="
  ],
  [
      "No particular interest shown around republic",
      "Z2Fib24="
  ],
  [
      "Showing great dignity knocking the beer back",
      "cmVnYWw="
  ],
  [
      "Headdress so long one wears",
      "dGlhcmE="
  ],
  [
      "Drivel for instance Paddy Ashdown put about?",
      "YmlsZ2U="
  ],
  [
      "Democrat with inadequate backing in decline",
      "ZHJvb3A="
  ],
  [
      "Problem claiming credit for means of restarting play",
      "c2NydW0="
  ],
  [
      "Bird no longer living on S American islands",
      "c2Ftb2E="
  ],
  [
      "Destruction of marine vegetation?",
      "d3JhY2s="
  ],
  [
      "Periods that may be indicated with a cross",
      "dGltZXM="
  ],
  [
      "Last of the Athenian characters",
      "b21lZ2E="
  ],
  [
      "Knowing sort of look — mystery's ending",
      "bGVlcnk="
  ],
  [
      "Navy left in bases",
      "ZmxlZXQ="
  ],
  [
      "Correct height on masts",
      "c2FpbHM="
  ],
  [
      "Drink available from inside cafe",
      "ZGVjYWY="
  ],
  [
      "Nature god holding one old instrument to play",
      "cGlhbm8="
  ],
  [
      "Nominal fine received by a number",
      "dG9rZW4="
  ],
  [
      "A pot I ordered for courtyard",
      "cGF0aW8="
  ],
  [
      "Understand king needing knight's backing",
      "bGVhcm4="
  ],
  [
      "Take a swim in city close to seaside",
      "YmF0aGU="
  ],
  [
      "Pay for part of that on expenses",
      "YXRvbmU="
  ],
  [
      "What’s swallowed by staff about to provide treatment",
      "cmVoYWI="
  ],
  [
      "Grown son wearing nothing from Dior?",
      "cmlzZW4="
  ],
  [
      "Small film of chief criminal",
      "ZmljaGU="
  ],
  [
      "Dutch painter has time for second mistake",
      "Ym90Y2g="
  ],
  [
      "Nice day for reporting religious leader",
      "bWFoZGk="
  ],
  [
      "Open University taking lead on nuclear energy",
      "dW56aXA="
  ],
  [
      "Destined to make a leap",
      "Ym91bmQ="
  ],
  [
      "State chief given a hearing",
      "bWFpbmU="
  ],
  [
      "Amazing affection masks this mistake",
      "Z2FmZmU="
  ],
  [
      "Greek character was first on return to get word of gratitude",
      "ZGVsdGE="
  ],
  [
      "Henry’s left fichus arranged in a mysterious order",
      "c3VmaWM="
  ],
  [
      "Work sailor’s put together for mates",
      "b3Bwb3M="
  ],
  [
      "No reason for cold-callers to ring up? A winning point!",
      "aXBwb24="
  ],
  [
      "Bloody channel volunteers to put rock music on!",
      "YW9ydGE="
  ],
  [
      "Where waiters are passing under bar?",
      "bGltYm8="
  ],
  [
      "Perhaps a sett … the setter’s material",
      "ZGVuaW0="
  ],
  [
      "One might see spider on this: howls out loud?",
      "YmFpemU="
  ],
  [
      "Newspaper taking offence",
      "dGhlZnQ="
  ],
  [
      "Don’t take time off work",
      "bGVhdmU="
  ],
  [
      "Show lack of interest in English rugby",
      "c2hydWc="
  ],
  [
      "Musical losing a good pianist: one of the 14",
      "Y2hpY28="
  ],
  [
      "Large track which cattle go back inside",
      "cm9vbXk="
  ],
  [
      "Run alongside Russian river in the country",
      "cnVyYWw="
  ],
  [
      "Improper to take forty winks in it",
      "aW5hcHQ="
  ],
  [
      "Drive mischief-maker over English lake",
      "aW1wZWw="
  ],
  [
      "Daughter misses meal — it’s part of the target",
      "aW5uZXI="
  ],
  [
      "One who shuts up having caught out failure",
      "bG9zZXI="
  ],
  [
      "Major disturbance caused by EU stepping out of line about a king",
      "cXVha2U="
  ],
  [
      "African fascist changing direction",
      "c3dhemk="
  ],
  [
      "No time for toast — it's water you may find here",
      "b2FzaXM="
  ],
  [
      "Chap having German vote for Eurovision entry reduced",
      "amFzb24="
  ],
  [
      "Crust removed from half loaf that could take some cutting?",
      "YWxidW0="
  ],
  [
      "One wouldn’t succeed the Spanish queen",
      "bG9zZXI="
  ],
  [
      "Europeans on vacation head for bar",
      "ZXN0b3A="
  ],
  [
      "Ace in race vehicle getting measure of Americans",
      "a2FyYXQ="
  ],
  [
      "Mix gallons in pool",
      "bWVyZ2U="
  ],
  [
      "Girl from outskirts of Liverpool grabbed by US agency",
      "Y2lsbGE="
  ],
  [
      "High-flier that's below par",
      "ZWFnbGU="
  ],
  [
      "Day without commencement of night music",
      "dHVuZXM="
  ],
  [
      "Small statues said to be in old parts of Egypt?",
      "bm9tZXM="
  ],
  [
      "Devices restricting personal freedom in prisons or clubs",
      "aXJvbnM="
  ],
  [
      "Christmas month has gold ornamentation",
      "ZGVjb3I="
  ],
  [
      "Gas from individual on the east side of Australia",
      "b3pvbmU="
  ],
  [
      "This person's plan to ban a chemical",
      "aW1pZGU="
  ],
  [
      "Some are rude about Renaissance painter",
      "ZHVyZXI="
  ],
  [
      "Record not the first for Middle America?",
      "ZW50ZXI="
  ],
  [
      "Came to A&E impaled on cooking utensil",
      "YXdva2U="
  ],
  [
      "Questions that deal with inflation",
      "cHVtcHM="
  ],
  [
      "Note repeated about a city in Florida",
      "bWlhbWk="
  ],
  [
      "Punch a fragile thing",
      "Y2hpbmE="
  ],
  [
      "Criminal attempt recalled in regret",
      "cm9ndWU="
  ],
  [
      "One of Snow White’s dwarfs very quietly brought in grass",
      "aGFwcHk="
  ],
  [
      "Company gathered together to find astronomical object",
      "Y29tZXQ="
  ],
  [
      "Stories about King making responses on social media",
      "bGlrZXM="
  ],
  [
      "Oxygen required by huge Greek character",
      "b21lZ2E="
  ],
  [
      "Love encapsulated by one obscure turn of phrase",
      "aWRpb20="
  ],
  [
      "Synthetic material in name only abroad",
      "bnlsb24="
  ],
  [
      "Separate set of countries with private code",
      "dW5waW4="
  ],
  [
      "Sending up of books in French that is old hat",
      "dG9xdWU="
  ],
  [
      "I’m going to pass on gold rings",
      "YWRpZXU="
  ],
  [
      "Pet / that barber keeps",
      "c3Ryb3A="
  ],
  [
      "Pensioner storing it around courtyard",
      "cGF0aW8="
  ],
  [
      "Country having a thousand Polish perhaps returning",
      "YnVybWE="
  ],
  [
      "Accepted statement from a football team over millions",
      "YXhpb20="
  ],
  [
      "Strangely stark limestone landscape",
      "a2Fyc3Q="
  ],
  [
      "Look after harbour",
      "bnVyc2U="
  ],
  [
      "Band on river vessel",
      "bGluZXI="
  ],
  [
      "Greek character in hotel in mountain area",
      "YWxwaGE="
  ],
  [
      "Composer has change of heart seeing German river",
      "d2VzZXI="
  ],
  [
      "Dark end of mall in part of industrial estate",
      "dW5saXQ="
  ],
  [
      "Bitter account to deliver!",
      "YWNyaWQ="
  ],
  [
      "Suspect youth leader replacing drug in Kansas City?",
      "ZG9kZ3k="
  ],
  [
      "Take-off always including elevated material",
      "YXBlcnk="
  ],
  [
      "Stern leader of regiment entering mess",
      "aGFyc2g="
  ],
  [
      "Recalled games with the woman leading mindless followers",
      "c2hlZXA="
  ],
  [
      "Perhaps an aggressive dog is half-heartedly resentful",
      "Yml0ZXI="
  ],
  [
      "Plaintively express line in rhythm",
      "YmxlYXQ="
  ],
  [
      "It's wet and sticky topping of stewed fruit",
      "c2xpbWU="
  ],
  [
      "Ray's part in German Tannhäuser",
      "bWFudGE="
  ],
  [
      "Noise from the herd about race becomes slogan",
      "bW90dG8="
  ],
  [
      "Message sensibly delivered in this bottle?",
      "bmVydmU="
  ],
  [
      "Bad blood initially denied young heroine",
      "YWxpY2U="
  ],
  [
      "Celebrity royal: a snake!",
      "dmlwZXI="
  ],
  [
      "Medical procedure possibly reduced lameness on reflection",
      "ZW5lbWE="
  ],
  [
      "Crazy bloke in charge",
      "bWFuaWM="
  ],
  [
      "Porter maybe astride queen and king’s racehorse",
      "YXJrbGU="
  ],
  [
      "Windows computer upgrade — Linux originally — interrupting you there!",
      "b2N1bGk="
  ],
  [
      "Something to brush up on taking answer for one down",
      "cXVhZmY="
  ],
  [
      "Holder of invitation initially shunning President and First Lady",
      "a2VldmU="
  ],
  [
      "Boy Belgian holds up no more like a clod",
      "Z2xlYnk="
  ],
  [
      "Poison in ancient city going round he got rid of",
      "dmVuaW4="
  ],
  [
      "Squat in small enclosed space",
      "Y3ViYnk="
  ],
  [
      "Walk ostentatiously to show support",
      "c3RydXQ="
  ],
  [
      "African mothers sitting by major road",
      "bWFzYWk="
  ],
  [
      "The fellow facing destiny as a lowly worker",
      "aGVsb3Q="
  ],
  [
      "Work out where area of fear is",
      "aW5mZXI="
  ],
  [
      "Head of Leeds University entertained by eccentric Scotsman",
      "Y2FsdW0="
  ],
  [
      "Model banker at table’s description of what he does?",
      "aWRlYWw="
  ],
  [
      "Expression of amusement about leaders of creatures at watering-hole",
      "bG9jYWw="
  ],
  [
      "A fellow European’s place of residence",
      "YWJvZGU="
  ],
  [
      "Animal turned peripatetic to some extent",
      "dGFwaXI="
  ],
  [
      "Ointment Victor found in discount promotion",
      "c2FsdmU="
  ],
  [
      "Be in state of shock about parking and drive off",
      "cmVwZWw="
  ],
  [
      "Amusing free gift from The Sun",
      "bGlnaHQ="
  ],
  [
      "Where to see one of trio delivering portion of song",
      "aW50cm8="
  ],
  [
      "Geese flying east into cover",
      "c2tlaW4="
  ],
  [
      "Peasant’s husband seized by large force one heading west",
      "Y2h1cmw="
  ],
  [
      "Senior man joining up after wife departs",
      "ZWxkZXI="
  ],
  [
      "Put down a cow?",
      "bG93ZXI="
  ],
  [
      "Stops head resigning and relaxes",
      "ZWFzZXM="
  ],
  [
      "Prickly shrub obtainable from heath or nursery",
      "dGhvcm4="
  ],
  [
      "District accommodating new stadium",
      "YXJlbmE="
  ],
  [
      "Arrive at stretch of river",
      "cmVhY2g="
  ],
  [
      "Greek character fencing in horned mammal",
      "cmhpbm8="
  ],
  [
      "Newspaper editor originally employed in cricket sidefrequently",
      "b2Z0ZW4="
  ],
  [
      "Call up woman protecting old king",
      "ZXZva2U="
  ],
  [
      "Benefactor's name inside entrance",
      "ZG9ub3I="
  ],
  [
      "Trust I placed in big hospital",
      "ZmFpdGg="
  ],
  [
      "Gem carved in relief arrived with ring",
      "Y2FtZW8="
  ],
  [
      "Material vital to many Londoners",
      "bnlsb24="
  ],
  [
      "Gruesome Hardy monster",
      "aHlkcmE="
  ],
  [
      "Dug up material coming over",
      "bWluZWQ="
  ],
  [
      "Fabric salesman introduced to church",
      "Y3JlcGU="
  ],
  [
      "I’d invested in wager — cleaned out here?",
      "YmlkZXQ="
  ],
  [
      "Digger’s card",
      "c3BhZGU="
  ],
  [
      "Competitor — one in luxury car...",
      "cmFjZXI="
  ],
  [
      "A composer’s decision to avoid court",
      "dmVyZGk="
  ],
  [
      "Where mourners might be attentive",
      "YXdha2U="
  ],
  [
      "Caribbean native born a month before others",
      "YmFqYW4="
  ],
  [
      "Island not displaying any aquarium oddly",
      "bmF1cnU="
  ],
  [
      "Home with mostly clean running water in Asia",
      "aW5kdXM="
  ],
  [
      "Jacob rashly holding something poisonous",
      "Y29icmE="
  ],
  [
      "Male is having hesitation — he doesn't like spending money",
      "bWlzZXI="
  ],
  [
      "State of uncertainty with member gaining nothing",
      "bGltYm8="
  ],
  [
      "Game one of four card players has left",
      "c3BvcnQ="
  ],
  [
      "Twilled fabric used in looser gear",
      "c2VyZ2U="
  ],
  [
      "Racecourse spy eating river fish",
      "dHJvdXQ="
  ],
  [
      "Ring doughnut at last comes in for my sweet",
      "cGV0YWw="
  ],
  [
      "Eastern European going west? Get away!",
      "ZWxvcGU="
  ],
  [
      "Direct favour initially ignored",
      "cmVmZXI="
  ],
  [
      "Beverage knocked back with others drinking what sounds like tea",
      "bGF0dGU="
  ],
  [
      "Fly without large type of battery",
      "c29sYXI="
  ],
  [
      "Bill's given university grant",
      "YWRtaXQ="
  ],
  [
      "On the up: pressman with skill for business",
      "dHJhZGU="
  ],
  [
      "Silly accommodation in US state",
      "bmlubnk="
  ],
  [
      "Composer's first to hum a little sound",
      "Y3JlZWs="
  ],
  [
      "Unopened alcohol that is rum",
      "ZWVyaWU="
  ],
  [
      "Raving person has love for a man in broadcast message",
      "cm9nZXI="
  ],
  [
      "Female shows spite rejecting male",
      "YWxpY2U="
  ],
  [
      "Toilet one gets stuck in with accountant — magic",
      "d2ljY2E="
  ],
  [
      "Minister to commence action in court before judges?",
      "c2VydmU="
  ],
  [
      "Term for excessive luminance involved with 60% of argon",
      "Z2xhcmU="
  ],
  [
      "Dismissal involves 50 becoming careless",
      "c2xhY2s="
  ],
  [
      "Rocketry experts taking line regarding nose",
      "bmFzYWw="
  ],
  [
      "Loot regularly hidden by idiot Egyptian resident?",
      "bmlsb3Q="
  ],
  [
      "Secret initially suppressed in public",
      "b3ZlcnQ="
  ],
  [
      "Board’s strategy number eleven?",
      "cGxhbms="
  ],
  [
      "Senior Cockney grabbed that girl",
      "ZWxkZXI="
  ],
  [
      "Correct interpretation of noon?",
      "YW1lbmQ="
  ],
  [
      "Mum has to dress up some gloomy youth?",
      "Z290aHM="
  ],
  [
      "Bag deposited outside hotel building",
      "c2hhY2s="
  ],
  [
      "Showed unhappiness with two-wheeled vehicle",
      "bW9wZWQ="
  ],
  [
      "Country's leader's moving along showing sense",
      "dGFzdGU="
  ],
  [
      "What's obvious all through time",
      "b3ZlcnQ="
  ],
  [
      "Snooker feature in Christmas season",
      "bWFzc2U="
  ],
  [
      "Bishop in car somewhere en route to heavenly destination?",
      "bGltYm8="
  ],
  [
      "Oversized motor wins award",
      "b3NjYXI="
  ],
  [
      "Lack of land set back African nation",
      "Z2Fib24="
  ],
  [
      "Types of bacteria — over 200 found in Channel Islands",
      "Y29jY2k="
  ],
  [
      "Workers in A&E reversed invasive procedure",
      "ZW5lbWE="
  ],
  [
      "Piece of cake labelled a Kipling creation",
      "YWtlbGE="
  ],
  [
      "Stick English after History",
      "cGFzdGU="
  ],
  [
      "Foot of salesman where it might be seen? Generous chap!",
      "ZG9ub3I="
  ],
  [
      "Note a reviver?",
      "dG9uaWM="
  ],
  [
      "Villain to throttle in execution",
      "ZG9pbmc="
  ],
  [
      "Hang out first of washing in valley",
      "ZHdlbGw="
  ],
  [
      "Back-to-back golds by previously unknown Spanish hero",
      "em9ycm8="
  ],
  [
      "Square loaf mostly devoured by old man",
      "cGxhemE="
  ],
  [
      "Boy climbing tree with minimal energy",
      "ZW1pbGU="
  ],
  [
      "Some strudel I saw in food shops",
      "ZGVsaXM="
  ],
  [
      "Fellow otherwise from whom charity benefits?",
      "ZG9ub3I="
  ],
  [
      "Eight carat ring someone not from this world possesses",
      "b2N0ZXQ="
  ],
  [
      "Material from track given name",
      "bGluZW4="
  ],
  [
      "Like Flight of the Bumblebee?  A thing to play it on endlessly",
      "YXBpYW4="
  ],
  [
      "Exchange involving Mike’s waterlogged area",
      "c3dhbXA="
  ],
  [
      "Speaker’s arguments for ordinary writing",
      "cHJvc2U="
  ],
  [
      "Make changes in plug fitting",
      "YWRhcHQ="
  ],
  [
      "Left-winger returning with English cake",
      "dG9ydGU="
  ],
  [
      "Sign left by one supporter",
      "bGlicmE="
  ],
  [
      "Dark lake one goes round",
      "dW5saXQ="
  ],
  [
      "Greek character in mouth of river",
      "ZGVsdGE="
  ],
  [
      "First of bids in auction for a fur",
      "c2FibGU="
  ],
  [
      "Woman like Bertha Rochester and a Fleming character",
      "bWFkYW0="
  ],
  [
      "Tucked in to endless meat: we might",
      "cG93ZXI="
  ],
  [
      "Tips for perfect miso soup side order: lush!",
      "dG9wZXI="
  ],
  [
      "Extra large fungus",
      "bW9yZWw="
  ],
  [
      "Chicks originally look to pull up worm",
      "Y3JlZXA="
  ],
  [
      "Range is clear",
      "c3dlZXA="
  ],
  [
      "Have contempt for small crop",
      "c2Nvcm4="
  ],
  [
      "Some children always concerned with part of body",
      "cmVuYWw="
  ],
  [
      "Seat for sort of pigeon",
      "c3Rvb2w="
  ],
  [
      "Serious honour senior accepts",
      "c29iZXI="
  ],
  [
      "Yard excavation turns frivolous",
      "Z2lkZHk="
  ],
  [
      "Urgent message in taxi left half hidden",
      "Y2FibGU="
  ],
  [
      "Plant covered in plot usually",
      "bG90dXM="
  ],
  [
      "Painter formerly concealing name",
      "ZXJuc3Q="
  ],
  [
      "Prioress denied port and jam",
      "cHJlc3M="
  ],
  [
      "Mark fell finally into flowing water",
      "dGlsZGU="
  ],
  [
      "Revolving component in car maybe unchanged on reversal",
      "cm90b3I="
  ],
  [
      "Happy suggestions at end of day",
      "dGlwc3k="
  ],
  [
      "Oddly ignored Zambian seen as lower in rank",
      "YWJhc2U="
  ],
  [
      "Composer from South – a draw",
      "c2F0aWU="
  ],
  [
      "Fiction penned by an incomer",
      "YWxpZW4="
  ],
  [
      "Silk cloth known to Scots and English",
      "a2VudGU="
  ],
  [
      "Quiet drink? Not quiet drink!",
      "cGVycnk="
  ],
  [
      "Macbeth an example? His status can be seen",
      "dGhhbmU="
  ],
  [
      "Dad won a piece of fruit",
      "cGFwYXc="
  ],
  [
      "Goodwill shown by little woman embracing modern technology",
      "YW1pdHk="
  ],
  [
      "Yesteryear’s well-off youngster said to get reproof from Mac",
      "c2xvYW4="
  ],
  [
      "City district with no hotel",
      "cGFyaXM="
  ],
  [
      "Nearly get wed without ring and symbolic meal",
      "bWFyb3I="
  ],
  [
      "Lover’s letter read out",
      "cm9tZW8="
  ],
  [
      "What’s regularly taken round in party in Agra?",
      "cmFpdGE="
  ],
  [
      "Robot to operate lunar excursion module",
      "Z29sZW0="
  ],
  [
      "Uproar of billions over murdered brother",
      "YmFiZWw="
  ],
  [
      "Burst ball seen after Slav fouled",
      "c2Fsdm8="
  ],
  [
      "Round relative sheds pound in weight",
      "b3VuY2U="
  ],
  [
      "Fools seen within the French city",
      "bGhhc2E="
  ],
  [
      "Join group that's on the rise",
      "dGVub24="
  ],
  [
      "Grace maybe saving man — but there's wickedness!",
      "d3Jvbmc="
  ],
  [
      "Public rights guardian bans one Parisian race",
      "dHJpYmU="
  ],
  [
      "Returned pet I had with little enthusiasm",
      "dGVwaWQ="
  ],
  [
      "Olympian character of some games",
      "b21lZ2E="
  ],
  [
      "Where gladiators fought a long time back",
      "YXJlbmE="
  ],
  [
      "At least twenty-four months is a long time",
      "eWVhcnM="
  ],
  [
      "Mature writer on middle of trip",
      "cmlwZW4="
  ],
  [
      "Pip covers head of timid horse",
      "c3RlZWQ="
  ],
  [
      "Element damaging organ",
      "YXJnb24="
  ],
  [
      "Di leaves daily records for person born in early April",
      "YXJpZXM="
  ],
  [
      "Riches entice grabbing Conservative",
      "bHVjcmU="
  ],
  [
      "Tall building initially tempts one in debt",
      "dG93ZXI="
  ],
  [
      "Layabout seen in bridle road",
      "aWRsZXI="
  ],
  [
      "Memorial of antiquity priest kept in church",
      "cmVsaWM="
  ],
  [
      "Meander is a feature of some rivers around east",
      "d2VhdmU="
  ],
  [
      "Drive back and look on return journey to secure parking",
      "cmVwZWw="
  ],
  [
      "What’s freaky has some of you trembling",
      "b3V0cmU="
  ],
  [
      "Soul of personal assistant bishop’s ignored",
      "YXRtYW4="
  ],
  [
      "Location of son hiding in woody plant",
      "dmlzbmU="
  ],
  [
      "Some vile activity in part of the gut",
      "aWxlYWM="
  ],
  [
      "In Scotland dreary old men start to irritate English",
      "b29yaWU="
  ],
  [
      "Plant getting shelter in East End and minimal sun",
      "YXZlbnM="
  ],
  [
      "Artist using colour that’s “female” rather than “male”",
      "ZmF1dmU="
  ],
  [
      "Vet mostly stopping alcoholic drink for Lent",
      "Z2l2ZW4="
  ],
  [
      "Lie that one’s missing following bean count?",
      "bm9ibGU="
  ],
  [
      "One no doubt taking interest or delight in speaking",
      "c2F2ZXI="
  ],
  [
      "Surly youth to come and go with Boys Brigade for a year",
      "eW9iYm8="
  ],
  [
      "Lowest point in Florida now receding",
      "bmFkaXI="
  ],
  [
      "Warning a member about lake",
      "YWxhcm0="
  ],
  [
      "Send race official over",
      "cmVtaXQ="
  ],
  [
      "In which you'll find this range of mountains?",
      "YXRsYXM="
  ],
  [
      "A bone to pick with children?",
      "aXNzdWU="
  ],
  [
      "Pole playing a part in television or theatre",
      "bm9ydGg="
  ],
  [
      "Element in technical speech Jack ignored",
      "YXJnb24="
  ],
  [
      "Heartless dame resides in Greek island and works as a programmer",
      "Y29kZXM="
  ],
  [
      "Self-assertive bachelor lacking prudence",
      "YnJhc2g="
  ],
  [
      "Warning when first couple have left room",
      "YW1iZXI="
  ],
  [
      "Planting kiss on cheek after love can be a bloomer",
      "b3hsaXA="
  ],
  [
      "Raise previous key?",
      "ZXhhbHQ="
  ],
  [
      "Reporter's sent up handbook",
      "Z3VpZGU="
  ],
  [
      "... a Labour politician with courage",
      "YmFsbHM="
  ],
  [
      "Stop ticket-collector? That shows some nerve",
      "b3B0aWM="
  ],
  [
      "Coarse people from Victoria and Newcastle areas?",
      "c3dpbmU="
  ],
  [
      "Starters for those arriving peckish at Seville?",
      "dGFwYXM="
  ],
  [
      "Hindu worshipper’s object cut with thanks",
      "c2FrdGE="
  ],
  [
      "Looking up enough said possibly dramatically for early coppers",
      "YXNzZXM="
  ],
  [
      "Source of cutting gear and machinery",
      "cGxhbnQ="
  ],
  [
      "Unseats judge avoiding historic conflicts",
      "b3VzdHM="
  ],
  [
      "Cultivated bush sheltering rook perhaps?",
      "c2hydWI="
  ],
  [
      "Try case of larceny hesitantly",
      "c2h5bHk="
  ],
  [
      "Stable workers banking nothing very much.",
      "bG9hZHM="
  ],
  [
      "Divided with a hundred over.",
      "Y2xlZnQ="
  ],
  [
      "West Yorkshire city is ahead according to reports",
      "bGVlZHM="
  ],
  [
      "Collection of products chimed with English",
      "cmFuZ2U="
  ],
  [
      "Rascal to rip off page",
      "c2NhbXA="
  ],
  [
      "Current arrangement could be perfect",
      "aWRlYWw="
  ],
  [
      "Snare wild ones crossing over",
      "bm9vc2U="
  ],
  [
      "Search round for dance band?",
      "Y29tYm8="
  ],
  [
      "One who has depression after losing daughter",
      "b3duZXI="
  ],
  [
      "Preserving agent’s bulletin: it recommends contracting",
      "bml0cmU="
  ],
  [
      "Immigrant lives west of Southwark area",
      "aXNzZWk="
  ],
  [
      "Put out verse about Irish dancers",
      "a2lyb3Y="
  ],
  [
      "Drawing support and comfort first from lover",
      "ZWFzZWw="
  ],
  [
      "Tent peg found outside gym",
      "dGVwZWU="
  ],
  [
      "Poet’s line recalled in good French",
      "Ynlyb24="
  ],
  [
      "Nearly all with a second mission",
      "YWxhbW8="
  ],
  [
      "Forward Hearts found in Scottish city",
      "cGVydGg="
  ],
  [
      "Argument over railway concern",
      "d29ycnk="
  ],
  [
      "Duck is able to get across eastern sea",
      "b2NlYW4="
  ],
  [
      "Asp that is without power to puncture old queen?",
      "dmlwZXI="
  ],
  [
      "Note men on Territorial Army vessel",
      "YW9ydGE="
  ],
  [
      "Hard to tamper with identity",
      "cmlnaWQ="
  ],
  [
      "Salmon served in hotel in my quarter",
      "Y29ob2U="
  ],
  [
      "Record books kept by English queen",
      "ZW50ZXI="
  ],
  [
      "Graduate set up equipment for printing process",
      "YmF0aWs="
  ],
  [
      "Mark goes to health resorts for muscular problem",
      "c3Bhc20="
  ],
  [
      "A good individual no longer here? No longer here",
      "YWdvbmU="
  ],
  [
      "Intermediate exam finally taken by old slave",
      "bWVzbmU="
  ],
  [
      "Losing head is more daring — and maybe more mature?",
      "b2xkZXI="
  ],
  [
      "Preach love before reproof",
      "b3JhdGU="
  ],
  [
      "Old-fashioned grab concealed by Chinese is extraordinary",
      "c2Vpc2U="
  ],
  [
      "Rulers of society entertained by seafarers",
      "dHNhcnM="
  ],
  [
      "A holy one involved with honey-makers?",
      "YXBpYW4="
  ],
  [
      "Grass? An Aussie animal needs it",
      "cm9vc2E="
  ],
  [
      "Guild formed by group of companies about to take off",
      "YXJ0ZWw="
  ],
  [
      "End with Romeo in fit of temper",
      "c3Ryb3A="
  ],
  [
      "Professional brings in editor: a Spaniard?",
      "cGVkcm8="
  ],
  [
      "Strong point favouring team — first half",
      "Zm9ydGU="
  ],
  [
      "Promise not to use top shelf",
      "bGVkZ2U="
  ],
  [
      "5 catching a monster",
      "YmVhc3Q="
  ],
  [
      "Get too hot while slicing baloney",
      "cm9hc3Q="
  ],
  [
      "Guy taking time to relax",
      "dGVhc2U="
  ],
  [
      "Very energetic and touchy person fraying at the edges",
      "aHlwZXI="
  ],
  [
      "Spread of food with litres for drinking",
      "ZmxhcmU="
  ],
  [
      "Headgear for criminals in US districts",
      "aG9vZHM="
  ],
  [
      "Instrument is abused with old rocker clearing off",
      "dmlvbGE="
  ],
  [
      "Not set to race where famous marathon takes place",
      "cnVubnk="
  ],
  [
      "Hit one displaying speed",
      "Y2xvY2s="
  ],
  [
      "Quiet church containing gold architectural feature",
      "cG9yY2g="
  ],
  [
      "Doom's spelt out for this place",
      "c29kb20="
  ],
  [
      "Court of King Arthur",
      "Z2FydGg="
  ],
  [
      "Opening of a test's beginning at the southern end",
      "c3RvbWE="
  ],
  [
      "Weapon to throw or shoot",
      "c3BlYXI="
  ],
  [
      "Fantastic salesperson getting us to the top",
      "c3VwZXI="
  ],
  [
      "Top symbol of home ground",
      "ZWFydGg="
  ],
  [
      "One cutting hair in a state",
      "bWFpbmU="
  ],
  [
      "U-turn",
      "bGFyZ2U="
  ],
  [
      "Outbreak where filming takes place",
      "b25zZXQ="
  ],
  [
      "All the players make nearly half the ice cream",
      "dHV0dGk="
  ],
  [
      "Daggers produced by old boy and priest",
      "b2JlbGk="
  ],
  [
      "US city entertaining male climber",
      "bGlhbmE="
  ],
  [
      "Stuff oneself with something close to Cheddar?",
      "Z29yZ2U="
  ],
  [
      "Letter revealing a union problem after seven years?",
      "YWl0Y2g="
  ],
  [
      "In action it resembles saltpetre",
      "bml0cmU="
  ],
  [
      "Originally such a strange Wiltshire diocese",
      "c2FydW0="
  ],
  [
      "The cheek of some musicians!",
      "YnJhc3M="
  ],
  [
      "Man has nearly forty days to find girl",
      "aGVsZW4="
  ],
  [
      "Rich fellow’s finally given a shilling",
      "bmFib2I="
  ],
  [
      "Brilliant display of yarn wound around cape",
      "ZWNsYXQ="
  ],
  [
      "Copper pen in form of box?",
      "Y3ViaWM="
  ],
  [
      "Shoe to briefly knock up",
      "c2Fib3Q="
  ],
  [
      "Weight trouble? Cereal’s your answer",
      "d2hlYXQ="
  ],
  [
      "See Government file that’s coarse",
      "Z3Jhc3A="
  ],
  [
      "Look round ground first",
      "ZGVja28="
  ],
  [
      "Something for all ages to enjoy inside biting eucalyptus",
      "dHVhcnQ="
  ],
  [
      "End of the British Legion is a devil",
      "ZWJsaXM="
  ],
  [
      "Flipping smashed exam entering college — it’ll help travel",
      "ZGVjY2E="
  ],
  [
      "Fit madam supporting hydros",
      "c3Bhc20="
  ],
  [
      "Protective garment some initially make fun of",
      "c21vY2s="
  ],
  [
      "Man following retired woman’s turn of phrase",
      "aWRpb20="
  ],
  [
      "Crane-like bird Turkish commander found by main road",
      "YWdhbWk="
  ],
  [
      "Took risks — kicked bucket across entrance to crescent",
      "ZGljZWQ="
  ],
  [
      "Carbon copies for heads",
      "Y2FwZXM="
  ],
  [
      "A racket taking in head of mafia organisation",
      "YWRtaW4="
  ],
  [
      "Holy object oddly laid in playing field",
      "cmVsaWM="
  ],
  [
      "Prophet’s artistic grandma",
      "bW9zZXM="
  ],
  [
      "Lots of seats here are not available",
      "YXJlbmE="
  ],
  [
      "Gentle drunk outside Grand Hotel",
      "bGlnaHQ="
  ],
  [
      "Top seed's English racket",
      "bm9pc2U="
  ],
  [
      "Sporting events: matches?",
      "bWVldHM="
  ],
  [
      "Did DIY in bathroom I’d let out",
      "dGlsZWQ="
  ],
  [
      "Consult match official here in middle",
      "cmVmZXI="
  ],
  [
      "Sweetener your drink contains",
      "c3lydXA="
  ],
  [
      "‘‘Jaws’’ bound to be shown in empty cinemas",
      "Y2hvcHM="
  ],
  [
      "Perfect lines to fill little volume",
      "bW9kZWw="
  ],
  [
      "Buff coach horse every so often",
      "b2NocmU="
  ],
  [
      "Vital to tour hospital as part of routine",
      "Y2hvcmU="
  ],
  [
      "Ton pig eats new leather strip",
      "dGhvbmc="
  ],
  [
      "Ruler’s still virtually one foot",
      "Y2FsaWY="
  ],
  [
      "Annals of Tacitus or Ovid’s poem? Sound bit of instruction",
      "ZmFzdGk="
  ],
  [
      "No good and tiny bit of African rhino",
      "bmd3ZWU="
  ],
  [
      "Locksmith does this on getting into restraints",
      "bG9pZHM="
  ],
  [
      "Clues of that bloke including those bordering on naughtiest",
      "aGludHM="
  ],
  [
      "Angry person holds in grouse",
      "cnlwZXI="
  ],
  [
      "Horace’s in the presence of Owen initially in the old lie",
      "Y29yYW0="
  ],
  [
      "Migrant with spare brass appearing in street",
      "c3RpbnQ="
  ],
  [
      "Sound catty without direct upset",
      "bWlhb3c="
  ],
  [
      "Part of insect rolling on stomach",
      "bm90dW0="
  ],
  [
      "Number one's appeal",
      "aXNzdWU="
  ],
  [
      "Means of transport to get case of merchandise through part of America",
      "Y2FtZWw="
  ],
  [
      "East German capital erected in Roman port",
      "b3N0aWE="
  ],
  [
      "Like birds initially imported in a commercial vehicle",
      "YXZpYW4="
  ],
  [
      "Fellow engaged in moral philosophy",
      "cmFscGg="
  ],
  [
      "Outstanding old part of house",
      "b3dpbmc="
  ],
  [
      "Track taking dog across river",
      "dHJhaWw="
  ],
  [
      "Son isn't a good person",
      "c2FpbnQ="
  ],
  [
      "One group getting left in small place beset by water",
      "aXNsZXQ="
  ],
  [
      "Particular group may be performers with energy",
      "Y2FzdGU="
  ],
  [
      "Place overlooked in film star's series",
      "Y2hhaW4="
  ],
  [
      "Indicators of further commentary crucial to no believers.",
      "b2JlbGk="
  ],
  [
      "Find out glass at first not full",
      "Z2xlYW4="
  ],
  [
      "Play that amuses worker in Post Office?",
      "cGFudG8="
  ],
  [
      "Exhausted writer in street",
      "c3BlbnQ="
  ],
  [
      "Greek character has not finished passing mountain",
      "YWxwaGE="
  ],
  [
      "Beast arrived late at the start",
      "Y2FtZWw="
  ],
  [
      "Convincingly defeat on English course",
      "cm91dGU="
  ],
  [
      "Allow elderly relative time",
      "Z3JhbnQ="
  ],
  [
      "Sounds like a mistake on which to stand?",
      "Zmxvb3I="
  ],
  [
      "The way to keep head from clonking bed",
      "cGF0Y2g="
  ],
  [
      "See you in Ibiza having ace parties across island",
      "YWRpb3M="
  ],
  [
      "Answer with almost complete rubbish",
      "YXdmdWw="
  ],
  [
      "Something of a rake pinches women’s threads",
      "dHdpbmU="
  ],
  [
      "A couple start to go around Dutch town",
      "Z291ZGE="
  ],
  [
      "Turner oil at Hepworth shows",
      "bGF0aGU="
  ],
  [
      "Beast of burden carrying large Tibetan priest",
      "bGxhbWE="
  ],
  [
      "Apply authority without power",
      "ZXhlcnQ="
  ],
  [
      "Old-fashioned beer brought back without pressure",
      "cmV0cm8="
  ],
  [
      "Tedium starts to exhaust now nothing usually interests",
      "ZW5udWk="
  ],
  [
      "Coat in two sizes gaining appreciation",
      "c21lYXI="
  ],
  [
      "Right page in incorrect order?",
      "cmVjdG8="
  ],
  [
      "European clubs wearing black kick out",
      "ZWplY3Q="
  ],
  [
      "Ring through snout a form of restraint",
      "bm9vc2U="
  ],
  [
      "Socialist bound by firm principles",
      "Y3JlZG8="
  ],
  [
      "Thailand's last queen raised money abroad",
      "ZGluYXI="
  ],
  [
      "Man appearing in bazaar once",
      "YWFyb24="
  ],
  [
      "Scottish Linesman is on fire!",
      "YnVybnM="
  ],
  [
      "N Ireland footballer conserving energy in attack",
      "YmVzZXQ="
  ],
  [
      "Find the net?  One can be composed!",
      "c2NvcmU="
  ],
  [
      "At first they were all nervous; finally showing pluck",
      "dHdhbmc="
  ],
  [
      "Pinch small duck",
      "c3RlYWw="
  ],
  [
      "Cry over queen’s grave",
      "c29iZXI="
  ],
  [
      "Revolutionary essence derived from turning over leaf",
      "Zm9saW8="
  ],
  [
      "Believer in return of a former ruler",
      "cmFzdGE="
  ],
  [
      "Colour of any two short bananas",
      "dGF3bnk="
  ],
  [
      "Restraint for dog while a shopper's absorbed",
      "bGVhc2g="
  ],
  [
      "Defendant's third book essential in court case",
      "ZmFjdHM="
  ],
  [
      "Radiant silver-blue",
      "YWdsb3c="
  ],
  [
      "About to interrupt theatre review",
      "cmVjYXA="
  ],
  [
      "Run across a pirate",
      "cm92ZXI="
  ],
  [
      "Wash first of nightclothes in advance",
      "cmluc2U="
  ],
  [
      "Former leaders in Chelsea evidently like to do well",
      "ZXhjZWw="
  ],
  [
      "Negative male in America",
      "bWludXM="
  ],
  [
      "Grey and unfashionable plaster",
      "Z3JvdXQ="
  ],
  [
      "Employment of learned person after university",
      "dXNhZ2U="
  ],
  [
      "Record includes unknown composer",
      "bGlzenQ="
  ],
  [
      "Shape character of Greek doctor",
      "cmhvbWI="
  ],
  [
      "Old cricketer’s grand career",
      "Z3JhY2U="
  ],
  [
      "Plant fibre packed round large slate",
      "Ymxhc3Q="
  ],
  [
      "Trouble following space communication",
      "ZW1haWw="
  ],
  [
      "Really old oak trees survive principally — on these",
      "cm9vdHM="
  ],
  [
      "Mess up surface of front edge of sail",
      "Zmx1ZmY="
  ],
  [
      "Periodical by graduate is hot stuff!",
      "bWFnbWE="
  ],
  [
      "Through which spirit is poured out of sight",
      "b3B0aWM="
  ],
  [
      "Character waited for leave period",
      "Z29kb3Q="
  ],
  [
      "Knowing a king is held in great respect",
      "YXdhcmU="
  ],
  [
      "Each leading",
      "YWhlYWQ="
  ],
  [
      "People taking position about sex",
      "bGFpdHk="
  ],
  [
      "Partners embracing single hour of prayer",
      "bm9uZXM="
  ],
  [
      "Getting rid of a whole lot of players no good",
      "YXhpbmc="
  ],
  [
      "Cake that’s part of breakfast or tea",
      "dG9ydGU="
  ],
  [
      "Phlegmatic type almost shut in thus",
      "c3RvaWM="
  ],
  [
      "Woman’s contribution finally accepted by Times",
      "YWduZXM="
  ],
  [
      "Work trapeze artistes are ill-advised to have",
      "bm9uZXQ="
  ],
  [
      "Manage to catch son in wood",
      "Y29wc2U="
  ],
  [
      "Loud shouting from one imprisoned by beak?",
      "bm9pc2U="
  ],
  [
      "Strengthening device left in holiday site",
      "Y2xhbXA="
  ],
  [
      "Politician protected by first-class defence",
      "YWxpYmk="
  ],
  [
      "Quick-witted character on the staff",
      "c2hhcnA="
  ],
  [
      "Highest-ranked group in personnel I tested",
      "ZWxpdGU="
  ],
  [
      "Proper to accommodate a Trojan king",
      "cHJpYW0="
  ],
  [
      "Lip — part of the face",
      "Y2hlZWs="
  ],
  [
      "Fire close to club lounge",
      "YmxhemU="
  ],
  [
      "One arrested by the force?",
      "dGhpZWY="
  ],
  [
      "Republican is greeting Hindu sage",
      "cmlzaGk="
  ],
  [
      "Iranians at last in American airspace",
      "c2ludXM="
  ],
  [
      "Puzzle about public transport",
      "cmVidXM="
  ],
  [
      "Can't do without Geordie news bosses?",
      "bmVlZHM="
  ],
  [
      "Stay like newly laid asphalt?",
      "dGFycnk="
  ],
  [
      "Child learner seen around a comprehensive",
      "dG90YWw="
  ],
  [
      "Stick cooling eggs in the trash",
      "Y2xpbmc="
  ],
  [
      "Was a jumper extremely loose fitting?",
      "bGVhcHQ="
  ],
  [
      "Difficult to hide ring in collection",
      "aG9hcmQ="
  ],
  [
      "Native home on Scottish island son escapes from",
      "aW51aXQ="
  ],
  [
      "Mum’s working for a member of a secret society",
      "bWFzb24="
  ],
  [
      "Composer’s final jazz piece included in catalogue",
      "bGlzenQ="
  ],
  [
      "Married in Polish before a dance",
      "cnVtYmE="
  ],
  [
      "Bird with rook and duck on waste container",
      "cm9iaW4="
  ],
  [
      "Difficult to hide ring in collection",
      "aG9hcmQ="
  ],
  [
      "Make a note of eating in informal establishment",
      "am9pbnQ="
  ],
  [
      "Man on board eating right seafood",
      "cHJhd24="
  ],
  [
      "Donut deli flips cooking grease",
      "b2lsZWQ="
  ],
  [
      "Place lightning struck partly sent skyward",
      "bmludGg="
  ],
  [
      "Some slumber therein",
      "YmVydGg="
  ],
  [
      "Difficult to hide ring in collection",
      "aG9hcmQ="
  ],
  [
      "Animal oddly eats bat head",
      "YmVhc3Q="
  ],
  [
      "Faces in the city hear you scratching",
      "aXRjaHk="
  ],
  [
      "Original poster with epoch concert",
      "b3BlcmE="
  ],
  [
      "Land of the heart in chaos",
      "ZWFydGg="
  ],
  [
      "Holiday troops without eyes eat me",
      "dHJpcHM="
  ],
  [
      "Game inside catches steam",
      "Y2hlc3M="
  ],
  [
      "Bottomless salad dish tossed and turned",
      "ZGlhbHM="
  ],
  [
      "Spring out of jail payment to embrace university",
      "Ym91bmQ="
  ],
  [
      "Man on board eating right seafood",
      "cHJhd24="
  ],
  [
      "Trunk and tangled roots",
      "dG9yc28="
  ],
  [
      "Maybe canines in part of golf course on Thursday",
      "dGVldGg="
  ],
  [
      "Mined inside out jeans",
      "ZGVuaW0="
  ],
  [
      "Flee in rest without direction lead on",
      "ZmxpcnQ="
  ],
  [
      "Blade splitting peoples word",
      "c3dvcmQ="
  ],
  [
      "Check a Buddhist at regular intervals",
      "YXVkaXQ="
  ],
  [
      "Southern Sisters invade young male with authority",
      "Ym9zc3k="
  ],
  [
      "Scottish snack offered in disco nearby",
      "c2NvbmU="
  ],
  [
      "My holding? One dollar!",
      "bW9uZXk="
  ],
  [
      "Utilize America with General Electric",
      "dXNhZ2U="
  ],
  [
      "Girl trapping judge’s assassin",
      "bmluamE="
  ],
  [
      "Trinity right within you",
      "dGhyZWU="
  ],
  [
      "Knock out jockey regularly — that's strange!",
      "a29va3k="
  ],
  [
      "Strong Lee flipped street",
      "c3RlZWw="
  ],
  [
      "Bravo! Right playing card held up!",
      "YnJhY2U="
  ],
  [
      "Different occasionally lost girl",
      "b3RoZXI="
  ],
  [
      "Garbage Thursday Sandwich with brass belly",
      "dHJhc2g="
  ],
  [
      "Pay 100 rings to destroy sin",
      "Y29pbnM="
  ],
  [
      "Scandium shattered ear terrifies",
      "c2NhcmU="
  ],
  [
      "Donut deli flips cooking grease",
      "b2lsZWQ="
  ],
  [
      "Patient's back starts to cause intermittent, often terrible, suffering",
      "c3RvaWM="
  ],
  [
      "Server missing one essential liquid",
      "d2F0ZXI="
  ],
  [
      "Be left with large and ultimately unlovely stomach",
      "YmVsbHk="
  ],
  [
      "Aircraft ugly, did you say?",
      "cGxhbmU="
  ],
  [
      "By Hollywood location, delve regularly for scoop",
      "bGFkbGU="
  ],
  [
      "A record held by a hotel in Alcoholics Anonymous",
      "YWxwaGE="
  ],
  [
      "Excusing Artifical Intelligence for capturing library",
      "YWxpYmk="
  ],
  [
      "Driver flipped car, goes to emergency room!",
      "cmFjZXI="
  ],
  [
      "Certification only initially accepted by senior academic",
      "cHJvb2Y="
  ],
  [
      "Bread crust covers sound iron slab",
      "Ym9hcmQ="
  ],
  [
      "Brag about large, playful farm animal",
      "Z2xvYXQ="
  ],
  [
      "Scratching head in coffee shop",
      "Y2hhZmU="
  ],
  [
      "One sticky mess has got left in hut",
      "aWdsb28="
  ],
  [
      "Win over by tucking into clutch arm",
      "Y2hhcm0="
  ],
  [
      "Bitter Romeo drowning in toxic waste",
      "YWNyaWQ="
  ],
  [
      "Rock star to out new EP debut",
      "c3RvbmU="
  ],
  [
      "Even chance to dye mixed with sweetener",
      "aG9uZXk="
  ],
  [
      "Beat half of us in the water",
      "cG91bmQ="
  ],
  [
      "Captain destroys plot I am in",
      "cGlsb3Q="
  ],
  [
      "Find, small amount",
      "dHJhY2U="
  ],
  [
      "One page coming out of directory",
      "cmVjdG8="
  ],
  [
      "Slowly transform school party going over hotel",
      "bW9ycGg="
  ],
  [
      "Spotted scavenger bringing foreign money into Hawaii",
      "aHllbmE="
  ],
  [
      "Might be indebted for interrupting press release",
      "cG93ZXI="
  ],
  [
      "Snare wild ones crossing over at first",
      "bm9vc2U="
  ],
  [
      "Played the part of cadet at sea",
      "YWN0ZWQ="
  ],
  [
      "Reporter’s dispatched perfume",
      "c2NlbnQ="
  ],
  [
      "Encirclement, say, if enemy gets energetic at outset",
      "c2llZ2U="
  ],
  [
      "Bad time to bring back group of soldiers",
      "dHJvb3A="
  ],
  [
      "Fold petal another way",
      "cGxlYXQ="
  ],
  [
      "Meaning to float along",
      "ZHJpZnQ="
  ],
  [
      "No small seat for Roman magistrate",
      "ZWRpbGU="
  ],
  [
      "Stone taken off instead of getting over",
      "YWdhaW4="
  ],
  [
      "Old explorer spoken of harshly",
      "cmF3bHk="
  ],
  [
      "For singing in cathedral",
      "bWF5YmU="
  ],
  [
      "Get pasty and bloomer that’s hand-picked for chain in north?",
      "Z293YW4="
  ],
  [
      "Old pack: presumably not the only member of rowdy one to show up?",
      "dGFyb2M="
  ],
  [
      "Long twelvemonth at end of campaign",
      "eWVhcm4="
  ],
  [
      "Vain attempt you keep hidden",
      "ZW1wdHk="
  ],
  [
      "Son nervous describing grasses",
      "c2VkZ3k="
  ],
  [
      "Assistant keeps son out of the way",
      "YXNpZGU="
  ],
  [
      "A pastoral letter: some felt it useful",
      "dGl0dXM="
  ],
  [
      "God takes a long time turning over ancient city",
      "aG9ydXM="
  ],
  [
      "Fountain: in it tossed up clergyman",
      "dHJldmk="
  ],
  [
      "Moved to take-off after disembarking one becoming stressed",
      "dGF4ZWQ="
  ],
  [
      "I'd recalled way of working one part of speech",
      "aWRpb20="
  ],
  [
      "Row about component of education for painstaking student?",
      "dHJpZXI="
  ],
  [
      "Civic dignitary dressing right",
      "bWF5b3I="
  ],
  [
      "Old people off home to reflect",
      "aWNlbmk="
  ],
  [
      "Put swimmer on the phone?",
      "cGxhY2U="
  ],
  [
      "Don't spend penny on brush",
      "c2tpbXA="
  ],
  [
      "Middle card",
      "aGVhcnQ="
  ],
  [
      "Revolution inspiring Italian leader somewhere in Italy",
      "dHVyaW4="
  ],
  [
      "Country lane winding around first of poplars",
      "bmVwYWw="
  ],
  [
      "Island serving some mediocre tempura",
      "Y3JldGU="
  ],
  [
      "Only altered new fabric",
      "bnlsb24="
  ],
  [
      "Man on board eating right seafood",
      "cHJhd24="
  ],
  [
      "Strong second row",
      "c3RpZmY="
  ],
  [
      "Powerful drug: one taken with expression of doubt after operation",
      "b3BpdW0="
  ],
  [
      "Shot below joint",
      "ZWxib3c="
  ],
  [
      "Sound coming from piano is extraordinary",
      "bm9pc2U="
  ],
  [
      "Trunk and tangled roots",
      "dG9yc28="
  ],
  [
      "Courage of owner finally entering flat that's been turned over",
      "bmVydmU="
  ],
  [
      "Large portion of church in decline",
      "bGFwc2U="
  ],
  [
      "Carnivore's length added to value",
      "cmF0ZWw="
  ],
  [
      "Territory that’s visible on borders of this country",
      "eXVrb24="
  ],
  [
      "Feeble Democrat raised flag",
      "ZHJvb3A="
  ],
  [
      "One means of conveying news feature the French banned",
      "YXJ0aWM="
  ],
  [
      "Effeminate guy has one tough game for United",
      "Z2lybHk="
  ],
  [
      "Your tip for marinade? Eastern herb",
      "dGh5bWU="
  ],
  [
      "Coloured chilli sauce back inside of American guts to a degree",
      "Y2Vsb20="
  ],
  [
      "Body-swerving trustee end for release of old Scots",
      "ZXhlbWU="
  ],
  [
      "Welsh nurse finds bear",
      "d2hlbHA="
  ],
  [
      "Vigorous mum who’s flush and likely to blow up?",
      "eWFwcHk="
  ],
  [
      "Subject in history such as fiction contains",
      "bGllZ2U="
  ],
  [
      "Soul so lacking in quiet place of detention",
      "Z3VsYWc="
  ],
  [
      "Old Swahilis appear to rise invaded by Zulu",
      "bXplZXM="
  ],
  [
      "Lens for camera cases returned",
      "bWFjcm8="
  ],
  [
      "Pole appearing earlier in Gdansk",
      "bm9ydGg="
  ],
  [
      "Extract from a little white lie",
      "d3Jlc3Q="
  ],
  [
      "Asian country dismissing cases of Hindu bias",
      "aW5kaWE="
  ],
  [
      "Informant inside that is angry",
      "aXJhdGU="
  ],
  [
      "Maybe canines in part of golf course on Thursday",
      "dGVldGg="
  ],
  [
      "Stranger died in north European river",
      "b2RkZXI="
  ],
  [
      "Wagon broken by a weight of stones",
      "Y2FyYXQ="
  ],
  [
      "I had clerk starting late and finishing early — layabout",
      "aWRsZXI="
  ],
  [
      "Organised criminals intend rising about a fine",
      "bWFmaWE="
  ],
  [
      "Tree’s more bare with top removed",
      "YWxkZXI="
  ],
  [
      "Heap of dust finally placed in bag",
      "c3RhY2s="
  ],
  [
      "A pudding sent back cold",
      "YWxvb2Y="
  ],
  [
      "Ultimately serious desire to be fashionable",
      "c3dpc2g="
  ],
  [
      "Murder victim given grave at last in Poplar?",
      "YWJlbGU="
  ],
  [
      "Old railwaymen with points to look after",
      "bnVyc2U="
  ],
  [
      "Lily’s yoga position",
      "bG90dXM="
  ],
  [
      "Burst with old enthusiasm",
      "Z3VzdG8="
  ],
  [
      "Proper to welcome a Trojan king",
      "cHJpYW0="
  ],
  [
      "Cube consumed orally",
      "ZWlnaHQ="
  ],
  [
      "Ceremony read out? Correct!",
      "cmlnaHQ="
  ],
  [
      "Dominant idea or word from French Count’s prison island",
      "bW90aWY="
  ],
  [
      "Maybe tokes from bit of grass after rolling",
      "ZHJhd3M="
  ],
  [
      "Part of an antler’s secured with cord",
      "dHdpbmU="
  ],
  [
      "Remove equipment from rocky ridge",
      "ZGVyaWc="
  ],
  [
      "Artistic appreciation almost stifling member’s dismal verse",
      "ZWxlZ3k="
  ],
  [
      "Fine places for the seriously ill house plant?",
      "ZmljdXM="
  ],
  [
      "Prepared to attach paper of particular dimensions",
      "c2l6ZWQ="
  ],
  [
      "It’s bad to be left in this list suddenly",
      "bHVyY2g="
  ],
  [
      "Volunteers ate up: prepare for Jack to?",
      "ZGVmYXQ="
  ],
  [
      "This S American native no good for a film",
      "Y29hdGk="
  ],
  [
      "A long way round a state for itinerant",
      "ZnJpYXI="
  ],
  [
      "Long-distance traveller from Maine sleeping like a baby?",
      "Y29tZXQ="
  ],
  [
      "Given further term in high school for dances",
      "aGFrYXM="
  ],
  [
      "Four pairs of volunteers beset by obsessive behaviour",
      "b2N0YWQ="
  ],
  [
      "Painter stern after spilling a thinner on the ground",
      "cmFyZXI="
  ],
  [
      "One makes a packet in one’s field",
      "YmFsZXI="
  ],
  [
      "Crack from unknown imbecile",
      "Z29vZnk="
  ],
  [
      "Marshal calm when changing side repeatedly",
      "YXJyYXk="
  ],
  [
      "Cold dish using incomplete vessels (below and above water)",
      "c3VzaGk="
  ],
  [
      "Trader’s tip diluted small change",
      "dHdlYWs="
  ],
  [
      "Reason males are excluded from rummage around",
      "YXJndWU="
  ],
  [
      "Heel’s neighbour caused anger after undressing",
      "YW5rbGU="
  ],
  [
      "Quietly utter joke",
      "cHJhbms="
  ],
  [
      "Free and easy",
      "bG9vc2U="
  ],
  [
      "Cheers and jeers largely disapproved of",
      "dGFib28="
  ],
  [
      "Scottish League One team’s first in division",
      "c3BsaXQ="
  ],
  [
      "Woman I grumble about",
      "bmFvbWk="
  ],
  [
      "Cue imparting spin on for example brown",
      "bnVkZ2U="
  ],
  [
      "Picture firm haggle regularly",
      "aW1hZ2U="
  ],
  [
      "Garret room to some extent reminiscent of past",
      "cmV0cm8="
  ],
  [
      "Strange plea associated with introduction of passion fruit",
      "YXBwbGU="
  ],
  [
      "Comparatively risky to ignore daughter becoming more aloof",
      "aWNpZXI="
  ],
  [
      "Expect to be away briefly at computer study",
      "YXdhaXQ="
  ],
  [
      "Quiet nobleman one valued",
      "cGVhcmw="
  ],
  [
      "Group of jolly dimwits set up a happy scene",
      "aWR5bGw="
  ],
  [
      "Register of leaderless soldiers with inadequate function",
      "ZW5yb2w="
  ],
  [
      "Leading character abroad captured by female photographer",
      "YWxlcGg="
  ],
  [
      "Some dry goods in untidy heap at front of hospital",
      "ZXBoYWg="
  ],
  [
      "Film providing some lurid entertainment",
      "aWRlbnQ="
  ],
  [
      "Paintings of fashion princess",
      "dG9uZGk="
  ],
  [
      "Eel is cooked in vinegar no longer",
      "ZXNpbGU="
  ],
  [
      "Sun in this place no longer bright?",
      "c2hlcmU="
  ],
  [
      "Father maybe to ask for money with extremes of embarrassment",
      "YmVnZXQ="
  ],
  [
      "Old Chinese coins left in sofa returned",
      "dGFlbHM="
  ],
  [
      "Nothing written about sort of current needed for scientific apparatus",
      "bGluYWM="
  ],
  [
      "Primate is following God for the most part",
      "bG9yaXM="
  ],
  [
      "Unfashionable game generates cost",
      "b3V0Z28="
  ],
  [
      "Kitchen item stuffs centre of marrow with something very cold",
      "cmljZXI="
  ],
  [
      "Publication shows discretion with writer's final piece included",
      "dHJhY3Q="
  ],
  [
      "One laying track for a green engine",
      "aGVucnk="
  ],
  [
      "Face that a woman usually has on a certain day in May?",
      "YnJhdmU="
  ],
  [
      "Passage one’s going to read out",
      "YWlzbGU="
  ],
  [
      "Running time required by commercial",
      "YWRtaW4="
  ],
  [
      "Old storyteller regularly made use of PA",
      "YWVzb3A="
  ],
  [
      "Third grade glossy turned over by graduate",
      "Z2FtbWE="
  ],
  [
      "Picture held up by popular umpire",
      "bXVyYWw="
  ],
  [
      "Sleep after swallowing tablet and lots of medicine?",
      "ZG9zZXM="
  ],
  [
      "Grow this plant in the tropics – the Scots cannot",
      "Y2FubmE="
  ],
  [
      "American cigarette end with prime tar rating",
      "YWJ1c2U="
  ],
  [
      "Expletive as heard before 9’s last part in opera",
      "cnVkZHk="
  ],
  [
      "Some climb Eiger to get a tan",
      "YmVpZ2U="
  ],
  [
      "Doctor the tea and get coffee?",
      "bW9jaGE="
  ],
  [
      "Platter with food originally banned in strict diet",
      "dHJheWY="
  ],
  [
      "Classically elegant trellis with sides lopped",
      "YXR0aWM="
  ],
  [
      "No end of interest in payment for use of an organ",
      "cmVuYWw="
  ],
  [
      "Arabs rebuilt Iraqi city",
      "YmFzcmE="
  ],
  [
      "A snake - that computes?",
      "YWRkZXI="
  ],
  [
      "Old card game found in tomb recently",
      "b21icmU="
  ],
  [
      "Primate finding bird with left and right wings?",
      "bGVtdXI="
  ],
  [
      "Increasingly just ignoring first item in laundry",
      "YWlyZXI="
  ],
  [
      "Wrestles with God when worship is heard",
      "cHJheXM="
  ],
  [
      "Minimal air traffic to hold back pilot",
      "dHJpYWw="
  ],
  [
      "Christmas tree decoration made by a new setter",
      "YW5nZWw="
  ],
  [
      "Bend a rim around dish",
      "cGlsYXU="
  ],
  [
      "This writer's about to chop wood for people associated with PA",
      "YW1pc2g="
  ],
  [
      "Shelter chief doctor of old",
      "bGVlY2g="
  ],
  [
      "Officer in charge of early complaint",
      "Y29saWM="
  ],
  [
      "Expression of disapproval about church showing filmstrip",
      "ZmljaGU="
  ],
  [
      "Small American city shown on casual shirt",
      "dGVlbnk="
  ],
  [
      "Once again plan modern music to entertain them",
      "cmVtYXA="
  ],
  [
      "Sample artist's penultimate piece in gallery",
      "dGFzdGU="
  ],
  [
      "Spice children initially think the world of",
      "Y2xvdmU="
  ],
  [
      "Big house in local police area",
      "bWFub3I="
  ],
  [
      "State of oblivion of bishop in posh car",
      "bGltYm8="
  ],
  [
      "Simpleton’s lodging-place in US city",
      "bmlubnk="
  ],
  [
      "Youth from east extremely knowledgeable about robot",
      "ZGFsZWs="
  ],
  [
      "Church land where bird has swapped river for lake?",
      "Z2xlYmU="
  ],
  [
      "Friend’s note written during a match",
      "YW1pZ28="
  ],
  [
      "Tree-dweller appearing in sundry advertisements",
      "ZHJ5YWQ="
  ],
  [
      "Like an order mocking customer finally leaves",
      "aW9uaWM="
  ],
  [
      "Greeting a man will love?",
      "aGVsbG8="
  ],
  [
      "What Green is making sacrifice?",
      "Zm9yZ28="
  ],
  [
      "Article that’s seized by bird",
      "YXZpYW4="
  ],
  [
      "Oil press for two",
      "bWVkaWE="
  ],
  [
      "Fleet's power in attack",
      "cmFwaWQ="
  ],
  [
      "Destination Kentucky's old capital",
      "dG9reW8="
  ],
  [
      "Wave from urchin holding up crown",
      "Y3JpbXA="
  ],
  [
      "Distribute vote to oust leader",
      "YWxsb3Q="
  ],
  [
      "Newspaper etc omitting indefinite number in statistical quantity",
      "bWVkaWE="
  ],
  [
      "Bill loves what’s prohibited",
      "dGFib28="
  ],
  [
      "Foreign letter about popular zoo animal",
      "cmhpbm8="
  ],
  [
      "Permission to take off",
      "bGVhdmU="
  ],
  [
      "Artist breaking 60% of laws of the country",
      "cnVyYWw="
  ],
  [
      "Instant judgment initially dubious",
      "amlmZnk="
  ],
  [
      "First of editors on the Times to make history?",
      "ZXJhc2U="
  ],
  [
      "Reason why Australian is in Church?",
      "Y2F1c2U="
  ],
  [
      "Girl welcomes Italian friendship",
      "YW1pdHk="
  ],
  [
      "State: 'Times to invest in brewing products'",
      "dGV4YXM="
  ],
  [
      "Fight involving energy weapon",
      "c3BlYXI="
  ],
  [
      "Father to admit a show of displeasure",
      "ZnJvd24="
  ],
  [
      "Aid when strolling round love boat",
      "Y2Fub2U="
  ],
  [
      "Nitrogen close to ocean absorbed by marine plant",
      "c2VubmE="
  ],
  [
      "Tend to run up banks of Seine",
      "bnVyc2U="
  ],
  [
      "Beat learner driver involved in crash",
      "ZmxhaWw="
  ],
  [
      "Delay beginning to seem unlikely",
      "c3RhbGw="
  ],
  [
      "Waterway with biblical town on left",
      "Y2FuYWw="
  ],
  [
      "Pounds carried by monk's beast of burden",
      "bGxhbWE="
  ],
  [
      "Change flag when heading off",
      "YWx0ZXI="
  ],
  [
      "Pay for another nurse",
      "dHJlYXQ="
  ],
  [
      "Fear about being caught by the old man",
      "ZHJlYWQ="
  ],
  [
      "Soldier’s brought back mother’s letter from Greece",
      "c2lnbWE="
  ],
  [
      "Second girl for fish",
      "c2thdGU="
  ],
  [
      "Organ’s playing — a gas!",
      "YXJnb24="
  ],
  [
      "Beam: at first surveyor measures its length exactly",
      "c21pbGU="
  ],
  [
      "Mock ultimately decadent leisure",
      "dGVhc2U="
  ],
  [
      "Repeat section of core curriculum",
      "cmVjdXI="
  ],
  [
      "Part of engine unaffected by reversal",
      "cm90b3I="
  ],
  [
      "Body initially concealed in murderer's hut",
      "Y2FiaW4="
  ],
  [
      "Long period of time before end of Ramadan",
      "eWVhcm4="
  ],
  [
      "Bishop leaves to unfairly influence aristocrat",
      "bm9ibGU="
  ],
  [
      "One in no hurry to whizz round north",
      "c25haWw="
  ],
  [
      "Zoo unceremoniously caging leopard",
      "b3VuY2U="
  ],
  [
      "Beg Penny to go first",
      "cGxlYWQ="
  ],
  [
      "Weapon found in famous school in East End",
      "YXJyb3c="
  ],
  [
      "Nice bakery's production troubles?",
      "cGFpbnM="
  ],
  [
      "Chairman wants at first to stifle one catty remark",
      "bWlhb3c="
  ],
  [
      "Swimmer seen among icebergs heading west",
      "Z3JlYmU="
  ],
  [
      "Occupying fast car circling round block",
      "aW5nb3Q="
  ],
  [
      "Wool supplier from a shopping complex turning up",
      "bGxhbWE="
  ],
  [
      "Parade order with list",
      "d2hlZWw="
  ],
  [
      "Fly jet carrying duke east",
      "bWlkZ2U="
  ],
  [
      "Musical maestro offering one note after another",
      "c29sdGk="
  ],
  [
      "Overexcited person pushing a product very hard?",
      "aHlwZXI="
  ],
  [
      "City's food shop being reported",
      "ZGVsaGk="
  ],
  [
      "Small volume to devour is without ostentation",
      "ZWNsYXQ="
  ],
  [
      "Platforms being erected help operation",
      "cG9kaWE="
  ],
  [
      "Office clerk maybe initially fallible is later extremely reliable",
      "ZmlsZXI="
  ],
  [
      "Cold atmosphere at new stone mound",
      "Y2Fpcm4="
  ],
  [
      "European vote result – only half rejoice",
      "ZXh1bHQ="
  ],
  [
      "Head over for a knees-up",
      "YmVhbm8="
  ],
  [
      "In revolution he died a certain western hero",
      "Ym9vbmU="
  ],
  [
      "Worker in night club and pub supplying spirits",
      "ZGppbm4="
  ],
  [
      "Brute rounds on pretentious toff",
      "eWFob28="
  ],
  [
      "Nothing put forward in musketeer’s pledges",
      "b2F0aHM="
  ],
  [
      "Scene of action initially settled on years before",
      "eXByZXM="
  ],
  [
      "Header missed in tight draw",
      "bG90dG8="
  ],
  [
      "Card cheat of old",
      "a25hdmU="
  ],
  [
      "One in England missing out on defence",
      "YWxpYmk="
  ],
  [
      "Run commercial on two lines",
      "cmFkaWk="
  ],
  [
      "Go off to match unexpectedly?",
      "ZWxvcGU="
  ],
  [
      "Five having fever hard to pin down",
      "dmFndWU="
  ],
  [
      "Slightly adjust end of saw penetrating wood",
      "dHdlYWs="
  ],
  [
      "Little person – bit of a pain after short time",
      "dGl0Y2g="
  ],
  [
      "Slightly adjust end of saw penetrating wood",
      "dHdlYWs="
  ],
  [
      "Spar joining front half of ship to rear",
      "c2hhZnQ="
  ],
  [
      "Expression of surprise about recording getting top position?",
      "YWxwaGE="
  ],
  [
      "Flower: item for sale by our group",
      "bG90dXM="
  ],
  [
      "Weapon a Parisian dropped being pierced",
      "c3R1bmc="
  ],
  [
      "Unusual uproar after loss of silver",
      "b3V0cmU="
  ],
  [
      "Support a bit of leisure — after relaxation",
      "ZWFzZWw="
  ],
  [
      "US-born poet upset John? Not entirely",
      "ZWxpb3Q="
  ],
  [
      "Try quitting business for an Asian river",
      "aW5kdXM="
  ],
  [
      "Some fancy nice person holding sceptical views",
      "Y3luaWM="
  ],
  [
      "Presbyter of greater seniority in the family",
      "ZWxkZXI="
  ],
  [
      "Island nation — it is secured by endless locks",
      "aGFpdGk="
  ],
  [
      "Feature about right for old language",
      "bm9yc2U="
  ],
  [
      "Ill-tempered woman ignoring a sign",
      "dmlyZ28="
  ],
  [
      "Rubbish can be left in large receptacle at the end",
      "YmlsZ2U="
  ],
  [
      "Permit inexperienced leader to drop out",
      "YWxsb3c="
  ],
  [
      "Reference book sadly includes typos at the start",
      "YXRsYXM="
  ],
  [
      "Lose weight? Finish off attempt in Irish county",
      "c2xpZ28="
  ],
  [
      "Descendant touring Channel Islands finding another one",
      "c2Npb24="
  ],
  [
      "Meander in South with no clothes on cut short",
      "c25ha2U="
  ],
  [
      "Dropped off pelts needing treatment",
      "c2xlcHQ="
  ],
  [
      "Star circle oddly ignored for moment",
      "dHJpY2U="
  ],
  [
      "Rise of drag performer?",
      "dG93ZXI="
  ],
  [
      "Villain shows vigour heading north in Parisian street",
      "cm9ndWU="
  ],
  [
      "Revolutionary nearly put frighteners on Mrs Siddons?",
      "c2FyYWg="
  ],
  [
      "Steer then give way finding large bend",
      "b3hib3c="
  ],
  [
      "Bush having tip of spine inside to pierce",
      "Z29yc2U="
  ],
  [
      "Early computers from America bankers rejected",
      "YWJhY2k="
  ],
  [
      "King Edward possibly taking bath with Queen",
      "dHViZXI="
  ],
  [
      "Get up around noon to wash",
      "cmluc2U="
  ],
  [
      "A woman’s set up supplying laxative",
      "c2VubmE="
  ],
  [
      "Circular paintings yours truly wouldn’t put up!",
      "dG9uZGk="
  ],
  [
      "Murderer concealing first of bodies in shack",
      "Y2FiaW4="
  ],
  [
      "Current parliament returns early work",
      "aWxpYWQ="
  ],
  [
      "Armstrong’s heard of what prayers do",
      "a25lZWw="
  ],
  [
      "In which the beast of Siberia is caught?",
      "dGFpZ2E="
  ],
  [
      "Toy with no head found in sack",
      "cmlmbGU="
  ],
  [
      "Some delightfully rich little poem",
      "bHlyaWM="
  ],
  [
      "Poles in Brussels start to examine result",
      "ZW5zdWU="
  ],
  [
      "Composer left in temper when rejected",
      "ZWxnYXI="
  ],
  [
      "Noble Oscar shed clothes",
      "YmFyb24="
  ],
  [
      "Drink drug in round tin",
      "b2NlYW4="
  ],
  [
      "Wax cylinder recorder",
      "dGFwZXI="
  ],
  [
      "Editor recruits staff to do what he does",
      "ZW1lbmQ="
  ],
  [
      "Car wheel's sound",
      "YXVkaW8="
  ],
  [
      "Posh girl yours truly raised to get settled",
      "ZW1iZWQ="
  ],
  [
      "Cry quietly in a public place",
      "c2hvdXQ="
  ],
  [
      "Pursue legal action around hospital",
      "Y2hhc2U="
  ],
  [
      "Feature on a country",
      "Y2hpbmE="
  ],
  [
      "Germany's leader entering naked jog",
      "bnVkZ2U="
  ],
  [
      "What could hold tape of privy last words turned up",
      "c3Bvb2w="
  ],
  [
      "Unsightly mark on European causing fright",
      "c2NhcmU="
  ],
  [
      "A mug served up cold",
      "YWxvb2Y="
  ],
  [
      "Sponge divers tire?",
      "ZGlwc28="
  ],
  [
      "Lift up sauce boat",
      "a2V0Y2g="
  ],
  [
      "Millions invested in auctioning site — it was steep",
      "ZW1iYXk="
  ],
  [
      "Paddy’s bowled over with second flight",
      "c3RlcHM="
  ],
  [
      "Underworld goddess grabbing last of these small stilettos?",
      "aGVlbHM="
  ],
  [
      "Tag left next on murderee",
      "bGFiZWw="
  ],
  [
      "Mitsotakis’s business is therefore back from oblivion",
      "ZXJnb24="
  ],
  [
      "Acts damn politely with those kettling demonstrators",
      "ZGVlZHM="
  ],
  [
      "Variety of forbidden fruit",
      "cmFuZ2U="
  ],
  [
      "I’m unlikely to get out rifle which has been discharged",
      "bGlmZXI="
  ],
  [
      "Informally go trapping a lieutenant — go easy",
      "d2FsdHo="
  ],
  [
      "Beet is British and low in calories",
      "YmxpdGU="
  ],
  [
      "Military unit’s chaplain quietly becoming Conservative",
      "Y2FkcmU="
  ],
  [
      "No-hoper’s new role picking up seaweed at front",
      "bG9zZXI="
  ],
  [
      "Sound made by learner involved in row",
      "c3BsYXQ="
  ],
  [
      "Hotel with quite special uniform?",
      "aGFiaXQ="
  ],
  [
      "Appeal made by church member",
      "Y2hhcm0="
  ],
  [
      "Food on either side of street trail",
      "cGlzdGU="
  ],
  [
      "Female writer briefly including a mystic syllable",
      "bmFvbWk="
  ],
  [
      "Covert mercenary in position in Jamaica",
      "bmluamE="
  ],
  [
      "Fool in school system",
      "c2NobW8="
  ],
  [
      "Broadcast brings controversy",
      "aXNzdWU="
  ],
  [
      "Tree more bare with bark initially removed",
      "YWxkZXI="
  ],
  [
      "Absurd how dialogue ends",
      "aW5hbmU="
  ],
  [
      "Charged for contract",
      "dGVuc2U="
  ],
  [
      "Opponents at table go to law for result",
      "ZW5zdWU="
  ],
  [
      "Resin from tree around eastern India",
      "ZWxlbWk="
  ],
  [
      "Tree line to extend over",
      "bGFyY2g="
  ],
  [
      "In conversation one derides instant tea and coffee",
      "bW9jaGE="
  ],
  [
      "Recurrent note for all to see on large sticker",
      "Z2x1ZXI="
  ],
  [
      "China in case of silver-gilt is apt to break",
      "c3BhbHQ="
  ],
  [
      "Praise that's vague after change of direction",
      "cm9vc2U="
  ],
  [
      "Mount horse on ring from behind? For starters bit of luck’s needed",
      "bG9nYW4="
  ],
  [
      "University hospital riddled with difficulty? Repeatedly as before",
      "dW5ldGg="
  ],
  [
      "Man goes into headland for the birds",
      "cmhlYXM="
  ],
  [
      "Narrative made up about one foreign resort",
      "ZWlsYXQ="
  ],
  [
      "Fencing post is large stake",
      "c3BpbGU="
  ],
  [
      "Missouri team’s energy?",
      "bW94aWU="
  ],
  [
      "Soldier turned up bearing news from down under",
      "cG9pbHU="
  ],
  [
      "Tips for Toulouse waiter attached to club?",
      "dHJvbmM="
  ],
  [
      "Picked out cape and stockings",
      "Y2hvc2U="
  ],
  [
      "Faithless fellow's missing at job",
      "aGVpc3Q="
  ],
  [
      "Sign in book store missing line",
      "bGlicmE="
  ],
  [
      "Drop litter with domestic servant",
      "d2hlbHA="
  ],
  [
      "Some stock book by Latin poet",
      "Ym92aWQ="
  ],
  [
      "Stand or move gently left",
      "ZWFzZWw="
  ],
  [
      "Blog resists accommodating trolls",
      "b2dyZXM="
  ],
  [
      "Famous school rejected by daughter",
      "bm90ZWQ="
  ],
  [
      "Old doctor who’s after your blood?",
      "bGVlY2g="
  ],
  [
      "Lean on the papers",
      "cHJlc3M="
  ],
  [
      "Index finger perhaps where one has a hand?",
      "cG9rZXI="
  ],
  [
      "Judge and godly type meeting",
      "dHJ5c3Q="
  ],
  [
      "Motto I’m going by as much as possible",
      "bWF4aW0="
  ],
  [
      "Poetry volume: the Queen’s English",
      "dmVyc2U="
  ],
  [
      "Yet these might be the odds",
      "ZXZlbnM="
  ],
  [
      "Pound for one's bucks?",
      "aHV0Y2g="
  ],
  [
      "Far from strenuous match",
      "bGlnaHQ="
  ],
  [
      "Disclosure no longer affected behaviour",
      "ZXhwb3M="
  ],
  [
      "Disregard female accompanied by yob",
      "ZmxvdXQ="
  ],
  [
      "Lazybones is uncommonly riled",
      "aWRsZXI="
  ],
  [
      "Service station concealing defects",
      "dmljZXM="
  ],
  [
      "One way or another she's a precocious female",
      "bWFkYW0="
  ],
  [
      "Little Valerie describing information technology as crucial",
      "dml0YWw="
  ],
  [
      "Weapon — something of little value with tip broken off",
      "cmlmbGU="
  ],
  [
      "Greek island's request for help to save American",
      "c2Ftb3M="
  ],
  [
      "Strikes on the wrists?",
      "Y3VmZnM="
  ],
  [
      "Carbon copier for skip",
      "Y2FwZXI="
  ],
  [
      "Mayonnaise sent back contains this bug",
      "YW5ub3k="
  ],
  [
      "Link with facilities interspersed in Times2?",
      "dHdpY2U="
  ],
  [
      "Lad with an eye for the male or female cattle",
      "Ymlzb24="
  ],
  [
      "Tool to pick up name on inside of clothing",
      "dG9uZ3M="
  ],
  [
      "Quiet sound of pain in body cavity",
      "cG91Y2g="
  ],
  [
      "Stealthily pursue long-legged wader in sound",
      "c3RhbGs="
  ],
  [
      "Bones sailors primarily identified",
      "dGFyc2k="
  ],
  [
      "Work trapeze artists are ill-advised to have?",
      "bm9uZXQ="
  ],
  [
      "Tropical plant Auntie originally donated",
      "YWdhdmU="
  ],
  [
      "An irrational king executed a mathematician",
      "ZXVsZXI="
  ],
  [
      "Pair including a novelist",
      "dHdhaW4="
  ],
  [
      "Arab artillery invading islands without question",
      "aXJhcWk="
  ],
  [
      "Bird identified by a good friend in Paris",
      "YWdhbWk="
  ],
  [
      "Live with wooded area around",
      "ZHdlbGw="
  ],
  [
      "Primate's mischievous child overwhelmed by church",
      "Y2hpbXA="
  ],
  [
      "Move suddenly east after a breather",
      "bHVuZ2U="
  ],
  [
      "Excited cry over Lenin's first revolutionary device",
      "d2hlZWw="
  ],
  [
      "Bungling writer brought up in centre of Linlithgow",
      "aW5lcHQ="
  ],
  [
      "They might tramp up and down pollarded trees",
      "YWNlcnM="
  ],
  [
      "To put up with that woman is not like you",
      "b3RoZXI="
  ],
  [
      "Offer view over tree",
      "b3BpbmU="
  ],
  [
      "Wrote about tall building",
      "dG93ZXI="
  ],
  [
      "Collect in a church service",
      "YW1hc3M="
  ],
  [
      "A stunner — stare wildly",
      "dGFzZXI="
  ],
  [
      "Example given in current understanding",
      "aWRlYWw="
  ],
  [
      "Thick-skinned sort making cash",
      "cmhpbm8="
  ],
  [
      "Language used by Magwitch in Dickens",
      "aGluZGk="
  ],
  [
      "Pleased haze at last is clearing",
      "Z2xhZGU="
  ],
  [
      "Mountain up north on small maps",
      "cGxhbnM="
  ],
  [
      "Geordie mother is taken round to see holy men",
      "aW1hbXM="
  ],
  [
      "Stars at leaving speech",
      "b3Jpb24="
  ],
  [
      "Drop of liquid: you may get this in bar",
      "bWluaW0="
  ],
  [
      "First character to go under in river trips",
      "dG91cnM="
  ],
  [
      "Head off opening compass",
      "YW1iaXQ="
  ],
  [
      "Polish right for small flower",
      "cmhpbmU="
  ],
  [
      "Inert substance oceanographer carries back",
      "YXJnb24="
  ],
  [
      "Look around lake and an extensive 24",
      "bGxhbm8="
  ],
  [
      "It thus set up a Roman port",
      "b3N0aWE="
  ],
  [
      "Join a former partner collecting news",
      "YW5uZXg="
  ],
  [
      "Addition to letter after mother’s disease",
      "bXVtcHM="
  ],
  [
      "Stick English after History?",
      "cGFzdGU="
  ],
  [
      "Small cake’s small pointed shape",
      "c2NvbmU="
  ],
  [
      "Lure embodied in “caveat emptor”",
      "dGVtcHQ="
  ],
  [
      "I suffer without complaining ’cos it is different",
      "c3RvaWM="
  ],
  [
      "Billions invested in English medical implant",
      "ZW1iZWQ="
  ],
  [
      "Company prospector’s casing a source of oil",
      "Y29wcmE="
  ],
  [
      "Local resident having no time to be green",
      "bmFpdmU="
  ],
  [
      "What fighter may carry out through following cunning",
      "Zmx5Ynk="
  ],
  [
      "Light timber that’s a piece of cake to turn over?",
      "YmFsc2E="
  ],
  [
      "Dad getting over friend’s outrage",
      "YXBwYWw="
  ],
  [
      "Saw too much within a second",
      "bW90dG8="
  ],
  [
      "A team order that’s generally accepted",
      "YXhpb20="
  ],
  [
      "Lovely metal link",
      "Y3V0aWU="
  ],
  [
      "Latest Sun delivery at last for Baltimore paperboy",
      "bmV3c3k="
  ],
  [
      "Rob once a governor Head ignored",
      "cmlldmU="
  ],
  [
      "Chart again showing Jack and Queen coming from South",
      "cmVtYXA="
  ],
  [
      "Enthusiasm of boxer finally ready to mate?",
      "aGVhcnQ="
  ],
  [
      "Magistrate seizes duke in quick move",
      "ZG9kZ2U="
  ],
  [
      "Kind of an Einstein? Not I",
      "Z2VudXM="
  ],
  [
      "Cut part of bulb",
      "Y2xvdmU="
  ],
  [
      "Film sequence has one negative effect",
      "aWRlbnQ="
  ],
  [
      "Rocky beds bad aboard ship",
      "c2lsbHM="
  ],
  [
      "Ensnare a smoker",
      "aG9va2E="
  ],
  [
      "Very mature red ultimately missing in cellar",
      "dmF1bHQ="
  ],
  [
      "Family group’s beginning a racket",
      "Y2xhbmc="
  ],
  [
      "A scam to snaffle farmer’s last fruit from tree",
      "YWNvcm4="
  ],
  [
      "Deduce no escaping from fire",
      "aW5mZXI="
  ],
  [
      "Country engaged in machinations?",
      "Y2hpbmE="
  ],
  [
      "A type of grain I ditched in shock",
      "YW1hemU="
  ],
  [
      "Search thoroughly for weapon",
      "cmlmbGU="
  ],
  [
      "Holy object oddly laid in playing field",
      "cmVsaWM="
  ],
  [
      "Gutted officials cover up US university fails",
      "b21pdHM="
  ],
  [
      "Custom somewhat hard at first",
      "aGFiaXQ="
  ],
  [
      "Extremist cult rarely demonstrates",
      "dWx0cmE="
  ],
  [
      "Foolish using unknown quantities in do-it-yourself",
      "ZGl6enk="
  ],
  [
      "Frank the musician using sound from remote control",
      "emFwcGE="
  ],
  [
      "Last character following Disney to dance",
      "d2FsdHo="
  ],
  [
      "Cautious line taken by US general",
      "bGVlcnk="
  ],
  [
      "Small drink's drunk with unobtrusive sound",
      "c2Nod2E="
  ],
  [
      "Letter and article presented with show of gratitude",
      "dGhldGE="
  ],
  [
      "Work out alone — very into that",
      "c29sdmU="
  ],
  [
      "Loss at sea with not taking care? Not half",
      "d3JlY2s="
  ],
  [
      "To fall asleep during sex is ....",
      "aW5hcHQ="
  ],
  [
      "All right to scarper",
      "bGVnaXQ="
  ],
  [
      "A small amount of extremely smooth wine",
      "c2hyZWQ="
  ],
  [
      "Watering hole regularly serving locals first",
      "b2FzaXM="
  ],
  [
      "Spaniard possibly to pass on turn",
      "ZGllZ28="
  ],
  [
      "Record book",
      "YWxidW0="
  ],
  [
      "Weight of ice beginning to accumulate in farm vehicle",
      "Y2FyYXQ="
  ],
  [
      "Almost decapitated sooner than expected",
      "ZWFybHk="
  ],
  [
      "Dump outside entrances to urban lorry plant",
      "dHVsaXA="
  ],
  [
      "Game sheltering in scrub in gorge",
      "YmluZ28="
  ],
  [
      "Algerian port accommodating golf magazine",
      "b3JnYW4="
  ],
  [
      "Archer’s first and last quarrel?",
      "YXJyb3c="
  ],
  [
      "My notes from Cambodia might be somehow miserly",
      "cmllbHM="
  ],
  [
      "Store’s now stopped plugging place",
      "aG9hcmQ="
  ],
  [
      "Grasses on Detective Sergeant following end of case",
      "cmVlZHM="
  ],
  [
      "We cannot stay fully associated when axe gets lifted",
      "dGFydHM="
  ],
  [
      "Thousand valuable timber trees concealing wild ass",
      "a3lhbmc="
  ],
  [
      "Fellows from Hungary in what NATO exemplifies?",
      "Y2hhcHM="
  ],
  [
      "Sneak into Rechabite’s restaurant",
      "dHJhdHQ="
  ],
  [
      "Old people’s home hooked on methamphetamine",
      "aWNlbmk="
  ],
  [
      "Squad crossing lake as fire not yet started?",
      "dW5saXQ="
  ],
  [
      "Old boy and earl eating last bits of mince pies might become thus",
      "b2Jlc2U="
  ],
  [
      "Treatment upset English unionist with trapped wind",
      "dXNhZ2U="
  ],
  [
      "Fool around with looker briefly outside bash?",
      "ZXNzYXk="
  ],
  [
      "Those topping early May chart employed expert rapper",
      "ZW1jZWU="
  ],
  [
      "Seasonal workers personalities initially ignored",
      "ZWx2ZXM="
  ],
  [
      "Complete upper-class eccentric catching cold",
      "dW5jdXQ="
  ],
  [
      "Muscular worker perhaps content to abandon family",
      "YmVlZnk="
  ],
  [
      "Class of individuals banned from CIA site",
      "Y2FzdGU="
  ],
  [
      "Finally consider Samuel's teacher Charlie a bit of a saint?",
      "cmVsaWM="
  ],
  [
      "Doctor and I don't know what to say after colonel turns up",
      "bG9jdW0="
  ],
  [
      "Trips from this French city?",
      "dG91cnM="
  ],
  [
      "Artist paid to pen article",
      "bWFuZXQ="
  ],
  [
      "Performer with animal has monkey around not keeping quiet",
      "dGFtZXI="
  ],
  [
      "Sage in Nagpur — I shine",
      "cmlzaGk="
  ],
  [
      "Demand that performance is never to be put on again?",
      "ZXhhY3Q="
  ],
  [
      "Last Oscar given to Titanic",
      "b21lZ2E="
  ],
  [
      "Beer about four makes one animated?",
      "YWxpdmU="
  ],
  [
      "Henry in bed in hut",
      "c2hhY2s="
  ],
  [
      "Quiet individual was excellent",
      "c2hvbmU="
  ],
  [
      "Liberal lots will accept as courageous perhaps",
      "bWFubHk="
  ],
  [
      "Ascended in Kilimanjaro seemingly",
      "YXJvc2U="
  ],
  [
      "Move quickly to embrace right tease?",
      "ZmxpcnQ="
  ],
  [
      "Deliberately hands round a board game",
      "bGFyZ28="
  ],
  [
      "Bill wearing woman's skirt",
      "ZXZhZGU="
  ],
  [
      "Foreign ally questioning whether he can proceed?",
      "YW1pZ28="
  ],
  [
      "Concerned with a contest",
      "YWJvdXQ="
  ],
  [
      "Violence in an attempt to capture king",
      "YWdncm8="
  ],
  [
      "A crop that is produced by a tree",
      "YWNvcm4="
  ],
  [
      "One learning this is part of the eye",
      "cHVwaWw="
  ],
  [
      "Light vehicle that is full of listening devices?",
      "YnVnZ3k="
  ],
  [
      "Step right up to summarise",
      "cmVjYXA="
  ],
  [
      "Proportion found in peroration",
      "cmF0aW8="
  ],
  [
      "Rowing team’s bulk initially reduced",
      "ZWlnaHQ="
  ],
  [
      "Street urchin playin' for money",
      "Z2FtaW4="
  ],
  [
      "Brave chap guarding borders of Thebes",
      "Z3V0c3k="
  ],
  [
      "Portion of feta's typically pleasing to the palate",
      "dGFzdHk="
  ],
  [
      "Cook first portions of beef rib with alternative to lard?",
      "YnJvaWw="
  ],
  [
      "Italian poet’s output ultimately digested by Scandinavian",
      "ZGFudGU="
  ],
  [
      "It isn’t commonly a stain or blemish",
      "dGFpbnQ="
  ],
  [
      "Second outsize European deer",
      "bW9vc2U="
  ],
  [
      "Fortress you and I observed in rocky peak",
      "dG93ZXI="
  ],
  [
      "Decoration in one room",
      "YXdhcmQ="
  ],
  [
      "A bit of smoked ham",
      "c3BlY2s="
  ],
  [
      "Extremely tough bank project",
      "dGhyb3c="
  ],
  [
      "Support that Russia’s secured",
      "dHJ1c3M="
  ],
  [
      "Noise from guitar fret? Start to tune up",
      "dHdhbmc="
  ],
  [
      "Put hands together round middle of stomach and squeeze hard",
      "Y2xhbXA="
  ],
  [
      "See smoke circling: reason?",
      "bG9naWM="
  ],
  [
      "Indicates approval of some clock noises",
      "dGlja3M="
  ],
  [
      "Republic once sounded drier",
      "YWlyZXI="
  ],
  [
      "Such an attractive point about breaking a horse",
      "Zm9jYWw="
  ],
  [
      "Unpleasant expression when born cradled by sister",
      "c25lZXI="
  ],
  [
      "Sort of frost on front of department store",
      "aG9hcmQ="
  ],
  [
      "Lines known by the expert",
      "cm9wZXM="
  ],
  [
      "Piece of music displayed in order on door",
      "cm9uZG8="
  ],
  [
      "Scotsman’s to know an indication",
      "dG9rZW4="
  ],
  [
      "Way left to produce scaled-down version",
      "bW9kZWw="
  ],
  [
      "Easily annoyed a couple of times aboard railway",
      "cmF0dHk="
  ],
  [
      "Put a price on uranium discovered in glen",
      "dmFsdWU="
  ],
  [
      "Sign made by one supporter following Liverpool's first",
      "bGlicmE="
  ],
  [
      "Shock that head is leaving? I'll say!",
      "cmlnaHQ="
  ],
  [
      "Axe green areas of Paris to the north",
      "c2NyYXA="
  ],
  [
      "Volunteers to lead a soldier up lots of freezing trees",
      "dGFpZ2E="
  ],
  [
      "Miserable nurse at end of ward",
      "ZHJlYXI="
  ],
  [
      "It's not right to pack flip-flop",
      "dGhvbmc="
  ],
  [
      "One who wrote in defence of editorial sent up",
      "ZGVmb2U="
  ],
  [
      "Tease American over sweetheart",
      "c3VnYXI="
  ],
  [
      "In Tacitus by the way see developing porky",
      "b2Jlc2U="
  ],
  [
      "Rab C’s abuse is unexpected and quiet without pressure",
      "c25hc2g="
  ],
  [
      "Bingo’s destiny — time together with love",
      "bG90dG8="
  ],
  [
      "Old relation sinks back clutching what’s still to be found",
      "c3liYmU="
  ],
  [
      "Doyens in court watchers wanting one date",
      "ZGVhbnM="
  ],
  [
      "Hostel in present poet’s praise",
      "aGVyeWU="
  ],
  [
      "Joy has Knight in old card game",
      "Z2xlZWs="
  ],
  [
      "Months and months investing in advance",
      "bW9vbnM="
  ],
  [
      "Walrus remains under stone",
      "c3Rhc2g="
  ],
  [
      "Pointer once part of the One-Eleven",
      "bmVlbGU="
  ],
  [
      "Feature of mountain visible in fair weather off and on",
      "YXJldGU="
  ],
  [
      "Old boy about to get Palace's recognition? That's sweet",
      "Ym9tYmU="
  ],
  [
      "Right person to give support in meeting",
      "cmFsbHk="
  ],
  [
      "Persuasive chaps maybe getting maiden to enter a place of vice?",
      "YWRtZW4="
  ],
  [
      "Former drug mixture",
      "cGFzdGU="
  ],
  [
      "Hat that's not got left in country cottage",
      "Ym93ZXI="
  ],
  [
      "Some learn one sunny day from Caesar",
      "bm9uZXM="
  ],
  [
      "Small vessel with temperature scarcely sufficient",
      "c2NhbnQ="
  ],
  [
      "Cold comfort in end",
      "Y2Vhc2U="
  ],
  [
      "White House soldier going round facilities",
      "aWdsb28="
  ],
  [
      "Quiet chap with a salty wife “saint” beds",
      "cGxvdHM="
  ],
  [
      "Author producing series of books after long time",
      "YWdlbnQ="
  ],
  [
      "Certain numbers of youngsters swallowing recreational drug",
      "Y3ViZXM="
  ],
  [
      "Naughty ripping out insides in the manner of a wild animal",
      "bnlhbGE="
  ],
  [
      "Country church with trendy bit of architecture at the front",
      "Y2hpbmE="
  ],
  [
      "Words on gift tag for Edmund went well",
      "dG9uZWQ="
  ],
  [
      "Cockney embraced the woman in this shrub",
      "ZWxkZXI="
  ],
  [
      "A meat and egg combination served up in US city",
      "b21haGE="
  ],
  [
      "Look after some revolutionary candidates running",
      "bnVyc2U="
  ],
  [
      "Turn of phrase in papers I'm carrying round",
      "aWRpb20="
  ],
  [
      "Genuinely devoid of energy in comeback",
      "cmFsbHk="
  ],
  [
      "A European losing last match",
      "YWdyZWU="
  ],
  [
      "Strange article about piece of fiction",
      "YWxpZW4="
  ],
  [
      "Hummer to reverse move quickly",
      "dG9wYXo="
  ],
  [
      "From which one selects fellows oneself",
      "bWVudXM="
  ],
  [
      "Fieldwork nurtured a non-specialist to some extent",
      "cmVkYW4="
  ],
  [
      "Asian barge business that’s steady but for husband and wife",
      "Y2FzY28="
  ],
  [
      "Query not entirely to Persian dynasty",
      "cWFqYXI="
  ],
  [
      "One shining brightly in earlier prayer day is upset",
      "ZGVuZWI="
  ],
  [
      "Trim and uniform unisex wrap",
      "cGFyZXU="
  ],
  [
      "Outburst of delight then disgust finding meadow in Moray",
      "aGF1Z2g="
  ],
  [
      "Think about love as a timid person",
      "bW91c2U="
  ],
  [
      "Dance beat given energy",
      "dGFuZ28="
  ],
  [
      "Out-of-date permit unacceptable ultimately",
      "cGFzc2U="
  ],
  [
      "Wait for action on tennis court",
      "c2VydmU="
  ],
  [
      "Unskilled work from son of afflicted man?",
      "bWNqb2I="
  ],
  [
      "Squirrel away almost months in terrible weather",
      "c3Rvcm0="
  ],
  [
      "Doctors succeeded saving European national leader",
      "bW9zZXM="
  ],
  [
      "No new sort of calendar girl",
      "anVsaWE="
  ],
  [
      "I agree about returning thanks for poet",
      "eWVhdHM="
  ],
  [
      "A college year provides friendship",
      "YW1pdHk="
  ],
  [
      "Chain of human descent not complete",
      "YW5kZXM="
  ],
  [
      "Part of circle about to retire in Ghanaian port",
      "YWNjcmE="
  ],
  [
      "Meal served by a number (about fifty?)",
      "ZmxvdXI="
  ],
  [
      "Fiasco trying to accommodate race venue",
      "YXNjb3Q="
  ],
  [
      "Article about Italian wine tax no longer levied",
      "dGl0aGU="
  ],
  [
      "Community leader to go on endlessly",
      "cmFiYmk="
  ],
  [
      "Listen to the French horn",
      "YnVnbGU="
  ],
  [
      "Mind introducing new terms",
      "bm91bnM="
  ],
  [
      "Keen on catching Mahler's last prelude",
      "aW50cm8="
  ],
  [
      "Clergyman forgetting first offence",
      "YXJzb24="
  ],
  [
      "I will briefly broadcast in passageway",
      "YWlzbGU="
  ],
  [
      "Own goal to include Republican article in periodical",
      "b3JnYW4="
  ],
  [
      "Unpleasant refusal to accommodate street",
      "bmFzdHk="
  ],
  [
      "Complete stop as outsiders leave — speech unfinished",
      "dG90YWw="
  ],
  [
      "Boxer maybe supported by mother’s belief",
      "ZG9nbWE="
  ],
  [
      "Pull away from wife and sleep",
      "d3Jlc3Q="
  ],
  [
      "Papers etc dismissing knight from holy city",
      "bWVkaWE="
  ],
  [
      "Hand in part penning second song",
      "cHNhbG0="
  ],
  [
      "Wall painting left on a strange backing",
      "bXVyYWw="
  ],
  [
      "Catwalk artist is large on style",
      "bW9kZWw="
  ],
  [
      "River running across road makes one late",
      "dGFyZHk="
  ],
  [
      "Beat section of totem pole",
      "dGVtcG8="
  ],
  [
      "Character of the lower Nile",
      "ZGVsdGE="
  ],
  [
      "Celestial visitor has to arrive on time",
      "Y29tZXQ="
  ],
  [
      "Current score is high before end of play",
      "dGFsbHk="
  ],
  [
      "One enters London school after European woman",
      "ZWxzaWU="
  ],
  [
      "Prizegiver putting book in Christmas wrapping",
      "bm9iZWw="
  ],
  [
      "Opening bars with some quaint rooms",
      "aW50cm8="
  ],
  [
      "Start to collect pieces of wood for footwear",
      "Y2xvZ3M="
  ],
  [
      "Short fibre spun",
      "YnJpZWY="
  ],
  [
      "Fellow gets hot in foreign city",
      "Z2hlbnQ="
  ],
  [
      "King in spectacular drive",
      "YXJkcmk="
  ],
  [
      "My very good procession",
      "Y29yc28="
  ],
  [
      "Sharp sounds from small children needing double love",
      "dG9vdHM="
  ],
  [
      "Seal turning around ducking head",
      "b3Rhcnk="
  ],
  [
      "Without wife as source of strength",
      "c2luZXc="
  ],
  [
      "Tree chopped landing on area in village",
      "YWxkZWE="
  ],
  [
      "Take down unstable bridge lacking breadth",
      "ZGVyaWc="
  ],
  [
      "Symbolic books reflecting breadth of knowledge",
      "dG9rZW4="
  ],
  [
      "Jam or cake?",
      "YmxvY2s="
  ],
  [
      "Dog food without flavour ultimately",
      "dHJhY2s="
  ],
  [
      "Old tapestry frames where padres preach",
      "dGVudHM="
  ],
  [
      "That which winds Guevara up in revolutionary broadcast",
      "YWlyZWQ="
  ],
  [
      "Scot on the fiddle uses this run out to brood",
      "cm9zaXQ="
  ],
  [
      "Resent involving old diplomat who’s second-rate",
      "ZW52b3k="
  ],
  [
      "Spenser’s vow is in trouble",
      "aGVhc3Q="
  ],
  [
      "Couple from Hebron holding up stiff letter of theirs?",
      "c2FkaGU="
  ],
  [
      "Geese spotted heading northwards around noon",
      "bmVuZXM="
  ],
  [
      "Bawd mostly admitted to it? It gets you hot and steamy",
      "c2F1bmE="
  ],
  [
      "Special number to ring on a tablet",
      "c3RlbGE="
  ],
  [
      "One year skate over twenty-nine spring days",
      "aXl5YXI="
  ],
  [
      "Reportedly one departing for bar",
      "bGV2ZXI="
  ],
  [
      "Model   question",
      "cG9zZXI="
  ],
  [
      "Stick fork into small fruit",
      "c3BlYXI="
  ],
  [
      "Put finger on front of thigh: that hurt!",
      "dG91Y2g="
  ],
  [
      "Pull away with the others",
      "d3Jlc3Q="
  ],
  [
      "Crouch down in illegally-occupied building",
      "c3F1YXQ="
  ],
  [
      "One regretting keeping large measuring device?",
      "cnVsZXI="
  ],
  [
      "Call up the day before receiving fine",
      "ZXZva2U="
  ],
  [
      "Dance company never goes abroad initially",
      "Y29uZ2E="
  ],
  [
      "Some exert influence over explosive constituent",
      "bml0cmU="
  ],
  [
      "Refrain from eating inspiring oriental banquet",
      "ZmVhc3Q="
  ],
  [
      "Oscar managed to get hold of golf magazine",
      "b3JnYW4="
  ],
  [
      "I was competitive with climber going up the wall?",
      "aXZpZWQ="
  ],
  [
      "Loud noise from family beginning to grate",
      "Y2xhbmc="
  ],
  [
      "Seeing bear regularly in this Alpine landmark",
      "ZWlnZXI="
  ],
  [
      "Observe pair immersed in that European river",
      "c3ByZWU="
  ],
  [
      "Study this writer's material",
      "ZGVuaW0="
  ],
  [
      "Store had several drinks put back",
      "ZGVwb3Q="
  ],
  [
      "Big sound in very small space",
      "dnJvb20="
  ],
  [
      "Game about to get explosive — one may be on edge",
      "cnVjaGU="
  ],
  [
      "Positive response when claiming record — cries of delight?",
      "eWVscHM="
  ],
  [
      "Acceptable shape of neck with a top",
      "dmFsaWQ="
  ],
  [
      "Crudely hang sort of gate that nobody at first goes through",
      "bHluY2g="
  ],
  [
      "Person in office one playing rates",
      "dGVtcGk="
  ],
  [
      "Demanding to be beheaded: doing it?",
      "YXhpbmc="
  ],
  [
      "Resolve to move rook to the fifth? No way",
      "bmV2ZXI="
  ],
  [
      "Time out?",
      "bmlnaHQ="
  ],
  [
      "Modify a dwelling on return at end of August",
      "YWRhcHQ="
  ],
  [
      "Inform about time for swindle",
      "c3Rpbmc="
  ],
  [
      "Headdress seen in trip abroad oddly",
      "dGlhcmE="
  ],
  [
      "Husband in holiday area — a winner",
      "Y2hhbXA="
  ],
  [
      "Run after husband when entering church",
      "Y2hhc2U="
  ],
  [
      "Drinks served to English guy",
      "dGVhc2U="
  ],
  [
      "Light Muscat or Chablis bottles",
      "dG9yY2g="
  ],
  [
      "A trotter for cooking?",
      "YWZvb3Q="
  ],
  [
      "Mog kept rhino?",
      "a2l0dHk="
  ],
  [
      "Conservative soon to become ordained minister",
      "Y2Fub24="
  ],
  [
      "Fellow joining soldiers in mansion",
      "bWFub3I="
  ],
  [
      "Depart with characters from Middle Avenue",
      "bGVhdmU="
  ],
  [
      "Bushy-tailed African is bizarrely red in South Africa",
      "emVyZGE="
  ],
  [
      "Language with a couple of laughable fallacies",
      "aWRvbGE="
  ],
  [
      "Service to erase computing bug",
      "bHVyZ3k="
  ],
  [
      "Scale from cayman’s front leg?",
      "Y2xpbWI="
  ],
  [
      "People’s careers",
      "cmFjZXM="
  ],
  [
      "Bill attached to papers is consumptive",
      "dGFiaWQ="
  ],
  [
      "Ghost writer’s latest found in a bum novel",
      "dW1icmE="
  ],
  [
      "Special seat around back of court providing cover for a seed",
      "dGVzdGE="
  ],
  [
      "Once superior European province",
      "bGllZ2U="
  ],
  [
      "I may be put out by person serving at table",
      "d2F0ZXI="
  ],
  [
      "Youngster guarded by neurotic Hilda",
      "Y2hpbGQ="
  ],
  [
      "Change commercial about workers",
      "YW1lbmQ="
  ],
  [
      "Banal ending for magnificent ceremony",
      "dHJpdGU="
  ],
  [
      "Carpenter's food",
      "Y2hpcHM="
  ],
  [
      "Sweets in tin daddy emptied",
      "Y2FuZHk="
  ],
  [
      "Sauce eaten by colossal savage",
      "c2Fsc2E="
  ],
  [
      "More than one fell in love with men in the script",
      "bW9vcnM="
  ],
  [
      "Light that warns companion leaving compartment",
      "YW1iZXI="
  ],
  [
      "One Murdoch hails originally from Dublin?",
      "aXJpc2g="
  ],
  [
      "Occasionally behind peers: feel down about this?",
      "ZWlkZXI="
  ],
  [
      "Quiet fellow taking dip in river",
      "cGlhbm8="
  ],
  [
      "Short advert: for a second",
      "cGhvdG8="
  ],
  [
      "A range of hearing",
      "YXVyYWw="
  ],
  [
      "Cheers football teams? They’re going places!",
      "dGF4aXM="
  ],
  [
      "Yankee area accommodating key conference centre once",
      "eWFsdGE="
  ],
  [
      "One page coming out of directory",
      "cmVjdG8="
  ],
  [
      "Meaning to float along",
      "ZHJpZnQ="
  ],
  [
      "Power line held in that?",
      "cHlsb24="
  ],
  [
      "Come to wreck",
      "dG90YWw="
  ],
  [
      "Minions abandoning southern nation",
      "eWVtZW4="
  ],
  [
      "Stick supporting middle of blue flower",
      "bHVwaW4="
  ],
  [
      "Funny spin",
      "c2FsbHk="
  ],
  [
      "Funds raised for boat",
      "c2xvb3A="
  ],
  [
      "Introduction to record in creative work — here?",
      "cHJvZW0="
  ],
  [
      "Scottish estate owner in place of seclusion with duke",
      "bGFpcmQ="
  ],
  [
      "Principle that is engaging Democrat most of all",
      "aWRlYWw="
  ],
  [
      "Right to run away?",
      "bGVnaXQ="
  ],
  [
      "Army doctor has done with cut",
      "ZHJvdmU="
  ],
  [
      "Savoury jelly originally served in a popular film",
      "YXNwaWM="
  ],
  [
      "Retired teacher greeting Hindu sage",
      "cmlzaGk="
  ],
  [
      "Plankton: prey rorquals principally swallowed",
      "a3JpbGw="
  ],
  [
      "Astute waif initially avoided scrap",
      "c2hyZWQ="
  ],
  [
      "Playing area perfect for some musicians",
      "cGl0Y2g="
  ],
  [
      "Wrongdoing of troublesome brat the head expelled",
      "ZXJyb3I="
  ],
  [
      "Sensational start to lecture union leader delivered",
      "bHVyaWQ="
  ],
  [
      "Wrong end of apple cake",
      "dG9ydGU="
  ],
  [
      "Promise singular sport",
      "c3dlYXI="
  ],
  [
      "Fabric in wide opening drawer",
      "dHdpbGw="
  ],
  [
      "Suffering girl's lost hair",
      "dHJlc3M="
  ],
  [
      "Struggles to cover constant weaknesses",
      "dmljZXM="
  ],
  [
      "I count as mad",
      "aXJhdGU="
  ],
  [
      "Strip protection from team without right back",
      "dW5hcm0="
  ],
  [
      "Note monarch from the east is no lone wolf",
      "bWl4ZXI="
  ],
  [
      "Letters from Nepali centrally displaying Chinese symbol",
      "cGFuZGE="
  ],
  [
      "Company hasn't time to make suppositions",
      "Z3Vlc3M="
  ],
  [
      "African's vote — I'm surprised about it",
      "eGhvc2E="
  ],
  [
      "Poison in canned beef",
      "dG94aW4="
  ],
  [
      "Tent was initially of poor quality fabric",
      "dHdpbGw="
  ],
  [
      "Pot from southern US states",
      "ZGl4aWU="
  ],
  [
      "A small cat and a big dog",
      "YWtpdGE="
  ],
  [
      "Sebastian’s twin sister’s instrument?",
      "dmlvbGE="
  ],
  [
      "Admitted / being possessed",
      "b3duZWQ="
  ],
  [
      "Racehorse spy eating river fish",
      "dHJvdXQ="
  ],
  [
      "Steer madly for compound",
      "ZXN0ZXI="
  ],
  [
      "Season throwing out new shoot",
      "c3ByaWc="
  ],
  [
      "Loner forced to join up",
      "ZW5yb2w="
  ],
  [
      "Language used by rajah in Didwana",
      "aGluZGk="
  ],
  [
      "Piece attached to heel is hanging",
      "dGFwaXM="
  ],
  [
      "Mischief-maker’s accent not British",
      "cm9ndWU="
  ],
  [
      "Something afoot: no time for throwing a spanner in the works?",
      "c2Fib3Q="
  ],
  [
      "Patriarch backing solid husband",
      "ZW5vY2g="
  ],
  [
      "Hard punches ruptured spine",
      "dGhvcm4="
  ],
  [
      "Followed three females leaving far-off area of Home Counties",
      "YXJvc2U="
  ],
  [
      "Force isn't commonly weak",
      "ZmFpbnQ="
  ],
  [
      "Elegant ships poetically capsizing",
      "c2xlZWs="
  ],
  [
      "Short of things to do",
      "bWF5YmU="
  ],
  [
      "Praise old singer cutting disc",
      "ZXhhbHQ="
  ],
  [
      "Greek festival inspires king – it’s something in the atmosphere",
      "YXJnb24="
  ],
  [
      "Fiddle one misplaced? There it is!",
      "dm9pbGE="
  ],
  [
      "Passage south across the Atlantic",
      "c2ludXM="
  ],
  [
      "Brief verse in French mostly useless",
      "ZW52b2k="
  ],
  [
      "Spray water on a book",
      "aG9zZWE="
  ],
  [
      "Keen on including composer's last piece of music",
      "aW50cm8="
  ],
  [
      "Minister’s current vehicle parked by entrance to villa",
      "dmljYXI="
  ],
  [
      "Language once spoken in Bergen or Senja",
      "bm9yc2U="
  ],
  [
      "Person in authority that must be straight!",
      "cnVsZXI="
  ],
  [
      "Proposal to clothe artist in interwoven fabric",
      "YnJhaWQ="
  ],
  [
      "Possibly Kingsley’s wrong!",
      "YW1pc3M="
  ],
  [
      "Surly Republican in bunk …",
      "Z3J1ZmY="
  ],
  [
      "… almost cheers an Athenian lawgiver",
      "c29sb24="
  ],
  [
      "Biblical character I whine about",
      "bmFvbWk="
  ],
  [
      "Speeding boats",
      "ZmxlZXQ="
  ],
  [
      "It’s awkward to sleep in it",
      "aW5hcHQ="
  ],
  [
      "Reason fire’s not turned on",
      "aW5mZXI="
  ],
  [
      "The spirit of Jungian imagery",
      "YW5pbWE="
  ],
  [
      "Solvent or sedative everyone’s taken in party",
      "YWxkb2w="
  ],
  [
      "Hint of air and sky all see tho’ never outside",
      "aW5rbGU="
  ],
  [
      "Credit outspoken school making a stand",
      "Ymlwb2Q="
  ],
  [
      "Painter’s materials interspersed with hint of light medium",
      "a2xpbXQ="
  ],
  [
      "Surrounded by part of team on green",
      "YW1vbmc="
  ],
  [
      "Compere picked up award for gallantry?",
      "ZW1jZWU="
  ],
  [
      "Render “disjointed” maybe with it? Hardly",
      "dW5oaXA="
  ],
  [
      "Come by home with vicious dog",
      "aW5jdXI="
  ],
  [
      "Screen series for audience in hotel",
      "aHlkcm8="
  ],
  [
      "Heard Scottish island shows something very remarkable",
      "YmVhdXQ="
  ],
  [
      "Spike publicity about golf",
      "cHJvbmc="
  ],
  [
      "They may be exposed in vulgar session!",
      "YXJzZXM="
  ],
  [
      "Church abandons whim to create popular resort",
      "Y2Fwcmk="
  ],
  [
      "Material for gloves taken to court by English",
      "c3VlZGU="
  ],
  [
      "Rope-maker’s sibling briefly linked with notorious gangster",
      "c2lzYWw="
  ],
  [
      "Dainty swimming aid used by the Spanish",
      "ZWxmaW4="
  ],
  [
      "Break assistant initially employed touring the States",
      "cGF1c2U="
  ],
  [
      "Rugby club used to be pretty successful at first",
      "d2FzcHM="
  ],
  [
      "Liberal introducing novel proposition",
      "bGVtbWE="
  ],
  [
      "Hearty boatman’s beginning to steer towards the wind",
      "Ymx1ZmY="
  ],
  [
      "Spot near the centre of Jupiter’s red spot?",
      "YmluZGk="
  ],
  [
      "I won’t mix a drink in large shaker ultimately",
      "bG9uZXI="
  ],
  [
      "Description of call from dove loft heard in poem",
      "aGFpa3U="
  ],
  [
      "Swell certainly to consume gallons",
      "c3VyZ2U="
  ],
  [
      "A grain seed",
      "YWNvcm4="
  ],
  [
      "Small company with work that’s exclusive",
      "c2Nvb3A="
  ],
  [
      "New European friend’s country",
      "bmVwYWw="
  ],
  [
      "Duke drops pipe",
      "ZHJhaW4="
  ],
  [
      "One scattering seeds ultimately manages to follow the supervisor",
      "c293ZXI="
  ],
  [
      "Vision of latter half of hadj?",
      "aW1hZ2U="
  ],
  [
      "What’s taking place in First Empire times",
      "dGVtcGk="
  ],
  [
      "Trade union gets backchat in plant",
      "dHVsaXA="
  ],
  [
      "At home wearing shoddy stuff - a flaw",
      "dGFpbnQ="
  ],
  [
      "Appropriately position almost all signs centrally",
      "YWxpZ24="
  ],
  [
      "Report of examination relating to the ears",
      "YXVyYWw="
  ],
  [
      "Chap showing interest at first in bird of prey",
      "ZXJuaWU="
  ],
  [
      "Immature form of life right in centre of volcanic discharge",
      "bGFydmE="
  ],
  [
      "Is Capone able to identify a watercourse?",
      "Y2FuYWw="
  ],
  [
      "Star cast will include European stunner",
      "dGFzZXI="
  ],
  [
      "It's clear police left uniform on top",
      "bHVjaWQ="
  ],
  [
      "True masculine field of study",
      "cmVhbG0="
  ],
  [
      "Unpleasant task in branch or elsewhere",
      "Y2hvcmU="
  ],
  [
      "New house after revolution in French city",
      "bmltZXM="
  ],
  [
      "Part of fiscal policy that's often hairy",
      "c2NhbHA="
  ],
  [
      "Be quiet in public? Hardly!",
      "c2hvdXQ="
  ],
  [
      "Society to do away with expertise",
      "c2tpbGw="
  ],
  [
      "Battle about old raid",
      "Zm9yYXk="
  ],
  [
      "Unabridged opening in speech",
      "d2hvbGU="
  ],
  [
      "Article on fort robbery",
      "dGhlZnQ="
  ],
  [
      "Fellow journalists from left and right penning leader for Independent",
      "ZWRkaWU="
  ],
  [
      "Incompletely translating ancient language",
      "bGF0aW4="
  ],
  [
      "A largely penniless place of learning in the Midlands",
      "YXN0b24="
  ],
  [
      "A bit like a Quaker?",
      "cGVubnk="
  ],
  [
      "Extracted material to be brought up",
      "bWluZWQ="
  ],
  [
      "Loose dog maybe nipping the Parisian",
      "cmVsYXg="
  ],
  [
      "Smart part of America accommodating a Rechabite?",
      "bmF0dHk="
  ],
  [
      "Bear — one sits regularly for surrealist",
      "ZXJuc3Q="
  ],
  [
      "Trace local banished from China for example",
      "cmVsaWM="
  ],
  [
      "Lot's regret voiced by Terah initially",
      "c2lnaHQ="
  ],
  [
      "Flower to put back in boozer that's refused husband",
      "bG90dXM="
  ],
  [
      "Tips to help all dodging fifty per cent in tax",
      "dGl0aGU="
  ],
  [
      "Wit from the south captivates one Nobel laureate",
      "ZGlyYWM="
  ],
  [
      "Mark sending Mike into unconscious state",
      "Y29tbWE="
  ],
  [
      "Somewhat wet politicians at centre in majority",
      "bW9pc3Q="
  ],
  [
      "Trap quickly springs up — end of mouse!",
      "bm9vc2U="
  ],
  [
      "Flock seen aloft with grouse finally breaking cover",
      "c2tlaW4="
  ],
  [
      "Badminton competition's opening by end of June",
      "ZXZlbnQ="
  ],
  [
      "Chief put away person who has had one",
      "Y2hlYXQ="
  ],
  [
      "Nice night following one husky driver?",
      "aW51aXQ="
  ],
  [
      "People accepting bible’s authority",
      "bWF2ZW4="
  ],
  [
      "Six minus nine’s still a positive integer",
      "c2V2ZW4="
  ],
  [
      "Rick and Oliver",
      "dHdpc3Q="
  ],
  [
      "Show off verse written by relative",
      "dmF1bnQ="
  ],
  [
      "Daggers bishop plunged into old priest",
      "b2JlbGk="
  ],
  [
      "Press employee takes hour in identifying woody plant",
      "c2hydWI="
  ],
  [
      "Fertile spot originally on a small island",
      "b2FzaXM="
  ],
  [
      "Elderly person regularly appearing in soiled linen?",
      "b2xkaWU="
  ],
  [
      "Composer's husband entertained by tragic king",
      "bGVoYXI="
  ],
  [
      "Woman one's embraced by otherwise",
      "ZWxzaWU="
  ],
  [
      "Plant Rumpole talked of in East London?",
      "b3JyaXM="
  ],
  [
      "Drink is taken in part of church",
      "YWlzbGU="
  ],
  [
      "Strong worker’s extremely friendly",
      "YmVlZnk="
  ],
  [
      "Those at the front of May’s injured government havefinally bought power",
      "bWlnaHQ="
  ],
  [
      "Fresh chlorine put round something used at the pool",
      "Y3Jhd2w="
  ],
  [
      "Clever to cover head when this?",
      "cmFpbnk="
  ],
  [
      "One heading for snow protected by mountain is a famousNorwegian",
      "aWJzZW4="
  ],
  [
      "Note copied about a city",
      "bWlhbWk="
  ],
  [
      "Some feel embarrassed about fracas",
      "bWVsZWU="
  ],
  [
      "Irish county taking odd returnees from Sligo jail",
      "bGFvaXM="
  ],
  [
      "Copy of Times — I hesitate to say old Times",
      "eGVyb3g="
  ],
  [
      "Seriously wound up one in US resort",
      "bWlhbWk="
  ],
  [
      "Message to divulge verbally sometime",
      "dGVsZXg="
  ],
  [
      "Pitcher: you must stop second home run",
      "c2h5ZXI="
  ],
  [
      "Like an egg base for taco not binding",
      "b3ZvaWQ="
  ],
  [
      "Tax returns holding up a grant",
      "YWxsb3Q="
  ],
  [
      "It's almost time when I should retire",
      "bmlnaHQ="
  ],
  [
      "Eg Ezra’s enclosure for stray dogs",
      "cG91bmQ="
  ],
  [
      "He leaves the grain for a moment",
      "dHJpY2U="
  ],
  [
      "Greatly want firm to take on old soldier",
      "Y292ZXQ="
  ],
  [
      "Front removed from ceiling timber subsequently",
      "YWZ0ZXI="
  ],
  [
      "Mark of excellence in trial phase",
      "YWxwaGE="
  ],
  [
      "Article about professional gear for the cook?",
      "YXByb24="
  ],
  [
      "Automatic runs on winter sports event",
      "bHVnZXI="
  ],
  [
      "Old commander elected for the second time?",
      "YWdhaW4="
  ],
  [
      "Fibrous plant is invading South American lake",
      "c2lzYWw="
  ],
  [
      "Godfearing type losing time in hold-up",
      "aGVpc3Q="
  ],
  [
      "Canine tooth one has right in middle",
      "Y29yZ2k="
  ],
  [
      "Be likely to consume ultimate in hipster fashion",
      "dHJlbmQ="
  ],
  [
      "A series of confusing paths perplex",
      "YW1hemU="
  ],
  [
      "Magic / giant",
      "Z3JlYXQ="
  ],
  [
      "Extremist involved in awful tragedy",
      "dWx0cmE="
  ],
  [
      "Reported attempt by commercial gang of criminals",
      "dHJpYWQ="
  ],
  [
      "Succeeded with month — after missing the first three — avoiding drink",
      "c29iZXI="
  ],
  [
      "New Year in parrot country",
      "a2VueWE="
  ],
  [
      "Dull brownish-yellow persimmon’s hard inside",
      "a2hha2k="
  ],
  [
      "Pure gold at heart of EM Forster novel?",
      "YXVyaWM="
  ],
  [
      "Morning service has Roman Catholic in support",
      "dGVyY2U="
  ],
  [
      "Antelope displaying vigour over days",
      "ZWxhbmQ="
  ],
  [
      "Anger about loud weapon",
      "cmlmbGU="
  ],
  [
      "Not standing for mendacity",
      "bHlpbmc="
  ],
  [
      "You may hear a tidier girl",
      "YW5pdGE="
  ],
  [
      "Some wrap articles separately",
      "YXBhcnQ="
  ],
  [
      "Crowd in store by the sound of it",
      "aG9yZGU="
  ],
  [
      "BBC missing a release?",
      "dW50aWU="
  ],
  [
      "Ruling dripping with mendacity at heart",
      "ZmF0d2E="
  ],
  [
      "Final stage of publication covered by satellite",
      "aW1hZ28="
  ],
  [
      "Give and receive stick",
      "YmFuZHk="
  ],
  [
      "Base for car makers — but not for mathematician",
      "dHVyaW4="
  ],
  [
      "Stag party",
      "bWF5YmU="
  ],
  [
      "Exercise when wearing casual shirt in tent",
      "dGVwZWU="
  ],
  [
      "Plant without specification found in river",
      "dGFuc3k="
  ],
  [
      "Depressed about river in flood",
      "ZHJvd24="
  ],
  [
      "Drug user finally caught in Tube",
      "aG9yc2U="
  ],
  [
      "An ecologist denied new grant",
      "YWdyZWU="
  ],
  [
      "Boy in charge of sound",
      "c29uaWM="
  ],
  [
      "In pursuit of more at the back?",
      "YWZ0ZXI="
  ],
  [
      "Good rule for processing poor food",
      "Z3J1ZWw="
  ],
  [
      "Firm exporting small item of furniture",
      "dGFibGU="
  ],
  [
      "Send up some weak lopsided dance",
      "cG9sa2E="
  ],
  [
      "Beer left to mature - right",
      "bGFnZXI="
  ],
  [
      "Law scholar losing time in talk",
      "cmFiYmk="
  ],
  [
      "Vegetable we had planted in southeast",
      "c3dlZGU="
  ],
  [
      "Work stoppage fails to start — transport for child produced",
      "dHJpa2U="
  ],
  [
      "Contribution from trendy place?",
      "aW5wdXQ="
  ],
  [
      "Round container mate finally dropped in sea",
      "b2NlYW4="
  ],
  [
      "Arranger of festival in Cheshire town on the radio",
      "a3Jld2U="
  ],
  [
      "A British accountant’s providing graphical representations",
      "YWJhY3M="
  ],
  [
      "Cappuccino not half disgusting — so get this?",
      "Y3VwcGE="
  ],
  [
      "Old women no longer advocates of revolution",
      "dHJvdHM="
  ],
  [
      "Former bailiff concerned about first female",
      "cmVldmU="
  ],
  [
      "Star won regularly on Scottish golf course",
      "dHJvb24="
  ],
  [
      "Women's Institute radical connected to the internet?",
      "d2lyZWQ="
  ],
  [
      "Stunner modelled again",
      "bWF5YmU="
  ],
  [
      "Time to bring in new poet",
      "ZGFudGU="
  ],
  [
      "Dentists may resort to this procedure",
      "ZHJpbGw="
  ],
  [
      "Arab chap coming in round island",
      "b21hbmk="
  ],
  [
      "Support band?",
      "dHJ1c3M="
  ],
  [
      "Insincere wife’s abandoned cry for attention",
      "aG9sbG8="
  ],
  [
      "A lack of memory set back relative of 12",
      "bWFyb24="
  ],
  [
      "Measure",
      "bWF5YmU="
  ],
  [
      "Bread filled with small fried potatoes",
      "cm9zdGk="
  ],
  [
      "Stores right to break embargoes",
      "YmFybnM="
  ],
  [
      "CH2O2 processed into alcohol",
      "aG9vY2g="
  ],
  [
      "Rent holiday place on the Adriatic",
      "c3BsaXQ="
  ],
  [
      "See director general close to some gatekeeper’s house",
      "bG9kZ2U="
  ],
  [
      "Like pitch Jack’s seen near railway",
      "dGFycnk="
  ],
  [
      "Hear about tragic king meeting knight",
      "bGVhcm4="
  ],
  [
      "Comedian’s “yes” to German upset salesperson",
      "amFwZXI="
  ],
  [
      "Timid chap getting married by river",
      "bW91c2U="
  ],
  [
      "Emergency committee needs firm support",
      "Y29icmE="
  ],
  [
      "Keen to be a long time in Her Majesty's embrace?",
      "ZWFnZXI="
  ],
  [
      "Fatuous characters in Twain anecdote",
      "aW5hbmU="
  ],
  [
      "Bill turned up with ambassador to have a swim",
      "YmF0aGU="
  ],
  [
      "Book journey for one getting hitched",
      "YnJpZGU="
  ],
  [
      "Large specimen unopened",
      "YW1wbGU="
  ],
  [
      "Cancel validity of a new name initially used lawfully",
      "YW5udWw="
  ],
  [
      "Move slowly shifting blame",
      "YW1ibGU="
  ],
  [
      "Mushroom fine in the midst of evening",
      "ZW5va2k="
  ],
  [
      "Female is not in swoon",
      "ZmFpbnQ="
  ],
  [
      "Course available in religious studies",
      "cm91dGU="
  ],
  [
      "Ate in study I’d set up",
      "ZGluZWQ="
  ],
  [
      "Amusing conclusion to repeated spin",
      "ZHJvbGw="
  ],
  [
      "Books are turning up inspirational source",
      "ZXJhdG8="
  ],
  [
      "Good fellow on the beer becoming overfamiliar",
      "c3RhbGU="
  ],
  [
      "Person in surgery admitting green look",
      "ZGVjb3I="
  ],
  [
      "Small like a youngster?",
      "dGVlbnk="
  ],
  [
      "Gutless Earl's clothing as Roman peer",
      "ZXF1YWw="
  ],
  [
      "I'm off to capture unknown tree creature",
      "dGF5cmE="
  ],
  [
      "Sub's back pass with sign of uncertainty",
      "bG9jdW0="
  ],
  [
      "Maybe oral fluency? Ultimately likely to lose it",
      "dGVzdHk="
  ],
  [
      "Point in either direction?",
      "cmVmZXI="
  ],
  [
      "Sack magistrate in hearing",
      "cmVhdmU="
  ],
  [
      "Door guard after polling",
      "ZW50cnk="
  ],
  [
      "Nickel removed from salt for stock",
      "dHJpdGU="
  ],
  [
      "Pelvis operation reversed for large mammal",
      "aGlwcG8="
  ],
  [
      "Some shenanigans turned silly",
      "aW5hbmU="
  ],
  [
      "Goodness found in an oak seed",
      "YWNvcm4="
  ],
  [
      "Who goes to Balmoral after summer month? That is boring",
      "YXVnZXI="
  ],
  [
      "Male teacher has son with friend",
      "c3dhbWk="
  ],
  [
      "Meet at end of scripture exam — again",
      "cmVzaXQ="
  ],
  [
      "Hunting cry from Cockney in Scottish town",
      "YWxsb2E="
  ],
  [
      "One taking off supports around skip",
      "Y2FwZXI="
  ],
  [
      "Flaky stuff in older part as evenly selected",
      "bGVwcmE="
  ],
  [
      "Cry about reviewer’s initial description of book",
      "Ymx1cmI="
  ],
  [
      "Provide for Parisian who has broken old record",
      "ZXF1aXA="
  ],
  [
      "Cloud enveloping English female in spongy ground",
      "YmVmb2c="
  ],
  [
      "Companion welcoming secretary of a RC leader",
      "cGFwYWw="
  ],
  [
      "Dog carried back by big rocket",
      "Y29yZ2k="
  ],
  [
      "Heard of charming apartment!",
      "c3VpdGU="
  ],
  [
      "Wonderful agent takes us up",
      "c3VwZXI="
  ],
  [
      "Politician needing info about Religious Education",
      "Z3JlZW4="
  ],
  [
      "Endlessly carp? Coming round in the end",
      "ZmluaXM="
  ],
  [
      "Ecosystem merits having this wheat planted in it",
      "ZW1tZXI="
  ],
  [
      "Some island seized by Henry I",
      "aGFpdGk="
  ],
  [
      "Keen to eat old duck",
      "YXZvaWQ="
  ],
  [
      "Fungus certainly turns up after vase is removed",
      "eWVhc3Q="
  ],
  [
      "Protective garment being worn after thirty days",
      "YXByb24="
  ],
  [
      "British-Italian music man recruits others to back shows",
      "dG9zdGk="
  ],
  [
      "Scottish town to make suffer prosecutor?",
      "YmFuZmY="
  ],
  [
      "Row involving furious Pole?",
      "cmFuZ2U="
  ],
  [
      "I dislike that arch heretic’s introduction",
      "aHVtcGg="
  ],
  [
      "Was Observer’s fashion to retreat before its boss?",
      "bm90ZWQ="
  ],
  [
      "Set aside article out of book",
      "YW5udWw="
  ],
  [
      "A togetherness comes with the departure of one relation",
      "YXVudHk="
  ],
  [
      "Old magistrate about to meet woman in garden",
      "cmVldmU="
  ],
  [
      "Some problems — we argue and use bad language",
      "c3dlYXI="
  ],
  [
      "Tea in tsarina’s samovar",
      "YXNzYW0="
  ],
  [
      "Rubbish doctor initially seems so retrogressive",
      "ZHJvc3M="
  ],
  [
      "Pleasant hosting European relative",
      "bmllY2U="
  ],
  [
      "Fashionable pet hopelessly clumsy",
      "aW5lcHQ="
  ],
  [
      "A party gives cause to feel embarrassed",
      "YWJhc2g="
  ],
  [
      "Went out with old hat",
      "ZGF0ZWQ="
  ],
  [
      "Out of shape squad drinking in France",
      "dW5maXQ="
  ],
  [
      "A peacemaker cut up about vitamin shot?",
      "dm9ka2E="
  ],
  [
      "Got the odour of fish",
      "c21lbHQ="
  ],
  [
      "Excellent protest at noon",
      "ZGVtb24="
  ],
  [
      "Criminal organisation’s aim to take in footballers all round?",
      "bWFmaWE="
  ],
  [
      "Old head covering needed by daughter? Fiona’s not warm",
      "Y2F1bGQ="
  ],
  [
      "Theatre getting reproach in the auditorium",
      "b2RldW0="
  ],
  [
      "Originally on African soil it supplies refuge",
      "b2FzaXM="
  ],
  [
      "Danger of salesman returning: I left",
      "cGVyaWw="
  ],
  [
      "Wrong American gets a hole in the head",
      "c2ludXM="
  ],
  [
      "Go wandering and find accommodation across river",
      "c3RyYXk="
  ],
  [
      "Keep shaking cart",
      "d2Fnb24="
  ],
  [
      "Where you might see film star making first appearance?",
      "b25zZXQ="
  ],
  [
      "Better sort of dash back — joiner’s outside",
      "YW1lbmQ="
  ],
  [
      "Jewellery I found in Scarlett’s place",
      "dGlhcmE="
  ],
  [
      "Flop as lover after heart transplant",
      "bG9zZXI="
  ],
  [
      "Raise embezzler’s case before European court",
      "ZXJlY3Q="
  ],
  [
      "Backing rapid alternative to buses?",
      "dHJhbXM="
  ],
  [
      "Oval game unfortunately is last of the series",
      "b21lZ2E="
  ],
  [
      "Support rent getting left at the lowest level",
      "ZWFzZWw="
  ],
  [
      "Carnivore long among the last ones in South Africa",
      "aHllbmE="
  ],
  [
      "Better class of religion found in Tyrrhenian location",
      "Y2Fwcmk="
  ],
  [
      "Single mothers becoming learned theologians",
      "aW1hbXM="
  ],
  [
      "Greek island in which Corinthians curtailed amusement",
      "Y29yZnU="
  ],
  [
      "Investor for show one might be recording",
      "YW5nZWw="
  ],
  [
      "Hostilities interrupting commercial settlement",
      "YXdhcmQ="
  ],
  [
      "Ensure provision is made to do the dishes?",
      "Y2F0ZXI="
  ],
  [
      "Strangely amusing nobleman lifted line",
      "ZHJvbGw="
  ],
  [
      "Revolutionary wisdom gathered about new recruit",
      "ZW5yb2w="
  ],
  [
      "Old PM displaying intense feeling with husband",
      "aGVhdGg="
  ],
  [
      "Second volunteer army is raised for secret police",
      "c3Rhc2k="
  ],
  [
      "Thick section in garden seat",
      "ZGVuc2U="
  ],
  [
      "Moves at speed in waterworks",
      "dGVhcnM="
  ],
  [
      "Only about five crack the clues",
      "c29sdmU="
  ],
  [
      "Port one gets in casks",
      "dHVuaXM="
  ],
  [
      "Chapter in story sent up brilliant success",
      "ZWNsYXQ="
  ],
  [
      "Old man confining most of rest in open space",
      "cGxhemE="
  ],
  [
      "Seasonal visitors beginning to congregate? Very good",
      "bWFnaWM="
  ],
  [
      "Fifth journey is a load of rubbish",
      "dHJpcGU="
  ],
  [
      "Edges of Selsey beach may be described thus",
      "c2FuZHk="
  ],
  [
      "Gas power almost failed — almost",
      "YXJnb24="
  ],
  [
      "Senior academic ignoring last page in book",
      "cmVjdG8="
  ],
  [
      "A plan to get rid of electric current in upper floor",
      "YXR0aWM="
  ],
  [
      "Introduction of hike in rent is an irritation",
      "dGhvcm4="
  ],
  [
      "Brilliant getting rid of British Conservatives?",
      "cmlnaHQ="
  ],
  [
      "Former partner not entirely mentioned for praise",
      "ZXh0b2w="
  ],
  [
      "Gold bar obtained after mint is stripped of million tons",
      "aW5nb3Q="
  ],
  [
      "Boy wizard would have power over this aquatic creature",
      "b3R0ZXI="
  ],
  [
      "Daring Bishop facing rant",
      "YnJhdmU="
  ],
  [
      "Month ending with out-of-this world group performing",
      "b2N0ZXQ="
  ],
  [
      "Walk around bottom of village for serenity",
      "cGVhY2U="
  ],
  [
      "A bishop not entirely sharp? These assist with calculations",
      "YWJhY2k="
  ],
  [
      "Damp fog — nothing visible in that",
      "bW9pc3Q="
  ],
  [
      "Digest litre — gross!",
      "bGVhcm4="
  ],
  [
      "Musical composer left note inside organ",
      "ZWxnYXI="
  ],
  [
      "Half suck garish sweet substance",
      "c3VnYXI="
  ],
  [
      "Reportedly track and creep up on wading bird",
      "c3Rvcms="
  ],
  [
      "Dog beginning to bark at high fence",
      "Ym94ZXI="
  ],
  [
      "Plant soundly identified by groups of sheep or birds",
      "cGhsb3g="
  ],
  [
      "Discharge right hand man originally supporting group of nations",
      "cmhldW0="
  ],
  [
      "Hunter of stars to take part in oratorio nonsense",
      "b3Jpb24="
  ],
  [
      "Queen featured in silly sketch",
      "ZHJhZnQ="
  ],
  [
      "A professional needs new protective garment",
      "YXByb24="
  ],
  [
      "Proposal made for unusually wrapping iron",
      "b2ZmZXI="
  ],
  [
      "Took action against English leather company’s product",
      "c3VlZGU="
  ],
  [
      "Instrument in small room close to piano",
      "Y2VsbG8="
  ],
  [
      "Embargo absorbing English leader of overseas party",
      "YmVhbm8="
  ],
  [
      "Dud shade",
      "bGVtb24="
  ],
  [
      "Carnivore heading for lair put on speed",
      "cmF0ZWw="
  ],
  [
      "Oddly for each thousand you get a mutant",
      "ZnJlYWs="
  ],
  [
      "Small portion of broccoli causing complaint",
      "Y29saWM="
  ],
  [
      "Joint from an ungulate served up",
      "YW5rbGU="
  ],
  [
      "Brownish-yellow section of brooch revealed",
      "b2NocmU="
  ],
  [
      "A golfer may register this bird of prey",
      "ZWFnbGU="
  ],
  [
      "Greek character old and huge",
      "b21lZ2E="
  ],
  [
      "Head of regiment drills joint force",
      "ZHJpdmU="
  ],
  [
      "Root around this counter",
      "cmVidXQ="
  ],
  [
      "Bill that is originally unpaid for so long",
      "YWRpZXU="
  ],
  [
      "R&A plot to overturn ban",
      "ZGViYXI="
  ],
  [
      "Back in Normandy: a Hungarian composer",
      "aGF5ZG4="
  ],
  [
      "Logo for channel that is reversing its polarity?",
      "aWRlbnQ="
  ],
  [
      "Dropped off note and final letter",
      "ZG96ZWQ="
  ],
  [
      "Government department do: couple in the end have left",
      "ZGVmcmE="
  ],
  [
      "Slip catching four in turn after wicket’s fallen",
      "c2xpdmU="
  ],
  [
      "Month’s work for small amount of money",
      "bW9wdXM="
  ],
  [
      "Shift about on barbs circulating",
      "Y2ltYXI="
  ],
  [
      "Secure employment tails off — a hard pill to swallow",
      "Ym9sdXM="
  ],
  [
      "Gossip helping to include a change of direction",
      "cHJhdGU="
  ],
  [
      "Former Chairman taking cases in gambling Mecca",
      "bWFjYW8="
  ],
  [
      "A suggestion can get detailed",
      "dGluZ2U="
  ],
  [
      "We must cross a street for litter",
      "d2FzdGU="
  ],
  [
      "Vegan eats this up to make vegetarian angry",
      "aXJhdGU="
  ],
  [
      "Collect is a church form of worship",
      "YW1hc3M="
  ],
  [
      "Stop running market booth",
      "c3RhbGw="
  ],
  [
      "Hotel in Med resort designed for specific market",
      "bmljaGU="
  ],
  [
      "Irish oddly acquit Arab",
      "aXJhcWk="
  ],
  [
      "Jack doesn't start to shake milk container",
      "dWRkZXI="
  ],
  [
      "Old coin originally accepted in tube",
      "ZHVjYXQ="
  ],
  [
      "Section of program is simply wrong",
      "YW1pc3M="
  ],
  [
      "Labour leader takes direction — the bare minimum!",
      "bGVhc3Q="
  ],
  [
      "Fish one consumed as main ingredient",
      "YmFzaXM="
  ],
  [
      "Surgical procedure overcoming twitching of the eye",
      "b3B0aWM="
  ],
  [
      "Instinctive feelings exist between woman and son",
      "dmliZXM="
  ],
  [
      "Subject that’s closed",
      "c3RpbGw="
  ],
  [
      "Fought to be heard with a gong",
      "YXdhcmQ="
  ],
  [
      "Veil’s collar containing a measure of brightness",
      "bmlxYWI="
  ],
  [
      "Boy dispatching daughter in place of Clare",
      "ZW5uaXM="
  ],
  [
      "Inclined to be having relations round last of all",
      "YXRpbHQ="
  ],
  [
      "Dead weight",
      "cGx1bWI="
  ],
  [
      "Cattle displaying little imagination?",
      "c3RvY2s="
  ],
  [
      "Influence seeing dismissal of foremost performer",
      "YWN0b3I="
  ],
  [
      "Forced peace-lover to accept war ultimately",
      "ZHJvdmU="
  ],
  [
      "Religious minister not coming in earlier",
      "cGlvdXM="
  ],
  [
      "See dog without lead jump",
      "b2xsaWU="
  ],
  [
      "Beat poet?",
      "cG91bmQ="
  ],
  [
      "N Dakota city: a long way to travel",
      "ZmFyZ28="
  ],
  [
      "Imposing spell of tyranny after cutbacks",
      "bG9mdHk="
  ],
  [
      "Auntie half-heartedly backed naval officer making music",
      "YmVib3A="
  ],
  [
      "Step from carriage on way through town",
      "c3RhaXI="
  ],
  [
      "Purchaser’s place to keep stock of audition",
      "YnV5ZXI="
  ],
  [
      "Almost the perfect place for a fling",
      "aGVhdmU="
  ],
  [
      "Potentially miss appeal appearing in paper",
      "c3VzYW4="
  ],
  [
      "Group getting cold in tub",
      "YmF0Y2g="
  ],
  [
      "Awkward getting some sleep in it",
      "aW5hcHQ="
  ],
  [
      "Fold petal another way",
      "cGxlYXQ="
  ],
  [
      "One article about another clan chief",
      "dGhhbmU="
  ],
  [
      "Talk about king's plan",
      "Y2hhcnQ="
  ],
  [
      "One struck perhaps in game",
      "bWF0Y2g="
  ],
  [
      "A coastal feature sited inappropriately",
      "dGlkZXM="
  ],
  [
      "Hour of prayer in winter ceremony",
      "dGVyY2U="
  ],
  [
      "Bits of foreign money are collected by little members",
      "dG9lYXM="
  ],
  [
      "Pear mum cut the wrong way",
      "bmVsaXM="
  ],
  [
      "A Conservative nut seen in retrospect as a mug",
      "Ym9jY2E="
  ],
  [
      "Tree people chucked with Noel finally gone",
      "b3BlcGU="
  ],
  [
      "Bit of old armour fashioned to protect artist",
      "Y3VyYXQ="
  ],
  [
      "Finished on time and open to view",
      "b3ZlcnQ="
  ],
  [
      "First Oscar is too much for opera singer",
      "dG9zY2E="
  ],
  [
      "Shy artisan spending every second in the country",
      "c3lyaWE="
  ],
  [
      "Traveller books place somewhere new to put down roots",
      "cmVwb3Q="
  ],
  [
      "Low section of arena — dirt-cheap",
      "bmFkaXI="
  ],
  [
      "Sign we’ve lost track of reference collection",
      "bGlicmE="
  ],
  [
      "Sweet child with its foot in Rhine on vacation",
      "dG9ydGU="
  ],
  [
      "Cost of penny cereal",
      "cHJpY2U="
  ],
  [
      "Indian lute is brought back by sailor",
      "c2l0YXI="
  ],
  [
      "Some treasure trove appearing from the past",
      "cmV0cm8="
  ],
  [
      "Scrap put right in outhouse",
      "c2hyZWQ="
  ],
  [
      "Diving apparatus son got on Caribbean island",
      "c2N1YmE="
  ],
  [
      "Expression of surprise over soldier’s dog",
      "Y29yZ2k="
  ],
  [
      "Difficult — as peak may be?",
      "cm9ja3k="
  ],
  [
      "Field throw",
      "cGl0Y2g="
  ],
  [
      "Green returned clutching a message",
      "ZW1haWw="
  ],
  [
      "On which one might experience turbulence that's smoother",
      "cGxhbmU="
  ],
  [
      "Asian leaders of institution really are quite indecisive",
      "aXJhcWk="
  ],
  [
      "Mysterious force surrounding its place",
      "cnVuaWM="
  ],
  [
      "Practice somewhat beneath him at first",
      "aGFiaXQ="
  ],
  [
      "Pancakes — bat doesn't finish one",
      "Ymxpbmk="
  ],
  [
      "Stand up outside a cairn",
      "cmFpc2U="
  ],
  [
      "Female energy with which Indian widow ensnares king",
      "c2FrdGk="
  ],
  [
      "Women seen in foreign city station once",
      "cm93bWU="
  ],
  [
      "Wild tree hiding a plant",
      "cmVhdGU="
  ],
  [
      "Rascally old soldiers upset fellow",
      "cm9ndXk="
  ],
  [
      "Little Sarah working in hairdressers",
      "c2Fsb24="
  ],
  [
      "Scholar to talk endlessly",
      "cmFiYmk="
  ],
  [
      "Rice recipe: unlimited Apulian cooking",
      "cGlsYXU="
  ],
  [
      "Firm losing small data chart",
      "dGFibGU="
  ],
  [
      "Hate old allegations coming back to bite one",
      "b2RpdW0="
  ],
  [
      "Dictator’s vulgar tweet",
      "Y2hlZXA="
  ],
  [
      "Dramatist whiNES BIography is holding him up",
      "aWJzZW4="
  ],
  [
      "Chinese switch positions in capital",
      "aGFub2k="
  ],
  [
      "Having got bigger reaction to bad joke perhaps when broadcast",
      "Z3Jvd24="
  ],
  [
      "Neglect to send out Times: they haven’t taken orders",
      "bGFpdHk="
  ],
  [
      "I hear you pulled up some more gorse",
      "cm9nZXI="
  ],
  [
      "Fish with large abnormal growth thrown back",
      "dHJhd2w="
  ],
  [
      "Bird from banks of Amazon to keep passing through",
      "YXZpYW4="
  ],
  [
      "Swamp Commons with Liberal intake",
      "Zmxvb2Q="
  ],
  [
      "Clubs finished top",
      "Y292ZXI="
  ],
  [
      "Prime letters for clueing a single Italian",
      "bHVpZ2k="
  ],
  [
      "Important vitamin fed to young animal",
      "Zm9jYWw="
  ],
  [
      "John with odd bits of foam sponge",
      "bG9vZmE="
  ],
  [
      "Artist's champ",
      "bXVuY2g="
  ],
  [
      "Mark's first wife overlooked by brother",
      "YnJldmU="
  ],
  [
      "Anxiety relating to certain countries that's not his",
      "cGFuaWM="
  ],
  [
      "State bore recalled stopping Nixon regularly",
      "aWRhaG8="
  ],
  [
      "Malicious team going around noon",
      "c25pZGU="
  ],
  [
      "Surprise leading group",
      "dXBzZXQ="
  ],
  [
      "Wander north into red mist?",
      "cmFuZ2U="
  ],
  [
      "Specific done deed?",
      "ZXhhY3Q="
  ],
  [
      "Bird flying",
      "c3dpZnQ="
  ],
  [
      "Hindu deity sees five parting Muslims",
      "c2hpdmE="
  ],
  [
      "Line of text shoots up",
      "c2VyaWY="
  ],
  [
      "Giant scratching head — very dense?",
      "b3NtaWM="
  ],
  [
      "Emperor backs a follower of another one",
      "cmFzdGE="
  ],
  [
      "Reserves place for supplier of ham that's appetising",
      "dGFzdHk="
  ],
  [
      "Stockpile a lot of documents head of army sent in",
      "YW1hc3M="
  ],
  [
      "One who regrets imprisoning Liberal head of state?",
      "cnVsZXI="
  ],
  [
      "City where lives must go on as normal",
      "cGFyaXM="
  ],
  [
      "Narrow margin’s inches",
      "bm9zZXM="
  ],
  [
      "Request team playing hands to one side",
      "YXNrZXc="
  ],
  [
      "Summarise extraordinary race on page",
      "cmVjYXA="
  ],
  [
      "Ruthlessly overcome infatuation",
      "Y3J1c2g="
  ],
  [
      "Super increase",
      "c3dlbGw="
  ],
  [
      "Author starts to defend antagonist",
      "ZGVmb2U="
  ],
  [
      "Stocking filler — it’s all right",
      "bGVnaXQ="
  ],
  [
      "American waiter not old hat",
      "YnVzYnk="
  ],
  [
      "Long to follow hip pop group?",
      "aW5kaWU="
  ],
  [
      "Athenian character's black mark for wasting time",
      "c2lnbWE="
  ],
  [
      "Woman needing a good comfy home for the most part",
      "YWduZXM="
  ],
  [
      "A girl suffering setback needs the ultimate in moral fibre",
      "c2lzYWw="
  ],
  [
      "Charge for trip",
      "c2FsbHk="
  ],
  [
      "Kind of skirt oddly twee around posterior",
      "dGFzc2U="
  ]
].map((x => ([x[0], atob(x[1])])));

const dictionary = [
  "aahed",
  "aalii",
  "aargh",
  "aarti",
  "abaca",
  "abaci",
  "abacs",
  "abaft",
  "abaka",
  "abamp",
  "aband",
  "abash",
  "abask",
  "abaya",
  "abbas",
  "abbed",
  "abbes",
  "abcee",
  "abeam",
  "abear",
  "abele",
  "abers",
  "abets",
  "abies",
  "abler",
  "ables",
  "ablet",
  "ablow",
  "abmho",
  "abohm",
  "aboil",
  "aboma",
  "aboon",
  "abord",
  "abore",
  "abram",
  "abray",
  "abrim",
  "abrin",
  "abris",
  "absey",
  "absit",
  "abuna",
  "abune",
  "abuts",
  "abuzz",
  "abyes",
  "abysm",
  "acais",
  "acari",
  "accas",
  "accoy",
  "acerb",
  "acers",
  "aceta",
  "achar",
  "ached",
  "aches",
  "achoo",
  "acids",
  "acidy",
  "acing",
  "acini",
  "ackee",
  "acker",
  "acmes",
  "acmic",
  "acned",
  "acnes",
  "acock",
  "acold",
  "acred",
  "acres",
  "acros",
  "acted",
  "actin",
  "acton",
  "acyls",
  "adaws",
  "adays",
  "adbot",
  "addax",
  "added",
  "adder",
  "addio",
  "addle",
  "adeem",
  "adhan",
  "adieu",
  "adios",
  "adits",
  "adman",
  "admen",
  "admix",
  "adobo",
  "adown",
  "adoze",
  "adrad",
  "adred",
  "adsum",
  "aduki",
  "adunc",
  "adust",
  "advew",
  "adyta",
  "adzed",
  "adzes",
  "aecia",
  "aedes",
  "aegis",
  "aeons",
  "aerie",
  "aeros",
  "aesir",
  "afald",
  "afara",
  "afars",
  "afear",
  "aflaj",
  "afore",
  "afrit",
  "afros",
  "agama",
  "agami",
  "agars",
  "agast",
  "agave",
  "agaze",
  "agene",
  "agers",
  "agger",
  "aggie",
  "aggri",
  "aggro",
  "aggry",
  "aghas",
  "agila",
  "agios",
  "agism",
  "agist",
  "agita",
  "aglee",
  "aglet",
  "agley",
  "agloo",
  "aglus",
  "agmas",
  "agoge",
  "agone",
  "agons",
  "agood",
  "agria",
  "agrin",
  "agros",
  "agued",
  "agues",
  "aguna",
  "aguti",
  "aheap",
  "ahent",
  "ahigh",
  "ahind",
  "ahing",
  "ahint",
  "ahold",
  "ahull",
  "ahuru",
  "aidas",
  "aided",
  "aides",
  "aidoi",
  "aidos",
  "aiery",
  "aigas",
  "aight",
  "ailed",
  "aimed",
  "aimer",
  "ainee",
  "ainga",
  "aioli",
  "aired",
  "airer",
  "airns",
  "airth",
  "airts",
  "aitch",
  "aitus",
  "aiver",
  "aiyee",
  "aizle",
  "ajies",
  "ajiva",
  "ajuga",
  "ajwan",
  "akees",
  "akela",
  "akene",
  "aking",
  "akita",
  "akkas",
  "alaap",
  "alack",
  "alamo",
  "aland",
  "alane",
  "alang",
  "alans",
  "alant",
  "alapa",
  "alaps",
  "alary",
  "alate",
  "alays",
  "albas",
  "albee",
  "alcid",
  "alcos",
  "aldea",
  "alder",
  "aldol",
  "aleck",
  "alecs",
  "alefs",
  "aleft",
  "aleph",
  "alews",
  "aleye",
  "alfas",
  "algal",
  "algas",
  "algid",
  "algin",
  "algor",
  "algum",
  "alias",
  "alifs",
  "aline",
  "alist",
  "aliya",
  "alkie",
  "alkos",
  "alkyd",
  "alkyl",
  "allee",
  "allel",
  "allis",
  "allod",
  "allyl",
  "almah",
  "almas",
  "almeh",
  "almes",
  "almud",
  "almug",
  "alods",
  "aloed",
  "aloes",
  "aloha",
  "aloin",
  "aloos",
  "alowe",
  "altho",
  "altos",
  "alula",
  "alums",
  "alure",
  "alvar",
  "alway",
  "amahs",
  "amain",
  "amate",
  "amaut",
  "amban",
  "ambit",
  "ambos",
  "ambry",
  "ameba",
  "ameer",
  "amene",
  "amens",
  "ament",
  "amias",
  "amice",
  "amici",
  "amide",
  "amido",
  "amids",
  "amies",
  "amiga",
  "amigo",
  "amine",
  "amino",
  "amins",
  "amirs",
  "amlas",
  "amman",
  "ammon",
  "ammos",
  "amnia",
  "amnic",
  "amnio",
  "amoks",
  "amole",
  "amort",
  "amour",
  "amove",
  "amowt",
  "amped",
  "ampul",
  "amrit",
  "amuck",
  "amyls",
  "anana",
  "anata",
  "ancho",
  "ancle",
  "ancon",
  "andro",
  "anear",
  "anele",
  "anent",
  "angas",
  "anglo",
  "anigh",
  "anile",
  "anils",
  "anima",
  "animi",
  "anion",
  "anise",
  "anker",
  "ankhs",
  "ankus",
  "anlas",
  "annal",
  "annas",
  "annat",
  "anoas",
  "anole",
  "anomy",
  "ansae",
  "antae",
  "antar",
  "antas",
  "anted",
  "antes",
  "antis",
  "antra",
  "antre",
  "antsy",
  "anura",
  "anyon",
  "apace",
  "apage",
  "apaid",
  "apayd",
  "apays",
  "apeak",
  "apeek",
  "apers",
  "apert",
  "apery",
  "apgar",
  "aphis",
  "apian",
  "apiol",
  "apish",
  "apism",
  "apode",
  "apods",
  "apoop",
  "aport",
  "appal",
  "appay",
  "appel",
  "appro",
  "appui",
  "appuy",
  "apres",
  "apses",
  "apsis",
  "apsos",
  "apted",
  "apter",
  "aquae",
  "aquas",
  "araba",
  "araks",
  "arame",
  "arars",
  "arbas",
  "arced",
  "archi",
  "arcos",
  "arcus",
  "ardeb",
  "ardri",
  "aread",
  "areae",
  "areal",
  "arear",
  "areas",
  "areca",
  "aredd",
  "arede",
  "arefy",
  "areic",
  "arene",
  "arepa",
  "arere",
  "arete",
  "arets",
  "arett",
  "argal",
  "argan",
  "argil",
  "argle",
  "argol",
  "argon",
  "argot",
  "argus",
  "arhat",
  "arias",
  "ariel",
  "ariki",
  "arils",
  "ariot",
  "arish",
  "arked",
  "arled",
  "arles",
  "armed",
  "armer",
  "armet",
  "armil",
  "arnas",
  "arnut",
  "aroba",
  "aroha",
  "aroid",
  "arpas",
  "arpen",
  "arrah",
  "arras",
  "arret",
  "arris",
  "arroz",
  "arsed",
  "arses",
  "arsey",
  "arsis",
  "artal",
  "artel",
  "artic",
  "artis",
  "aruhe",
  "arums",
  "arval",
  "arvee",
  "arvos",
  "aryls",
  "asana",
  "ascon",
  "ascus",
  "asdic",
  "ashed",
  "ashes",
  "ashet",
  "asked",
  "asker",
  "askoi",
  "askos",
  "aspen",
  "asper",
  "aspic",
  "aspie",
  "aspis",
  "aspro",
  "assai",
  "assam",
  "asses",
  "assez",
  "assot",
  "aster",
  "astir",
  "astun",
  "asura",
  "asway",
  "aswim",
  "asyla",
  "ataps",
  "ataxy",
  "atigi",
  "atilt",
  "atimy",
  "atlas",
  "atman",
  "atmas",
  "atmos",
  "atocs",
  "atoke",
  "atoks",
  "atoms",
  "atomy",
  "atony",
  "atopy",
  "atria",
  "atrip",
  "attap",
  "attar",
  "atuas",
  "audad",
  "auger",
  "aught",
  "aulas",
  "aulic",
  "auloi",
  "aulos",
  "aumil",
  "aunes",
  "aunts",
  "aurae",
  "aural",
  "aurar",
  "auras",
  "aurei",
  "aures",
  "auric",
  "auris",
  "aurum",
  "autos",
  "auxin",
  "avale",
  "avant",
  "avast",
  "avels",
  "avens",
  "avers",
  "avgas",
  "avine",
  "avion",
  "avise",
  "aviso",
  "avize",
  "avows",
  "avyze",
  "awarn",
  "awato",
  "awave",
  "aways",
  "awdls",
  "aweel",
  "aweto",
  "awing",
  "awmry",
  "awned",
  "awner",
  "awols",
  "awork",
  "axels",
  "axile",
  "axils",
  "axing",
  "axite",
  "axled",
  "axles",
  "axman",
  "axmen",
  "axoid",
  "axone",
  "axons",
  "ayahs",
  "ayaya",
  "ayelp",
  "aygre",
  "ayins",
  "ayont",
  "ayres",
  "ayrie",
  "azans",
  "azide",
  "azido",
  "azine",
  "azlon",
  "azoic",
  "azole",
  "azons",
  "azote",
  "azoth",
  "azuki",
  "azurn",
  "azury",
  "azygy",
  "azyme",
  "azyms",
  "baaed",
  "baals",
  "babas",
  "babel",
  "babes",
  "babka",
  "baboo",
  "babul",
  "babus",
  "bacca",
  "bacco",
  "baccy",
  "bacha",
  "bachs",
  "backs",
  "baddy",
  "baels",
  "baffs",
  "baffy",
  "bafts",
  "baghs",
  "bagie",
  "bahts",
  "bahus",
  "bahut",
  "bails",
  "bairn",
  "baisa",
  "baith",
  "baits",
  "baiza",
  "baize",
  "bajan",
  "bajra",
  "bajri",
  "bajus",
  "baked",
  "baken",
  "bakes",
  "bakra",
  "balas",
  "balds",
  "baldy",
  "baled",
  "bales",
  "balks",
  "balky",
  "balls",
  "bally",
  "balms",
  "baloo",
  "balsa",
  "balti",
  "balun",
  "balus",
  "bambi",
  "banak",
  "banco",
  "bancs",
  "banda",
  "bandh",
  "bands",
  "bandy",
  "baned",
  "banes",
  "bangs",
  "bania",
  "banks",
  "banns",
  "bants",
  "bantu",
  "banty",
  "banya",
  "bapus",
  "barbe",
  "barbs",
  "barby",
  "barca",
  "barde",
  "bardo",
  "bards",
  "bardy",
  "bared",
  "barer",
  "bares",
  "barfi",
  "barfs",
  "baric",
  "barks",
  "barky",
  "barms",
  "barmy",
  "barns",
  "barny",
  "barps",
  "barra",
  "barre",
  "barro",
  "barry",
  "barye",
  "basan",
  "based",
  "basen",
  "baser",
  "bases",
  "basho",
  "basij",
  "basks",
  "bason",
  "basse",
  "bassi",
  "basso",
  "bassy",
  "basta",
  "basti",
  "basto",
  "basts",
  "bated",
  "bates",
  "baths",
  "batik",
  "batta",
  "batts",
  "battu",
  "bauds",
  "bauks",
  "baulk",
  "baurs",
  "bavin",
  "bawds",
  "bawks",
  "bawls",
  "bawns",
  "bawrs",
  "bawty",
  "bayed",
  "bayer",
  "bayes",
  "bayle",
  "bayts",
  "bazar",
  "bazoo",
  "beads",
  "beaks",
  "beaky",
  "beals",
  "beams",
  "beamy",
  "beano",
  "beans",
  "beany",
  "beare",
  "bears",
  "beath",
  "beats",
  "beaty",
  "beaus",
  "beaut",
  "beaux",
  "bebop",
  "becap",
  "becke",
  "becks",
  "bedad",
  "bedel",
  "bedes",
  "bedew",
  "bedim",
  "bedye",
  "beedi",
  "beefs",
  "beeps",
  "beers",
  "beery",
  "beets",
  "befog",
  "begad",
  "begar",
  "begem",
  "begot",
  "begum",
  "beige",
  "beigy",
  "beins",
  "bekah",
  "belah",
  "belar",
  "belay",
  "belee",
  "belga",
  "bells",
  "belon",
  "belts",
  "bemad",
  "bemas",
  "bemix",
  "bemud",
  "bends",
  "bendy",
  "benes",
  "benet",
  "benga",
  "benis",
  "benne",
  "benni",
  "benny",
  "bento",
  "bents",
  "benty",
  "bepat",
  "beray",
  "beres",
  "bergs",
  "berko",
  "berks",
  "berme",
  "berms",
  "berob",
  "beryl",
  "besat",
  "besaw",
  "besee",
  "beses",
  "besit",
  "besom",
  "besot",
  "besti",
  "bests",
  "betas",
  "beted",
  "betes",
  "beths",
  "betid",
  "beton",
  "betta",
  "betty",
  "bever",
  "bevor",
  "bevue",
  "bevvy",
  "bewet",
  "bewig",
  "bezes",
  "bezil",
  "bezzy",
  "bhais",
  "bhaji",
  "bhang",
  "bhats",
  "bhels",
  "bhoot",
  "bhuna",
  "bhuts",
  "biach",
  "biali",
  "bialy",
  "bibbs",
  "bibes",
  "biccy",
  "bices",
  "bided",
  "bider",
  "bides",
  "bidet",
  "bidis",
  "bidon",
  "bield",
  "biers",
  "biffo",
  "biffs",
  "biffy",
  "bifid",
  "bigae",
  "biggs",
  "biggy",
  "bigha",
  "bight",
  "bigly",
  "bigos",
  "bijou",
  "biked",
  "biker",
  "bikes",
  "bikie",
  "bilbo",
  "bilby",
  "biled",
  "biles",
  "bilgy",
  "bilks",
  "bills",
  "bimah",
  "bimas",
  "bimbo",
  "binal",
  "bindi",
  "binds",
  "biner",
  "bines",
  "bings",
  "bingy",
  "binit",
  "binks",
  "bints",
  "biogs",
  "biont",
  "biota",
  "biped",
  "bipod",
  "birds",
  "birks",
  "birle",
  "birls",
  "biros",
  "birrs",
  "birse",
  "birsy",
  "bises",
  "bisks",
  "bisom",
  "bitch",
  "biter",
  "bites",
  "bitos",
  "bitou",
  "bitsy",
  "bitte",
  "bitts",
  "bivia",
  "bivvy",
  "bizes",
  "bizzo",
  "bizzy",
  "blabs",
  "blads",
  "blady",
  "blaer",
  "blaes",
  "blaff",
  "blags",
  "blahs",
  "blain",
  "blams",
  "blart",
  "blase",
  "blash",
  "blate",
  "blats",
  "blatt",
  "blaud",
  "blawn",
  "blaws",
  "blays",
  "blear",
  "blebs",
  "blech",
  "blees",
  "blent",
  "blert",
  "blest",
  "blets",
  "bleys",
  "blimy",
  "bling",
  "blini",
  "blins",
  "bliny",
  "blips",
  "blist",
  "blite",
  "blits",
  "blive",
  "blobs",
  "blocs",
  "blogs",
  "blook",
  "bloop",
  "blore",
  "blots",
  "blows",
  "blowy",
  "blubs",
  "blude",
  "bluds",
  "bludy",
  "blued",
  "blues",
  "bluet",
  "bluey",
  "bluid",
  "blume",
  "blunk",
  "blurs",
  "blype",
  "boabs",
  "boaks",
  "boars",
  "boart",
  "boats",
  "bobac",
  "bobak",
  "bobas",
  "bobol",
  "bobos",
  "bocca",
  "bocce",
  "bocci",
  "boche",
  "bocks",
  "boded",
  "bodes",
  "bodge",
  "bodhi",
  "bodle",
  "boeps",
  "boets",
  "boeuf",
  "boffo",
  "boffs",
  "bogan",
  "bogey",
  "boggy",
  "bogie",
  "bogle",
  "bogue",
  "bogus",
  "bohea",
  "bohos",
  "boils",
  "boing",
  "boink",
  "boite",
  "boked",
  "bokeh",
  "bokes",
  "bokos",
  "bolar",
  "bolas",
  "bolds",
  "boles",
  "bolix",
  "bolls",
  "bolos",
  "bolts",
  "bolus",
  "bomas",
  "bombe",
  "bombo",
  "bombs",
  "bonce",
  "bonds",
  "boned",
  "boner",
  "bones",
  "bongs",
  "bonie",
  "bonks",
  "bonne",
  "bonny",
  "bonza",
  "bonze",
  "booai",
  "booay",
  "boobs",
  "boody",
  "booed",
  "boofy",
  "boogy",
  "boohs",
  "books",
  "booky",
  "bools",
  "booms",
  "boomy",
  "boong",
  "boons",
  "boord",
  "boors",
  "boose",
  "boots",
  "boppy",
  "borak",
  "boral",
  "boras",
  "borde",
  "bords",
  "bored",
  "boree",
  "borel",
  "borer",
  "bores",
  "borgo",
  "boric",
  "borks",
  "borms",
  "borna",
  "boron",
  "borts",
  "borty",
  "bortz",
  "bosie",
  "bosks",
  "bosky",
  "boson",
  "bosun",
  "botas",
  "botel",
  "botes",
  "bothy",
  "botte",
  "botts",
  "botty",
  "bouge",
  "bouks",
  "boult",
  "bouns",
  "bourd",
  "bourg",
  "bourn",
  "bouse",
  "bousy",
  "bouts",
  "bovid",
  "bowat",
  "bowed",
  "bower",
  "bowes",
  "bowet",
  "bowie",
  "bowls",
  "bowne",
  "bowrs",
  "bowse",
  "boxed",
  "boxen",
  "boxes",
  "boxla",
  "boxty",
  "boyar",
  "boyau",
  "boyed",
  "boyfs",
  "boygs",
  "boyla",
  "boyos",
  "boysy",
  "bozos",
  "braai",
  "brach",
  "brack",
  "bract",
  "brads",
  "braes",
  "brags",
  "brail",
  "braks",
  "braky",
  "brame",
  "brane",
  "brank",
  "brans",
  "brant",
  "brast",
  "brats",
  "brava",
  "bravi",
  "braws",
  "braxy",
  "brays",
  "braza",
  "braze",
  "bream",
  "brede",
  "breds",
  "breem",
  "breer",
  "brees",
  "breid",
  "breis",
  "breme",
  "brens",
  "brent",
  "brere",
  "brers",
  "breve",
  "brews",
  "breys",
  "brier",
  "bries",
  "brigs",
  "briki",
  "briks",
  "brill",
  "brims",
  "brins",
  "brios",
  "brise",
  "briss",
  "brith",
  "brits",
  "britt",
  "brize",
  "broch",
  "brock",
  "brods",
  "brogh",
  "brogs",
  "brome",
  "bromo",
  "bronc",
  "brond",
  "brool",
  "broos",
  "brose",
  "brosy",
  "brows",
  "brugh",
  "bruin",
  "bruit",
  "brule",
  "brume",
  "brung",
  "brusk",
  "brust",
  "bruts",
  "buats",
  "buaze",
  "bubal",
  "bubas",
  "bubba",
  "bubbe",
  "bubby",
  "bubus",
  "buchu",
  "bucko",
  "bucks",
  "bucku",
  "budas",
  "budis",
  "budos",
  "buffa",
  "buffe",
  "buffi",
  "buffo",
  "buffs",
  "buffy",
  "bufos",
  "bufty",
  "buhls",
  "buhrs",
  "buiks",
  "buist",
  "bukes",
  "bulbs",
  "bulgy",
  "bulks",
  "bulla",
  "bulls",
  "bulse",
  "bumbo",
  "bumfs",
  "bumph",
  "bumps",
  "bumpy",
  "bunas",
  "bunce",
  "bunco",
  "bunde",
  "bundh",
  "bunds",
  "bundt",
  "bundu",
  "bundy",
  "bungs",
  "bungy",
  "bunia",
  "bunje",
  "bunjy",
  "bunko",
  "bunks",
  "bunns",
  "bunts",
  "bunty",
  "bunya",
  "buoys",
  "buppy",
  "buran",
  "buras",
  "burbs",
  "burds",
  "buret",
  "burfi",
  "burgh",
  "burgs",
  "burin",
  "burka",
  "burke",
  "burks",
  "burls",
  "burns",
  "buroo",
  "burps",
  "burqa",
  "burro",
  "burrs",
  "burry",
  "bursa",
  "burse",
  "busby",
  "buses",
  "busks",
  "busky",
  "bussu",
  "busti",
  "busts",
  "busty",
  "buteo",
  "butes",
  "butle",
  "butoh",
  "butts",
  "butty",
  "butut",
  "butyl",
  "buzzy",
  "bwana",
  "bwazi",
  "byded",
  "bydes",
  "byked",
  "bykes",
  "byres",
  "byrls",
  "byssi",
  "bytes",
  "byway",
  "caaed",
  "cabas",
  "caber",
  "cabob",
  "caboc",
  "cabre",
  "cacas",
  "cacks",
  "cacky",
  "cadee",
  "cades",
  "cadge",
  "cadgy",
  "cadie",
  "cadis",
  "cadre",
  "caeca",
  "caese",
  "cafes",
  "caffs",
  "caged",
  "cager",
  "cages",
  "cagot",
  "cahow",
  "caids",
  "cains",
  "caird",
  "cajon",
  "cajun",
  "caked",
  "cakes",
  "cakey",
  "calfs",
  "calid",
  "calif",
  "calix",
  "calks",
  "calla",
  "calls",
  "calms",
  "calmy",
  "calos",
  "calpa",
  "calps",
  "calve",
  "calyx",
  "caman",
  "camas",
  "cames",
  "camis",
  "camos",
  "campi",
  "campo",
  "camps",
  "campy",
  "camus",
  "caned",
  "caneh",
  "caner",
  "canes",
  "cangs",
  "canid",
  "canna",
  "canns",
  "canso",
  "canst",
  "canto",
  "cants",
  "canty",
  "capas",
  "caped",
  "capes",
  "capex",
  "caphs",
  "capiz",
  "caple",
  "capon",
  "capos",
  "capot",
  "capri",
  "capul",
  "carap",
  "carbo",
  "carbs",
  "carby",
  "cardi",
  "cards",
  "cardy",
  "cared",
  "carer",
  "cares",
  "caret",
  "carex",
  "carks",
  "carle",
  "carls",
  "carns",
  "carny",
  "carob",
  "carom",
  "caron",
  "carpi",
  "carps",
  "carrs",
  "carse",
  "carta",
  "carte",
  "carts",
  "carvy",
  "casas",
  "casco",
  "cased",
  "cases",
  "casks",
  "casky",
  "casts",
  "casus",
  "cates",
  "cauda",
  "cauks",
  "cauld",
  "cauls",
  "caums",
  "caups",
  "cauri",
  "causa",
  "cavas",
  "caved",
  "cavel",
  "caver",
  "caves",
  "cavie",
  "cawed",
  "cawks",
  "caxon",
  "ceaze",
  "cebid",
  "cecal",
  "cecum",
  "ceded",
  "ceder",
  "cedes",
  "cedis",
  "ceiba",
  "ceili",
  "ceils",
  "celeb",
  "cella",
  "celli",
  "cells",
  "celom",
  "celts",
  "cense",
  "cento",
  "cents",
  "centu",
  "ceorl",
  "cepes",
  "cerci",
  "cered",
  "ceres",
  "cerge",
  "ceria",
  "ceric",
  "cerne",
  "ceroc",
  "ceros",
  "certs",
  "certy",
  "cesse",
  "cesta",
  "cesti",
  "cetes",
  "cetyl",
  "cezve",
  "chace",
  "chack",
  "chaco",
  "chado",
  "chads",
  "chaft",
  "chais",
  "chals",
  "chams",
  "chana",
  "chang",
  "chank",
  "chape",
  "chaps",
  "chapt",
  "chara",
  "chare",
  "chark",
  "charr",
  "chars",
  "chary",
  "chats",
  "chave",
  "chavs",
  "chawk",
  "chaws",
  "chaya",
  "chays",
  "cheep",
  "chefs",
  "cheka",
  "chela",
  "chelp",
  "chemo",
  "chems",
  "chere",
  "chert",
  "cheth",
  "chevy",
  "chews",
  "chewy",
  "chiao",
  "chias",
  "chibs",
  "chica",
  "chich",
  "chico",
  "chics",
  "chiel",
  "chiks",
  "chile",
  "chimb",
  "chimo",
  "chimp",
  "chine",
  "ching",
  "chink",
  "chino",
  "chins",
  "chips",
  "chirk",
  "chirl",
  "chirm",
  "chiro",
  "chirr",
  "chirt",
  "chiru",
  "chits",
  "chive",
  "chivs",
  "chivy",
  "chizz",
  "choco",
  "chocs",
  "chode",
  "chogs",
  "choil",
  "choko",
  "choky",
  "chola",
  "choli",
  "cholo",
  "chomp",
  "chons",
  "choof",
  "chook",
  "choom",
  "choon",
  "chops",
  "chota",
  "chott",
  "chout",
  "choux",
  "chowk",
  "chows",
  "chubs",
  "chufa",
  "chuff",
  "chugs",
  "chums",
  "churl",
  "churr",
  "chuse",
  "chuts",
  "chyle",
  "chyme",
  "chynd",
  "cibol",
  "cided",
  "cides",
  "ciels",
  "ciggy",
  "cilia",
  "cills",
  "cimar",
  "cimex",
  "cinct",
  "cines",
  "cinqs",
  "cions",
  "cippi",
  "circs",
  "cires",
  "cirls",
  "cirri",
  "cisco",
  "cissy",
  "cists",
  "cital",
  "cited",
  "citer",
  "cites",
  "cives",
  "civet",
  "civie",
  "civvy",
  "clach",
  "clade",
  "clads",
  "claes",
  "clags",
  "clame",
  "clams",
  "clans",
  "claps",
  "clapt",
  "claro",
  "clart",
  "clary",
  "clast",
  "clats",
  "claut",
  "clave",
  "clavi",
  "claws",
  "clays",
  "cleck",
  "cleek",
  "cleep",
  "clefs",
  "clegs",
  "cleik",
  "clems",
  "clepe",
  "clept",
  "cleve",
  "clews",
  "clied",
  "clies",
  "clift",
  "clime",
  "cline",
  "clint",
  "clipe",
  "clips",
  "clipt",
  "clits",
  "cloam",
  "clods",
  "cloff",
  "clogs",
  "cloke",
  "clomb",
  "clomp",
  "clonk",
  "clons",
  "cloop",
  "cloot",
  "clops",
  "clote",
  "clots",
  "clour",
  "clous",
  "clows",
  "cloye",
  "cloys",
  "cloze",
  "clubs",
  "clues",
  "cluey",
  "clunk",
  "clype",
  "cnida",
  "coact",
  "coady",
  "coala",
  "coals",
  "coaly",
  "coapt",
  "coarb",
  "coate",
  "coati",
  "coats",
  "cobbs",
  "cobby",
  "cobia",
  "coble",
  "cobza",
  "cocas",
  "cocci",
  "cocco",
  "cocks",
  "cocky",
  "cocos",
  "codas",
  "codec",
  "coded",
  "coden",
  "coder",
  "codes",
  "codex",
  "codon",
  "coeds",
  "coffs",
  "cogie",
  "cogon",
  "cogue",
  "cohab",
  "cohen",
  "cohoe",
  "cohog",
  "cohos",
  "coifs",
  "coign",
  "coils",
  "coins",
  "coirs",
  "coits",
  "coked",
  "cokes",
  "colas",
  "colby",
  "colds",
  "coled",
  "coles",
  "coley",
  "colic",
  "colin",
  "colls",
  "colly",
  "colog",
  "colts",
  "colza",
  "comae",
  "comal",
  "comas",
  "combe",
  "combi",
  "combo",
  "combs",
  "comby",
  "comer",
  "comes",
  "comix",
  "commo",
  "comms",
  "commy",
  "compo",
  "comps",
  "compt",
  "comte",
  "comus",
  "coned",
  "cones",
  "coney",
  "confs",
  "conga",
  "conge",
  "congo",
  "conia",
  "conin",
  "conks",
  "conky",
  "conne",
  "conns",
  "conte",
  "conto",
  "conus",
  "convo",
  "cooch",
  "cooed",
  "cooee",
  "cooer",
  "cooey",
  "coofs",
  "cooks",
  "cooky",
  "cools",
  "cooly",
  "coomb",
  "cooms",
  "coomy",
  "coons",
  "coops",
  "coopt",
  "coost",
  "coots",
  "cooze",
  "copal",
  "copay",
  "coped",
  "copen",
  "coper",
  "copes",
  "coppy",
  "copra",
  "copsy",
  "coqui",
  "coram",
  "corbe",
  "corby",
  "cords",
  "cored",
  "cores",
  "corey",
  "corgi",
  "coria",
  "corks",
  "corky",
  "corms",
  "corni",
  "corno",
  "corns",
  "cornu",
  "corps",
  "corse",
  "corso",
  "cosec",
  "cosed",
  "coses",
  "coset",
  "cosey",
  "cosie",
  "costa",
  "coste",
  "costs",
  "cotan",
  "coted",
  "cotes",
  "coths",
  "cotta",
  "cotts",
  "coude",
  "coups",
  "courb",
  "courd",
  "coure",
  "cours",
  "couta",
  "couth",
  "coved",
  "coves",
  "covin",
  "cowal",
  "cowan",
  "cowed",
  "cowks",
  "cowls",
  "cowps",
  "cowry",
  "coxae",
  "coxal",
  "coxed",
  "coxes",
  "coxib",
  "coyau",
  "coyed",
  "coyer",
  "coypu",
  "cozed",
  "cozen",
  "cozes",
  "cozey",
  "cozie",
  "craal",
  "crabs",
  "crags",
  "craic",
  "craig",
  "crake",
  "crame",
  "crams",
  "crans",
  "crape",
  "craps",
  "crapy",
  "crare",
  "craws",
  "crays",
  "creds",
  "creel",
  "crees",
  "crems",
  "crena",
  "creps",
  "crepy",
  "crewe",
  "crews",
  "crias",
  "cribs",
  "cries",
  "crims",
  "crine",
  "crios",
  "cripe",
  "crips",
  "crise",
  "crith",
  "crits",
  "croci",
  "crocs",
  "croft",
  "crogs",
  "cromb",
  "crome",
  "cronk",
  "crons",
  "crool",
  "croon",
  "crops",
  "crore",
  "crost",
  "crout",
  "crows",
  "croze",
  "cruck",
  "crudo",
  "cruds",
  "crudy",
  "crues",
  "cruet",
  "cruft",
  "crunk",
  "cruor",
  "crura",
  "cruse",
  "crusy",
  "cruve",
  "crwth",
  "cryer",
  "ctene",
  "cubby",
  "cubeb",
  "cubed",
  "cuber",
  "cubes",
  "cubit",
  "cuddy",
  "cuffo",
  "cuffs",
  "cuifs",
  "cuing",
  "cuish",
  "cuits",
  "cukes",
  "culch",
  "culet",
  "culex",
  "culls",
  "cully",
  "culms",
  "culpa",
  "culti",
  "cults",
  "culty",
  "cumec",
  "cundy",
  "cunei",
  "cunit",
  "cunts",
  "cupel",
  "cupid",
  "cuppa",
  "cuppy",
  "curat",
  "curbs",
  "curch",
  "curds",
  "curdy",
  "cured",
  "curer",
  "cures",
  "curet",
  "curfs",
  "curia",
  "curie",
  "curli",
  "curls",
  "curns",
  "curny",
  "currs",
  "cursi",
  "curst",
  "cusec",
  "cushy",
  "cusks",
  "cusps",
  "cuspy",
  "cusso",
  "cusum",
  "cutch",
  "cuter",
  "cutes",
  "cutey",
  "cutin",
  "cutis",
  "cutto",
  "cutty",
  "cutup",
  "cuvee",
  "cuzes",
  "cwtch",
  "cyano",
  "cyans",
  "cycad",
  "cycas",
  "cyclo",
  "cyder",
  "cylix",
  "cymae",
  "cymar",
  "cymas",
  "cymes",
  "cymol",
  "cysts",
  "cytes",
  "cyton",
  "czars",
  "daals",
  "dabba",
  "daces",
  "dacha",
  "dacks",
  "dadah",
  "dadas",
  "dados",
  "daffs",
  "daffy",
  "dagga",
  "daggy",
  "dagos",
  "dahls",
  "daiko",
  "daine",
  "daint",
  "daker",
  "daled",
  "dales",
  "dalis",
  "dalle",
  "dalts",
  "daman",
  "damar",
  "dames",
  "damme",
  "damns",
  "damps",
  "dampy",
  "dancy",
  "dangs",
  "danio",
  "danks",
  "danny",
  "dants",
  "daraf",
  "darbs",
  "darcy",
  "dared",
  "darer",
  "dares",
  "darga",
  "dargs",
  "daric",
  "daris",
  "darks",
  "darky",
  "darns",
  "darre",
  "darts",
  "darzi",
  "dashi",
  "dashy",
  "datal",
  "dated",
  "dater",
  "dates",
  "datos",
  "datto",
  "daube",
  "daubs",
  "dauby",
  "dauds",
  "dault",
  "daurs",
  "dauts",
  "daven",
  "davit",
  "dawah",
  "dawds",
  "dawed",
  "dawen",
  "dawks",
  "dawns",
  "dawts",
  "dayan",
  "daych",
  "daynt",
  "dazed",
  "dazer",
  "dazes",
  "deads",
  "deair",
  "deals",
  "deans",
  "deare",
  "dearn",
  "dears",
  "deary",
  "deash",
  "deave",
  "deaws",
  "deawy",
  "debag",
  "debby",
  "debel",
  "debes",
  "debts",
  "debud",
  "debur",
  "debus",
  "debye",
  "decad",
  "decaf",
  "decan",
  "decko",
  "decks",
  "decos",
  "dedal",
  "deeds",
  "deedy",
  "deely",
  "deems",
  "deens",
  "deeps",
  "deere",
  "deers",
  "deets",
  "deeve",
  "deevs",
  "defat",
  "deffo",
  "defis",
  "defog",
  "degas",
  "degum",
  "degus",
  "deice",
  "deids",
  "deify",
  "deils",
  "deism",
  "deist",
  "deked",
  "dekes",
  "dekko",
  "deled",
  "deles",
  "delfs",
  "delft",
  "delis",
  "dells",
  "delly",
  "delos",
  "delph",
  "delts",
  "deman",
  "demes",
  "demic",
  "demit",
  "demob",
  "demoi",
  "demos",
  "dempt",
  "denar",
  "denay",
  "dench",
  "denes",
  "denet",
  "denis",
  "dents",
  "deoxy",
  "derat",
  "deray",
  "dered",
  "deres",
  "derig",
  "derma",
  "derms",
  "derns",
  "derny",
  "deros",
  "derro",
  "derry",
  "derth",
  "dervs",
  "desex",
  "deshi",
  "desis",
  "desks",
  "desse",
  "devas",
  "devel",
  "devis",
  "devon",
  "devos",
  "devot",
  "dewan",
  "dewar",
  "dewax",
  "dewed",
  "dexes",
  "dexie",
  "dhaba",
  "dhaks",
  "dhals",
  "dhikr",
  "dhobi",
  "dhole",
  "dholl",
  "dhols",
  "dhoti",
  "dhows",
  "dhuti",
  "diact",
  "dials",
  "diane",
  "diazo",
  "dibbs",
  "diced",
  "dicer",
  "dices",
  "dicht",
  "dicks",
  "dicky",
  "dicot",
  "dicta",
  "dicts",
  "dicty",
  "diddy",
  "didie",
  "didos",
  "didst",
  "diebs",
  "diels",
  "diene",
  "diets",
  "diffs",
  "dight",
  "dikas",
  "diked",
  "diker",
  "dikes",
  "dikey",
  "dildo",
  "dilli",
  "dills",
  "dimbo",
  "dimer",
  "dimes",
  "dimps",
  "dinar",
  "dined",
  "dines",
  "dinge",
  "dings",
  "dinic",
  "dinks",
  "dinky",
  "dinna",
  "dinos",
  "dints",
  "diols",
  "diota",
  "dippy",
  "dipso",
  "diram",
  "direr",
  "dirke",
  "dirks",
  "dirls",
  "dirts",
  "disas",
  "disci",
  "discs",
  "dishy",
  "disks",
  "disme",
  "dital",
  "ditas",
  "dited",
  "dites",
  "ditsy",
  "ditts",
  "ditzy",
  "divan",
  "divas",
  "dived",
  "dives",
  "divis",
  "divna",
  "divos",
  "divot",
  "divvy",
  "diwan",
  "dixie",
  "dixit",
  "diyas",
  "dizen",
  "djinn",
  "djins",
  "doabs",
  "doats",
  "dobby",
  "dobes",
  "dobie",
  "dobla",
  "dobra",
  "dobro",
  "docht",
  "docks",
  "docos",
  "docus",
  "doddy",
  "dodos",
  "doeks",
  "doers",
  "doest",
  "doeth",
  "doffs",
  "dogan",
  "doges",
  "dogey",
  "doggo",
  "doggy",
  "dogie",
  "dohyo",
  "doilt",
  "doily",
  "doits",
  "dojos",
  "dolce",
  "dolci",
  "doled",
  "doles",
  "dolia",
  "dolls",
  "dolma",
  "dolor",
  "dolos",
  "dolts",
  "domal",
  "domed",
  "domes",
  "domic",
  "donah",
  "donas",
  "donee",
  "doner",
  "donga",
  "dongs",
  "donko",
  "donna",
  "donne",
  "donny",
  "donsy",
  "doobs",
  "dooce",
  "doody",
  "dooks",
  "doole",
  "dools",
  "dooly",
  "dooms",
  "doomy",
  "doona",
  "doorn",
  "doors",
  "doozy",
  "dopas",
  "doped",
  "doper",
  "dopes",
  "dorad",
  "dorba",
  "dorbs",
  "doree",
  "dores",
  "doric",
  "doris",
  "dorks",
  "dorky",
  "dorms",
  "dormy",
  "dorps",
  "dorrs",
  "dorsa",
  "dorse",
  "dorts",
  "dorty",
  "dosai",
  "dosas",
  "dosed",
  "doseh",
  "doser",
  "doses",
  "dosha",
  "dotal",
  "doted",
  "doter",
  "dotes",
  "dotty",
  "douar",
  "douce",
  "doucs",
  "douks",
  "doula",
  "douma",
  "doums",
  "doups",
  "doura",
  "douse",
  "douts",
  "doved",
  "doven",
  "dover",
  "doves",
  "dovie",
  "dowar",
  "dowds",
  "dowed",
  "dower",
  "dowie",
  "dowle",
  "dowls",
  "dowly",
  "downa",
  "downs",
  "dowps",
  "dowse",
  "dowts",
  "doxed",
  "doxes",
  "doxie",
  "doyen",
  "doyly",
  "dozed",
  "dozer",
  "dozes",
  "drabs",
  "drack",
  "draco",
  "draff",
  "drags",
  "drail",
  "drams",
  "drant",
  "draps",
  "drats",
  "drave",
  "draws",
  "drays",
  "drear",
  "dreck",
  "dreed",
  "dreer",
  "drees",
  "dregs",
  "dreks",
  "drent",
  "drere",
  "drest",
  "dreys",
  "dribs",
  "drice",
  "dries",
  "drily",
  "drips",
  "dript",
  "droid",
  "droil",
  "droke",
  "drole",
  "drome",
  "drony",
  "droob",
  "droog",
  "drook",
  "drops",
  "dropt",
  "drouk",
  "drows",
  "drubs",
  "drugs",
  "drums",
  "drupe",
  "druse",
  "drusy",
  "druxy",
  "dryad",
  "dryas",
  "dsobo",
  "dsomo",
  "duads",
  "duals",
  "duans",
  "duars",
  "dubbo",
  "ducal",
  "ducat",
  "duces",
  "ducks",
  "ducky",
  "ducts",
  "duddy",
  "duded",
  "dudes",
  "duels",
  "duets",
  "duett",
  "duffs",
  "dufus",
  "duing",
  "duits",
  "dukas",
  "duked",
  "dukes",
  "dukka",
  "dulce",
  "dules",
  "dulia",
  "dulls",
  "dulse",
  "dumas",
  "dumbo",
  "dumbs",
  "dumka",
  "dumky",
  "dumps",
  "dunam",
  "dunch",
  "dunes",
  "dungs",
  "dungy",
  "dunks",
  "dunno",
  "dunny",
  "dunsh",
  "dunts",
  "duomi",
  "duomo",
  "duped",
  "duper",
  "dupes",
  "duple",
  "duply",
  "duppy",
  "dural",
  "duras",
  "dured",
  "dures",
  "durgy",
  "durns",
  "duroc",
  "duros",
  "duroy",
  "durra",
  "durrs",
  "durry",
  "durst",
  "durum",
  "durzi",
  "dusks",
  "dusts",
  "duxes",
  "dwaal",
  "dwale",
  "dwalm",
  "dwams",
  "dwang",
  "dwaum",
  "dweeb",
  "dwile",
  "dwine",
  "dyads",
  "dyers",
  "dyked",
  "dykes",
  "dykey",
  "dykon",
  "dynel",
  "dynes",
  "dzhos",
  "eagre",
  "ealed",
  "eales",
  "eaned",
  "eards",
  "eared",
  "earls",
  "earns",
  "earnt",
  "earst",
  "eased",
  "easer",
  "eases",
  "easle",
  "easts",
  "eathe",
  "eaved",
  "eaves",
  "ebbed",
  "ebbet",
  "ebons",
  "ebook",
  "ecads",
  "eched",
  "eches",
  "echos",
  "ecrus",
  "edema",
  "edged",
  "edger",
  "edges",
  "edile",
  "edits",
  "educe",
  "educt",
  "eejit",
  "eensy",
  "eeven",
  "eevns",
  "effed",
  "egads",
  "egers",
  "egest",
  "eggar",
  "egged",
  "egger",
  "egmas",
  "ehing",
  "eider",
  "eidos",
  "eigne",
  "eiked",
  "eikon",
  "eilds",
  "eisel",
  "ejido",
  "ekkas",
  "elain",
  "eland",
  "elans",
  "elchi",
  "eldin",
  "elemi",
  "elfed",
  "eliad",
  "elint",
  "elmen",
  "eloge",
  "elogy",
  "eloin",
  "elops",
  "elpee",
  "elsin",
  "elute",
  "elvan",
  "elven",
  "elver",
  "elves",
  "emacs",
  "embar",
  "embay",
  "embog",
  "embow",
  "embox",
  "embus",
  "emeer",
  "emend",
  "emerg",
  "emery",
  "emeus",
  "emics",
  "emirs",
  "emits",
  "emmas",
  "emmer",
  "emmet",
  "emmew",
  "emmys",
  "emoji",
  "emong",
  "emote",
  "emove",
  "empts",
  "emule",
  "emure",
  "emyde",
  "emyds",
  "enarm",
  "enate",
  "ended",
  "ender",
  "endew",
  "endue",
  "enews",
  "enfix",
  "eniac",
  "enlit",
  "enmew",
  "ennog",
  "enoki",
  "enols",
  "enorm",
  "enows",
  "enrol",
  "ensew",
  "ensky",
  "entia",
  "enure",
  "enurn",
  "envoi",
  "enzym",
  "eorls",
  "eosin",
  "epact",
  "epees",
  "ephah",
  "ephas",
  "ephod",
  "ephor",
  "epics",
  "epode",
  "epopt",
  "epris",
  "eques",
  "equid",
  "erbia",
  "erevs",
  "ergon",
  "ergos",
  "ergot",
  "erhus",
  "erica",
  "erick",
  "erics",
  "ering",
  "erned",
  "ernes",
  "erose",
  "erred",
  "erses",
  "eruct",
  "erugo",
  "eruvs",
  "erven",
  "ervil",
  "escar",
  "escot",
  "esile",
  "eskar",
  "esker",
  "esnes",
  "esses",
  "estoc",
  "estop",
  "estro",
  "etage",
  "etape",
  "etats",
  "etens",
  "ethal",
  "ethne",
  "ethyl",
  "etics",
  "etnas",
  "ettin",
  "ettle",
  "etuis",
  "etwee",
  "etyma",
  "eughs",
  "euked",
  "eupad",
  "euros",
  "eusol",
  "evens",
  "evert",
  "evets",
  "evhoe",
  "evils",
  "evite",
  "evohe",
  "ewers",
  "ewest",
  "ewhow",
  "ewked",
  "exams",
  "exeat",
  "execs",
  "exeem",
  "exeme",
  "exfil",
  "exies",
  "exine",
  "exing",
  "exits",
  "exode",
  "exome",
  "exons",
  "expat",
  "expos",
  "exude",
  "exuls",
  "exurb",
  "eyass",
  "eyers",
  "eyots",
  "eyras",
  "eyres",
  "eyrie",
  "eyrir",
  "ezine",
  "fabby",
  "faced",
  "facer",
  "faces",
  "facia",
  "facta",
  "facts",
  "faddy",
  "faded",
  "fader",
  "fades",
  "fadge",
  "fados",
  "faena",
  "faery",
  "faffs",
  "faffy",
  "faggy",
  "fagin",
  "fagot",
  "faiks",
  "fails",
  "faine",
  "fains",
  "fairs",
  "faked",
  "faker",
  "fakes",
  "fakey",
  "fakie",
  "fakir",
  "falaj",
  "falls",
  "famed",
  "fames",
  "fanal",
  "fands",
  "fanes",
  "fanga",
  "fango",
  "fangs",
  "fanks",
  "fanon",
  "fanos",
  "fanum",
  "faqir",
  "farad",
  "farci",
  "farcy",
  "fards",
  "fared",
  "farer",
  "fares",
  "farle",
  "farls",
  "farms",
  "faros",
  "farro",
  "farse",
  "farts",
  "fasci",
  "fasti",
  "fasts",
  "fated",
  "fates",
  "fatly",
  "fatso",
  "fatwa",
  "faugh",
  "fauld",
  "fauns",
  "faurd",
  "fauts",
  "fauve",
  "favas",
  "favel",
  "faver",
  "faves",
  "favus",
  "fawns",
  "fawny",
  "faxed",
  "faxes",
  "fayed",
  "fayer",
  "fayne",
  "fayre",
  "fazed",
  "fazes",
  "feals",
  "feare",
  "fears",
  "feart",
  "fease",
  "feats",
  "feaze",
  "feces",
  "fecht",
  "fecit",
  "fecks",
  "fedex",
  "feebs",
  "feeds",
  "feels",
  "feens",
  "feers",
  "feese",
  "feeze",
  "fehme",
  "feint",
  "feist",
  "felch",
  "felid",
  "fells",
  "felly",
  "felts",
  "felty",
  "femal",
  "femes",
  "femmy",
  "fends",
  "fendy",
  "fenis",
  "fenks",
  "fenny",
  "fents",
  "feods",
  "feoff",
  "ferer",
  "feres",
  "feria",
  "ferly",
  "fermi",
  "ferms",
  "ferns",
  "ferny",
  "fesse",
  "festa",
  "fests",
  "festy",
  "fetas",
  "feted",
  "fetes",
  "fetor",
  "fetta",
  "fetts",
  "fetwa",
  "feuar",
  "feuds",
  "feued",
  "feyed",
  "feyer",
  "feyly",
  "fezes",
  "fezzy",
  "fiars",
  "fiats",
  "fibro",
  "fices",
  "fiche",
  "fichu",
  "ficin",
  "ficos",
  "fides",
  "fidge",
  "fidos",
  "fiefs",
  "fient",
  "fiere",
  "fiers",
  "fiest",
  "fifed",
  "fifer",
  "fifes",
  "fifis",
  "figgy",
  "figos",
  "fiked",
  "fikes",
  "filar",
  "filch",
  "filed",
  "files",
  "filii",
  "filks",
  "fille",
  "fillo",
  "fills",
  "filmi",
  "films",
  "filos",
  "filum",
  "finca",
  "finds",
  "fined",
  "fines",
  "finis",
  "finks",
  "finny",
  "finos",
  "fiord",
  "fiqhs",
  "fique",
  "fired",
  "firer",
  "fires",
  "firie",
  "firks",
  "firms",
  "firns",
  "firry",
  "firth",
  "fiscs",
  "fisks",
  "fists",
  "fisty",
  "fitch",
  "fitly",
  "fitna",
  "fitte",
  "fitts",
  "fiver",
  "fives",
  "fixed",
  "fixes",
  "fixit",
  "fjeld",
  "flabs",
  "flaff",
  "flags",
  "flaks",
  "flamm",
  "flams",
  "flamy",
  "flane",
  "flans",
  "flaps",
  "flary",
  "flats",
  "flava",
  "flawn",
  "flaws",
  "flawy",
  "flaxy",
  "flays",
  "fleam",
  "fleas",
  "fleek",
  "fleer",
  "flees",
  "flegs",
  "fleme",
  "fleur",
  "flews",
  "flexi",
  "flexo",
  "fleys",
  "flics",
  "flied",
  "flies",
  "flimp",
  "flims",
  "flips",
  "flirs",
  "flisk",
  "flite",
  "flits",
  "flitt",
  "flobs",
  "flocs",
  "floes",
  "flogs",
  "flong",
  "flops",
  "flors",
  "flory",
  "flosh",
  "flota",
  "flote",
  "flows",
  "flubs",
  "flued",
  "flues",
  "fluey",
  "fluky",
  "flump",
  "fluor",
  "flurr",
  "fluty",
  "fluyt",
  "flyby",
  "flype",
  "flyte",
  "foals",
  "foams",
  "foehn",
  "fogey",
  "fogie",
  "fogle",
  "fogou",
  "fohns",
  "foids",
  "foils",
  "foins",
  "folds",
  "foley",
  "folia",
  "folic",
  "folie",
  "folks",
  "folky",
  "fomes",
  "fonda",
  "fonds",
  "fondu",
  "fones",
  "fonly",
  "fonts",
  "foods",
  "foody",
  "fools",
  "foots",
  "footy",
  "foram",
  "forbs",
  "forby",
  "fordo",
  "fords",
  "forel",
  "fores",
  "forex",
  "forks",
  "forky",
  "forme",
  "forms",
  "forts",
  "forza",
  "forze",
  "fossa",
  "fosse",
  "fouat",
  "fouds",
  "fouer",
  "fouet",
  "foule",
  "fouls",
  "fount",
  "fours",
  "fouth",
  "fovea",
  "fowls",
  "fowth",
  "foxed",
  "foxes",
  "foxie",
  "foyle",
  "foyne",
  "frabs",
  "frack",
  "fract",
  "frags",
  "fraim",
  "franc",
  "frape",
  "fraps",
  "frass",
  "frate",
  "frati",
  "frats",
  "fraus",
  "frays",
  "frees",
  "freet",
  "freit",
  "fremd",
  "frena",
  "freon",
  "frere",
  "frets",
  "fribs",
  "frier",
  "fries",
  "frigs",
  "frise",
  "frist",
  "frith",
  "frits",
  "fritt",
  "frize",
  "frizz",
  "froes",
  "frogs",
  "frons",
  "frore",
  "frorn",
  "frory",
  "frosh",
  "frows",
  "frowy",
  "frugs",
  "frump",
  "frush",
  "frust",
  "fryer",
  "fubar",
  "fubby",
  "fubsy",
  "fucks",
  "fucus",
  "fuddy",
  "fudgy",
  "fuels",
  "fuero",
  "fuffs",
  "fuffy",
  "fugal",
  "fuggy",
  "fugie",
  "fugio",
  "fugle",
  "fugly",
  "fugus",
  "fujis",
  "fulls",
  "fumed",
  "fumer",
  "fumes",
  "fumet",
  "fundi",
  "funds",
  "fundy",
  "fungo",
  "fungs",
  "funks",
  "fural",
  "furan",
  "furca",
  "furls",
  "furol",
  "furrs",
  "furth",
  "furze",
  "furzy",
  "fused",
  "fusee",
  "fusel",
  "fuses",
  "fusil",
  "fusks",
  "fusts",
  "fusty",
  "futon",
  "fuzed",
  "fuzee",
  "fuzes",
  "fuzil",
  "fyces",
  "fyked",
  "fykes",
  "fyles",
  "fyrds",
  "fytte",
  "gabba",
  "gabby",
  "gable",
  "gaddi",
  "gades",
  "gadge",
  "gadid",
  "gadis",
  "gadje",
  "gadjo",
  "gadso",
  "gaffs",
  "gaged",
  "gager",
  "gages",
  "gaids",
  "gains",
  "gairs",
  "gaita",
  "gaits",
  "gaitt",
  "gajos",
  "galah",
  "galas",
  "galax",
  "galea",
  "galed",
  "gales",
  "galls",
  "gally",
  "galop",
  "galut",
  "galvo",
  "gamas",
  "gamay",
  "gamba",
  "gambe",
  "gambo",
  "gambs",
  "gamed",
  "games",
  "gamey",
  "gamic",
  "gamin",
  "gamme",
  "gammy",
  "gamps",
  "ganch",
  "gandy",
  "ganef",
  "ganev",
  "gangs",
  "ganja",
  "ganof",
  "gants",
  "gaols",
  "gaped",
  "gaper",
  "gapes",
  "gapos",
  "gappy",
  "garbe",
  "garbo",
  "garbs",
  "garda",
  "gares",
  "garis",
  "garms",
  "garni",
  "garre",
  "garth",
  "garum",
  "gases",
  "gasps",
  "gaspy",
  "gasts",
  "gatch",
  "gated",
  "gater",
  "gates",
  "gaths",
  "gator",
  "gauch",
  "gaucy",
  "gauds",
  "gauje",
  "gault",
  "gaums",
  "gaumy",
  "gaups",
  "gaurs",
  "gauss",
  "gauzy",
  "gavot",
  "gawcy",
  "gawds",
  "gawks",
  "gawps",
  "gawsy",
  "gayal",
  "gazal",
  "gazar",
  "gazed",
  "gazes",
  "gazon",
  "gazoo",
  "geals",
  "geans",
  "geare",
  "gears",
  "geats",
  "gebur",
  "gecks",
  "geeks",
  "geeps",
  "geest",
  "geist",
  "geits",
  "gelds",
  "gelee",
  "gelid",
  "gelly",
  "gelts",
  "gemel",
  "gemma",
  "gemmy",
  "gemot",
  "genal",
  "genas",
  "genes",
  "genet",
  "genic",
  "genii",
  "genip",
  "genny",
  "genoa",
  "genom",
  "genro",
  "gents",
  "genty",
  "genua",
  "genus",
  "geode",
  "geoid",
  "gerah",
  "gerbe",
  "geres",
  "gerle",
  "germs",
  "germy",
  "gerne",
  "gesse",
  "gesso",
  "geste",
  "gests",
  "getas",
  "getup",
  "geums",
  "geyan",
  "geyer",
  "ghast",
  "ghats",
  "ghaut",
  "ghazi",
  "ghees",
  "ghest",
  "ghyll",
  "gibed",
  "gibel",
  "giber",
  "gibes",
  "gibli",
  "gibus",
  "gifts",
  "gigas",
  "gighe",
  "gigot",
  "gigue",
  "gilas",
  "gilds",
  "gilet",
  "gills",
  "gilly",
  "gilpy",
  "gilts",
  "gimel",
  "gimme",
  "gimps",
  "gimpy",
  "ginch",
  "ginge",
  "gings",
  "ginks",
  "ginny",
  "ginzo",
  "gipon",
  "gippo",
  "gippy",
  "girds",
  "girls",
  "girns",
  "giron",
  "giros",
  "girrs",
  "girsh",
  "girts",
  "gismo",
  "gisms",
  "gists",
  "gitch",
  "gites",
  "giust",
  "gived",
  "gives",
  "gizmo",
  "glace",
  "glads",
  "glady",
  "glaik",
  "glair",
  "glams",
  "glans",
  "glary",
  "glaum",
  "glaur",
  "glazy",
  "gleba",
  "glebe",
  "gleby",
  "glede",
  "gleds",
  "gleed",
  "gleek",
  "glees",
  "gleet",
  "gleis",
  "glens",
  "glent",
  "gleys",
  "glial",
  "glias",
  "glibs",
  "gliff",
  "glift",
  "glike",
  "glime",
  "glims",
  "glisk",
  "glits",
  "glitz",
  "gloam",
  "globi",
  "globs",
  "globy",
  "glode",
  "glogg",
  "gloms",
  "gloop",
  "glops",
  "glost",
  "glout",
  "glows",
  "gloze",
  "glued",
  "gluer",
  "glues",
  "gluey",
  "glugs",
  "glume",
  "glums",
  "gluon",
  "glute",
  "gluts",
  "gnarl",
  "gnarr",
  "gnars",
  "gnats",
  "gnawn",
  "gnaws",
  "gnows",
  "goads",
  "goafs",
  "goals",
  "goary",
  "goats",
  "goaty",
  "goban",
  "gobar",
  "gobbi",
  "gobbo",
  "gobby",
  "gobis",
  "gobos",
  "godet",
  "godso",
  "goels",
  "goers",
  "goest",
  "goeth",
  "goety",
  "gofer",
  "goffs",
  "gogga",
  "gogos",
  "goier",
  "gojis",
  "golds",
  "goldy",
  "goles",
  "golfs",
  "golpe",
  "golps",
  "gombo",
  "gomer",
  "gompa",
  "gonch",
  "gonef",
  "gongs",
  "gonia",
  "gonif",
  "gonks",
  "gonna",
  "gonof",
  "gonys",
  "gonzo",
  "gooby",
  "goods",
  "goofs",
  "googs",
  "gooks",
  "gooky",
  "goold",
  "gools",
  "gooly",
  "goons",
  "goony",
  "goops",
  "goopy",
  "goors",
  "goory",
  "goosy",
  "gopak",
  "gopik",
  "goral",
  "goras",
  "gored",
  "gores",
  "goris",
  "gorms",
  "gormy",
  "gorps",
  "gorse",
  "gorsy",
  "gosht",
  "gosse",
  "gotch",
  "goths",
  "gothy",
  "gotta",
  "gouch",
  "gouks",
  "goura",
  "gouts",
  "gouty",
  "gowan",
  "gowds",
  "gowfs",
  "gowks",
  "gowls",
  "gowns",
  "goxes",
  "goyim",
  "goyle",
  "graal",
  "grabs",
  "grads",
  "graff",
  "graip",
  "grama",
  "grame",
  "gramp",
  "grams",
  "grana",
  "grans",
  "grapy",
  "gravs",
  "grays",
  "grebe",
  "grebo",
  "grece",
  "greek",
  "grees",
  "grege",
  "grego",
  "grein",
  "grens",
  "grese",
  "greve",
  "grews",
  "greys",
  "grice",
  "gride",
  "grids",
  "griff",
  "grift",
  "grigs",
  "grike",
  "grins",
  "griot",
  "grips",
  "gript",
  "gripy",
  "grise",
  "grist",
  "grisy",
  "grith",
  "grits",
  "grize",
  "groat",
  "grody",
  "grogs",
  "groks",
  "groma",
  "grone",
  "groof",
  "grosz",
  "grots",
  "grouf",
  "grovy",
  "grows",
  "grrls",
  "grrrl",
  "grubs",
  "grued",
  "grues",
  "grufe",
  "grume",
  "grump",
  "grund",
  "gryce",
  "gryde",
  "gryke",
  "grype",
  "grypt",
  "guaco",
  "guana",
  "guano",
  "guans",
  "guars",
  "gucks",
  "gucky",
  "gudes",
  "guffs",
  "gugas",
  "guids",
  "guimp",
  "guiro",
  "gulag",
  "gular",
  "gulas",
  "gules",
  "gulet",
  "gulfs",
  "gulfy",
  "gulls",
  "gulph",
  "gulps",
  "gulpy",
  "gumma",
  "gummi",
  "gumps",
  "gundy",
  "gunge",
  "gungy",
  "gunks",
  "gunky",
  "gunny",
  "guqin",
  "gurdy",
  "gurge",
  "gurls",
  "gurly",
  "gurns",
  "gurry",
  "gursh",
  "gurus",
  "gushy",
  "gusla",
  "gusle",
  "gusli",
  "gussy",
  "gusts",
  "gutsy",
  "gutta",
  "gutty",
  "guyed",
  "guyle",
  "guyot",
  "guyse",
  "gwine",
  "gyals",
  "gyans",
  "gybed",
  "gybes",
  "gyeld",
  "gymps",
  "gynae",
  "gynie",
  "gynny",
  "gynos",
  "gyoza",
  "gypos",
  "gyppo",
  "gyppy",
  "gyral",
  "gyred",
  "gyres",
  "gyron",
  "gyros",
  "gyrus",
  "gytes",
  "gyved",
  "gyves",
  "haafs",
  "haars",
  "hable",
  "habus",
  "hacek",
  "hacks",
  "hadal",
  "haded",
  "hades",
  "hadji",
  "hadst",
  "haems",
  "haets",
  "haffs",
  "hafiz",
  "hafts",
  "haggs",
  "hahas",
  "haick",
  "haika",
  "haiks",
  "haiku",
  "hails",
  "haily",
  "hains",
  "haint",
  "hairs",
  "haith",
  "hajes",
  "hajis",
  "hajji",
  "hakam",
  "hakas",
  "hakea",
  "hakes",
  "hakim",
  "hakus",
  "halal",
  "haled",
  "haler",
  "hales",
  "halfa",
  "halfs",
  "halid",
  "hallo",
  "halls",
  "halma",
  "halms",
  "halon",
  "halos",
  "halse",
  "halts",
  "halva",
  "halwa",
  "hamal",
  "hamba",
  "hamed",
  "hames",
  "hammy",
  "hamza",
  "hanap",
  "hance",
  "hanch",
  "hands",
  "hangi",
  "hangs",
  "hanks",
  "hanky",
  "hansa",
  "hanse",
  "hants",
  "haole",
  "haoma",
  "hapax",
  "haply",
  "happi",
  "hapus",
  "haram",
  "hards",
  "hared",
  "hares",
  "harim",
  "harks",
  "harls",
  "harms",
  "harns",
  "haros",
  "harps",
  "harts",
  "hashy",
  "hasks",
  "hasps",
  "hasta",
  "hated",
  "hates",
  "hatha",
  "hauds",
  "haufs",
  "haugh",
  "hauld",
  "haulm",
  "hauls",
  "hault",
  "hauns",
  "hause",
  "haver",
  "haves",
  "hawed",
  "hawks",
  "hawms",
  "hawse",
  "hayed",
  "hayer",
  "hayey",
  "hayle",
  "hazan",
  "hazed",
  "hazer",
  "hazes",
  "heads",
  "heald",
  "heals",
  "heame",
  "heaps",
  "heapy",
  "heare",
  "hears",
  "heast",
  "heats",
  "heben",
  "hebes",
  "hecht",
  "hecks",
  "heder",
  "hedgy",
  "heeds",
  "heedy",
  "heels",
  "heeze",
  "hefte",
  "hefts",
  "heids",
  "heigh",
  "heils",
  "heirs",
  "hejab",
  "hejra",
  "heled",
  "heles",
  "helio",
  "hells",
  "helms",
  "helos",
  "helot",
  "helps",
  "helve",
  "hemal",
  "hemes",
  "hemic",
  "hemin",
  "hemps",
  "hempy",
  "hench",
  "hends",
  "henge",
  "henna",
  "henny",
  "henry",
  "hents",
  "hepar",
  "herbs",
  "herby",
  "herds",
  "heres",
  "herls",
  "herma",
  "herms",
  "herns",
  "heros",
  "herry",
  "herse",
  "hertz",
  "herye",
  "hesps",
  "hests",
  "hetes",
  "heths",
  "heuch",
  "heugh",
  "hevea",
  "hewed",
  "hewer",
  "hewgh",
  "hexad",
  "hexed",
  "hexer",
  "hexes",
  "hexyl",
  "heyed",
  "hiant",
  "hicks",
  "hided",
  "hider",
  "hides",
  "hiems",
  "highs",
  "hight",
  "hijab",
  "hijra",
  "hiked",
  "hiker",
  "hikes",
  "hikoi",
  "hilar",
  "hilch",
  "hillo",
  "hills",
  "hilts",
  "hilum",
  "hilus",
  "himbo",
  "hinau",
  "hinds",
  "hings",
  "hinky",
  "hinny",
  "hints",
  "hiois",
  "hiply",
  "hired",
  "hiree",
  "hirer",
  "hires",
  "hissy",
  "hists",
  "hithe",
  "hived",
  "hiver",
  "hives",
  "hizen",
  "hoaed",
  "hoagy",
  "hoars",
  "hoary",
  "hoast",
  "hobos",
  "hocks",
  "hocus",
  "hodad",
  "hodja",
  "hoers",
  "hogan",
  "hogen",
  "hoggs",
  "hoghs",
  "hohed",
  "hoick",
  "hoied",
  "hoiks",
  "hoing",
  "hoise",
  "hokas",
  "hoked",
  "hokes",
  "hokey",
  "hokis",
  "hokku",
  "hokum",
  "holds",
  "holed",
  "holes",
  "holey",
  "holks",
  "holla",
  "hollo",
  "holme",
  "holms",
  "holon",
  "holos",
  "holts",
  "homas",
  "homed",
  "homes",
  "homey",
  "homie",
  "homme",
  "homos",
  "honan",
  "honda",
  "honds",
  "honed",
  "honer",
  "hones",
  "hongi",
  "hongs",
  "honks",
  "honky",
  "hooch",
  "hoods",
  "hoody",
  "hooey",
  "hoofs",
  "hooka",
  "hooks",
  "hooky",
  "hooly",
  "hoons",
  "hoops",
  "hoord",
  "hoors",
  "hoosh",
  "hoots",
  "hooty",
  "hoove",
  "hopak",
  "hoped",
  "hoper",
  "hopes",
  "hoppy",
  "horah",
  "horal",
  "horas",
  "horis",
  "horks",
  "horme",
  "horns",
  "horst",
  "horsy",
  "hosed",
  "hosel",
  "hosen",
  "hoser",
  "hoses",
  "hosey",
  "hosta",
  "hosts",
  "hotch",
  "hoten",
  "hotty",
  "houff",
  "houfs",
  "hough",
  "houri",
  "hours",
  "houts",
  "hovea",
  "hoved",
  "hoven",
  "hoves",
  "howbe",
  "howes",
  "howff",
  "howfs",
  "howks",
  "howls",
  "howre",
  "howso",
  "hoxed",
  "hoxes",
  "hoyas",
  "hoyed",
  "hoyle",
  "hubby",
  "hucks",
  "hudna",
  "hudud",
  "huers",
  "huffs",
  "huffy",
  "huger",
  "huggy",
  "huhus",
  "huias",
  "hulas",
  "hules",
  "hulks",
  "hulky",
  "hullo",
  "hulls",
  "hully",
  "humas",
  "humfs",
  "humic",
  "humps",
  "humpy",
  "hunks",
  "hunts",
  "hurds",
  "hurls",
  "hurly",
  "hurra",
  "hurst",
  "hurts",
  "hushy",
  "husks",
  "husos",
  "hutia",
  "huzza",
  "huzzy",
  "hwyls",
  "hydra",
  "hyens",
  "hygge",
  "hying",
  "hykes",
  "hylas",
  "hyleg",
  "hyles",
  "hylic",
  "hymns",
  "hynde",
  "hyoid",
  "hyped",
  "hypes",
  "hypha",
  "hyphy",
  "hypos",
  "hyrax",
  "hyson",
  "hythe",
  "iambi",
  "iambs",
  "ibrik",
  "icers",
  "iched",
  "iches",
  "ichor",
  "icier",
  "icker",
  "ickle",
  "icons",
  "ictal",
  "ictic",
  "ictus",
  "idant",
  "ideas",
  "idees",
  "ident",
  "idled",
  "idles",
  "idola",
  "idols",
  "idyls",
  "iftar",
  "igapo",
  "igged",
  "iglus",
  "ihram",
  "ikans",
  "ikats",
  "ikons",
  "ileac",
  "ileal",
  "ileum",
  "ileus",
  "iliad",
  "ilial",
  "ilium",
  "iller",
  "illth",
  "imago",
  "imams",
  "imari",
  "imaum",
  "imbar",
  "imbed",
  "imide",
  "imido",
  "imids",
  "imine",
  "imino",
  "immew",
  "immit",
  "immix",
  "imped",
  "impis",
  "impot",
  "impro",
  "imshi",
  "imshy",
  "inapt",
  "inarm",
  "inbye",
  "incel",
  "incle",
  "incog",
  "incus",
  "incut",
  "indew",
  "india",
  "indie",
  "indol",
  "indow",
  "indri",
  "indue",
  "inerm",
  "infix",
  "infos",
  "infra",
  "ingan",
  "ingle",
  "inion",
  "inked",
  "inker",
  "inkle",
  "inned",
  "innit",
  "inorb",
  "inrun",
  "inset",
  "inspo",
  "intel",
  "intil",
  "intis",
  "intra",
  "inula",
  "inure",
  "inurn",
  "inust",
  "invar",
  "inwit",
  "iodic",
  "iodid",
  "iodin",
  "iotas",
  "ippon",
  "irade",
  "irids",
  "iring",
  "irked",
  "iroko",
  "irone",
  "irons",
  "isbas",
  "ishes",
  "isled",
  "isles",
  "isnae",
  "issei",
  "istle",
  "items",
  "ither",
  "ivied",
  "ivies",
  "ixias",
  "ixnay",
  "ixora",
  "ixtle",
  "izard",
  "izars",
  "izzat",
  "jaaps",
  "jabot",
  "jacal",
  "jacks",
  "jacky",
  "jaded",
  "jades",
  "jafas",
  "jaffa",
  "jagas",
  "jager",
  "jaggs",
  "jaggy",
  "jagir",
  "jagra",
  "jails",
  "jaker",
  "jakes",
  "jakey",
  "jalap",
  "jalop",
  "jambe",
  "jambo",
  "jambs",
  "jambu",
  "james",
  "jammy",
  "jamon",
  "janes",
  "janns",
  "janny",
  "janty",
  "japan",
  "japed",
  "japer",
  "japes",
  "jarks",
  "jarls",
  "jarps",
  "jarta",
  "jarul",
  "jasey",
  "jaspe",
  "jasps",
  "jatos",
  "jauks",
  "jaups",
  "javas",
  "javel",
  "jawan",
  "jawed",
  "jaxie",
  "jeans",
  "jeats",
  "jebel",
  "jedis",
  "jeels",
  "jeely",
  "jeeps",
  "jeers",
  "jeeze",
  "jefes",
  "jeffs",
  "jehad",
  "jehus",
  "jelab",
  "jello",
  "jells",
  "jembe",
  "jemmy",
  "jenny",
  "jeons",
  "jerid",
  "jerks",
  "jerry",
  "jesse",
  "jests",
  "jesus",
  "jetes",
  "jeton",
  "jeune",
  "jewed",
  "jewie",
  "jhala",
  "jiaos",
  "jibba",
  "jibbs",
  "jibed",
  "jiber",
  "jibes",
  "jiffs",
  "jiggy",
  "jigot",
  "jihad",
  "jills",
  "jilts",
  "jimmy",
  "jimpy",
  "jingo",
  "jinks",
  "jinne",
  "jinni",
  "jinns",
  "jirds",
  "jirga",
  "jirre",
  "jisms",
  "jived",
  "jiver",
  "jives",
  "jivey",
  "jnana",
  "jobed",
  "jobes",
  "jocko",
  "jocks",
  "jocky",
  "jocos",
  "jodel",
  "joeys",
  "johns",
  "joins",
  "joked",
  "jokes",
  "jokey",
  "jokol",
  "joled",
  "joles",
  "jolls",
  "jolts",
  "jolty",
  "jomon",
  "jomos",
  "jones",
  "jongs",
  "jonty",
  "jooks",
  "joram",
  "jorum",
  "jotas",
  "jotty",
  "jotun",
  "joual",
  "jougs",
  "jouks",
  "joule",
  "jours",
  "jowar",
  "jowed",
  "jowls",
  "jowly",
  "joyed",
  "jubas",
  "jubes",
  "jucos",
  "judas",
  "judgy",
  "judos",
  "jugal",
  "jugum",
  "jujus",
  "juked",
  "jukes",
  "jukus",
  "julep",
  "jumar",
  "jumby",
  "jumps",
  "junco",
  "junks",
  "junky",
  "jupes",
  "jupon",
  "jural",
  "jurat",
  "jurel",
  "jures",
  "justs",
  "jutes",
  "jutty",
  "juves",
  "juvie",
  "kaama",
  "kabab",
  "kabar",
  "kabob",
  "kacha",
  "kacks",
  "kadai",
  "kades",
  "kadis",
  "kafir",
  "kagos",
  "kagus",
  "kahal",
  "kaiak",
  "kaids",
  "kaies",
  "kaifs",
  "kaika",
  "kaiks",
  "kails",
  "kaims",
  "kaing",
  "kains",
  "kakas",
  "kakis",
  "kalam",
  "kales",
  "kalif",
  "kalis",
  "kalpa",
  "kamas",
  "kames",
  "kamik",
  "kamis",
  "kamme",
  "kanae",
  "kanas",
  "kandy",
  "kaneh",
  "kanes",
  "kanga",
  "kangs",
  "kanji",
  "kants",
  "kanzu",
  "kaons",
  "kapas",
  "kaphs",
  "kapok",
  "kapow",
  "kapus",
  "kaput",
  "karas",
  "karat",
  "karks",
  "karns",
  "karoo",
  "karos",
  "karri",
  "karst",
  "karsy",
  "karts",
  "karzy",
  "kasha",
  "kasme",
  "katal",
  "katas",
  "katis",
  "katti",
  "kaugh",
  "kauri",
  "kauru",
  "kaury",
  "kaval",
  "kavas",
  "kawas",
  "kawau",
  "kawed",
  "kayle",
  "kayos",
  "kazis",
  "kazoo",
  "kbars",
  "kebar",
  "kebob",
  "kecks",
  "kedge",
  "kedgy",
  "keech",
  "keefs",
  "keeks",
  "keels",
  "keema",
  "keeno",
  "keens",
  "keeps",
  "keets",
  "keeve",
  "kefir",
  "kehua",
  "keirs",
  "kelep",
  "kelim",
  "kells",
  "kelly",
  "kelps",
  "kelpy",
  "kelts",
  "kelty",
  "kembo",
  "kembs",
  "kemps",
  "kempt",
  "kempy",
  "kenaf",
  "kench",
  "kendo",
  "kenos",
  "kente",
  "kents",
  "kepis",
  "kerbs",
  "kerel",
  "kerfs",
  "kerky",
  "kerma",
  "kerne",
  "kerns",
  "keros",
  "kerry",
  "kerve",
  "kesar",
  "kests",
  "ketas",
  "ketch",
  "ketes",
  "ketol",
  "kevel",
  "kevil",
  "kexes",
  "keyed",
  "keyer",
  "khadi",
  "khafs",
  "khans",
  "khaph",
  "khats",
  "khaya",
  "khazi",
  "kheda",
  "kheth",
  "khets",
  "khoja",
  "khors",
  "khoum",
  "khuds",
  "kiaat",
  "kiack",
  "kiang",
  "kibbe",
  "kibbi",
  "kibei",
  "kibes",
  "kibla",
  "kicks",
  "kicky",
  "kiddo",
  "kiddy",
  "kidel",
  "kidge",
  "kiefs",
  "kiers",
  "kieve",
  "kievs",
  "kight",
  "kikes",
  "kikoi",
  "kiley",
  "kilim",
  "kills",
  "kilns",
  "kilos",
  "kilps",
  "kilts",
  "kilty",
  "kimbo",
  "kinas",
  "kinda",
  "kinds",
  "kindy",
  "kines",
  "kings",
  "kinin",
  "kinks",
  "kinos",
  "kiore",
  "kipes",
  "kippa",
  "kipps",
  "kirby",
  "kirks",
  "kirns",
  "kirri",
  "kisan",
  "kissy",
  "kists",
  "kited",
  "kiter",
  "kites",
  "kithe",
  "kiths",
  "kitul",
  "kivas",
  "kiwis",
  "klang",
  "klaps",
  "klett",
  "klick",
  "klieg",
  "kliks",
  "klong",
  "kloof",
  "kluge",
  "klutz",
  "knags",
  "knaps",
  "knarl",
  "knars",
  "knaur",
  "knawe",
  "knees",
  "knell",
  "knish",
  "knits",
  "knive",
  "knobs",
  "knops",
  "knosp",
  "knots",
  "knout",
  "knowe",
  "knows",
  "knubs",
  "knurl",
  "knurr",
  "knurs",
  "knuts",
  "koans",
  "koaps",
  "koban",
  "kobos",
  "koels",
  "koffs",
  "kofta",
  "kogal",
  "kohas",
  "kohen",
  "kohls",
  "koine",
  "kojis",
  "kokam",
  "kokas",
  "koker",
  "kokra",
  "kokum",
  "kolas",
  "kolos",
  "kombu",
  "konbu",
  "kondo",
  "konks",
  "kooks",
  "kooky",
  "koori",
  "kopek",
  "kophs",
  "kopje",
  "koppa",
  "korai",
  "koras",
  "korat",
  "kores",
  "korma",
  "koros",
  "korun",
  "korus",
  "koses",
  "kotch",
  "kotos",
  "kotow",
  "koura",
  "kraal",
  "krabs",
  "kraft",
  "krais",
  "krait",
  "krang",
  "krans",
  "kranz",
  "kraut",
  "krays",
  "kreep",
  "kreng",
  "krewe",
  "krona",
  "krone",
  "kroon",
  "krubi",
  "krunk",
  "ksars",
  "kubie",
  "kudos",
  "kudus",
  "kudzu",
  "kufis",
  "kugel",
  "kuias",
  "kukri",
  "kukus",
  "kulak",
  "kulan",
  "kulas",
  "kulfi",
  "kumis",
  "kumys",
  "kuris",
  "kurre",
  "kurta",
  "kurus",
  "kusso",
  "kutas",
  "kutch",
  "kutis",
  "kutus",
  "kuzus",
  "kvass",
  "kvell",
  "kwela",
  "kyack",
  "kyaks",
  "kyang",
  "kyars",
  "kyats",
  "kybos",
  "kydst",
  "kyles",
  "kylie",
  "kylin",
  "kylix",
  "kyloe",
  "kynde",
  "kynds",
  "kypes",
  "kyrie",
  "kytes",
  "kythe",
  "laari",
  "labda",
  "labia",
  "labis",
  "labra",
  "laced",
  "lacer",
  "laces",
  "lacet",
  "lacey",
  "lacks",
  "laddy",
  "laded",
  "lader",
  "lades",
  "laers",
  "laevo",
  "lagan",
  "lahal",
  "lahar",
  "laich",
  "laics",
  "laids",
  "laigh",
  "laika",
  "laiks",
  "laird",
  "lairs",
  "lairy",
  "laith",
  "laity",
  "laked",
  "laker",
  "lakes",
  "lakhs",
  "lakin",
  "laksa",
  "laldy",
  "lalls",
  "lamas",
  "lambs",
  "lamby",
  "lamed",
  "lamer",
  "lames",
  "lamia",
  "lammy",
  "lamps",
  "lanai",
  "lanas",
  "lanch",
  "lande",
  "lands",
  "lanes",
  "lanks",
  "lants",
  "lapin",
  "lapis",
  "lapje",
  "larch",
  "lards",
  "lardy",
  "laree",
  "lares",
  "largo",
  "laris",
  "larks",
  "larky",
  "larns",
  "larnt",
  "larum",
  "lased",
  "laser",
  "lases",
  "lassi",
  "lassu",
  "lassy",
  "lasts",
  "latah",
  "lated",
  "laten",
  "latex",
  "lathi",
  "laths",
  "lathy",
  "latke",
  "latus",
  "lauan",
  "lauch",
  "lauds",
  "laufs",
  "laund",
  "laura",
  "laval",
  "lavas",
  "laved",
  "laver",
  "laves",
  "lavra",
  "lavvy",
  "lawed",
  "lawer",
  "lawin",
  "lawks",
  "lawns",
  "lawny",
  "laxed",
  "laxer",
  "laxes",
  "laxly",
  "layed",
  "layin",
  "layup",
  "lazar",
  "lazed",
  "lazes",
  "lazos",
  "lazzi",
  "lazzo",
  "leads",
  "leady",
  "leafs",
  "leaks",
  "leams",
  "leans",
  "leany",
  "leaps",
  "leare",
  "lears",
  "leary",
  "leats",
  "leavy",
  "leaze",
  "leben",
  "leccy",
  "ledes",
  "ledgy",
  "ledum",
  "leear",
  "leeks",
  "leeps",
  "leers",
  "leese",
  "leets",
  "leeze",
  "lefte",
  "lefts",
  "leger",
  "leges",
  "legge",
  "leggo",
  "legit",
  "lehrs",
  "lehua",
  "leirs",
  "leish",
  "leman",
  "lemed",
  "lemel",
  "lemes",
  "lemma",
  "lemme",
  "lends",
  "lenes",
  "lengs",
  "lenis",
  "lenos",
  "lense",
  "lenti",
  "lento",
  "leone",
  "lepid",
  "lepra",
  "lepta",
  "lered",
  "leres",
  "lerps",
  "lesbo",
  "leses",
  "lests",
  "letch",
  "lethe",
  "letup",
  "leuch",
  "leuco",
  "leuds",
  "leugh",
  "levas",
  "levee",
  "leves",
  "levin",
  "levis",
  "lewis",
  "lexes",
  "lexis",
  "lezes",
  "lezza",
  "lezzy",
  "liana",
  "liane",
  "liang",
  "liard",
  "liars",
  "liart",
  "liber",
  "libra",
  "libri",
  "lichi",
  "licht",
  "licit",
  "licks",
  "lidar",
  "lidos",
  "liefs",
  "liens",
  "liers",
  "lieus",
  "lieve",
  "lifer",
  "lifes",
  "lifts",
  "ligan",
  "liger",
  "ligge",
  "ligne",
  "liked",
  "liker",
  "likes",
  "likin",
  "lills",
  "lilos",
  "lilts",
  "liman",
  "limas",
  "limax",
  "limba",
  "limbi",
  "limbs",
  "limby",
  "limed",
  "limen",
  "limes",
  "limey",
  "limma",
  "limns",
  "limos",
  "limpa",
  "limps",
  "linac",
  "linch",
  "linds",
  "lindy",
  "lined",
  "lines",
  "liney",
  "linga",
  "lings",
  "lingy",
  "linin",
  "links",
  "linky",
  "linns",
  "linny",
  "linos",
  "lints",
  "linty",
  "linum",
  "linux",
  "lions",
  "lipas",
  "lipes",
  "lipin",
  "lipos",
  "lippy",
  "liras",
  "lirks",
  "lirot",
  "lisks",
  "lisle",
  "lisps",
  "lists",
  "litai",
  "litas",
  "lited",
  "liter",
  "lites",
  "litho",
  "liths",
  "litre",
  "lived",
  "liven",
  "lives",
  "livor",
  "livre",
  "llano",
  "loach",
  "loads",
  "loafs",
  "loams",
  "loans",
  "loast",
  "loave",
  "lobar",
  "lobed",
  "lobes",
  "lobos",
  "lobus",
  "loche",
  "lochs",
  "locie",
  "locis",
  "locks",
  "locos",
  "locum",
  "loden",
  "lodes",
  "loess",
  "lofts",
  "logan",
  "loges",
  "loggy",
  "logia",
  "logie",
  "logoi",
  "logon",
  "logos",
  "lohan",
  "loids",
  "loins",
  "loipe",
  "loirs",
  "lokes",
  "lolls",
  "lolly",
  "lolog",
  "lomas",
  "lomed",
  "lomes",
  "loner",
  "longa",
  "longe",
  "longs",
  "looby",
  "looed",
  "looey",
  "loofa",
  "loofs",
  "looie",
  "looks",
  "looky",
  "looms",
  "loons",
  "loony",
  "loops",
  "loord",
  "loots",
  "loped",
  "loper",
  "lopes",
  "loppy",
  "loral",
  "loran",
  "lords",
  "lordy",
  "lorel",
  "lores",
  "loric",
  "loris",
  "losed",
  "losel",
  "losen",
  "loses",
  "lossy",
  "lotah",
  "lotas",
  "lotes",
  "lotic",
  "lotos",
  "lotsa",
  "lotta",
  "lotte",
  "lotto",
  "lotus",
  "loued",
  "lough",
  "louie",
  "louis",
  "louma",
  "lound",
  "louns",
  "loupe",
  "loups",
  "loure",
  "lours",
  "loury",
  "louts",
  "lovat",
  "loved",
  "loves",
  "lovey",
  "lovie",
  "lowan",
  "lowed",
  "lowes",
  "lownd",
  "lowne",
  "lowns",
  "lowps",
  "lowry",
  "lowse",
  "lowts",
  "loxed",
  "loxes",
  "lozen",
  "luach",
  "luaus",
  "lubed",
  "lubes",
  "lubra",
  "luces",
  "lucks",
  "lucre",
  "ludes",
  "ludic",
  "ludos",
  "luffa",
  "luffs",
  "luged",
  "luger",
  "luges",
  "lulls",
  "lulus",
  "lumas",
  "lumbi",
  "lumme",
  "lummy",
  "lumps",
  "lunas",
  "lunes",
  "lunet",
  "lungi",
  "lungs",
  "lunks",
  "lunts",
  "lupin",
  "lured",
  "lurer",
  "lures",
  "lurex",
  "lurgi",
  "lurgy",
  "lurks",
  "lurry",
  "lurve",
  "luser",
  "lushy",
  "lusks",
  "lusts",
  "lusus",
  "lutea",
  "luted",
  "luter",
  "lutes",
  "luvvy",
  "luxed",
  "luxer",
  "luxes",
  "lweis",
  "lyams",
  "lyard",
  "lyart",
  "lyase",
  "lycea",
  "lycee",
  "lycra",
  "lymes",
  "lynes",
  "lyres",
  "lysed",
  "lyses",
  "lysin",
  "lysis",
  "lysol",
  "lyssa",
  "lyted",
  "lytes",
  "lythe",
  "lytic",
  "lytta",
  "maaed",
  "maare",
  "maars",
  "mabes",
  "macas",
  "maced",
  "macer",
  "maces",
  "mache",
  "machi",
  "machs",
  "macks",
  "macle",
  "macon",
  "madge",
  "madid",
  "madre",
  "maerl",
  "mafic",
  "mages",
  "maggs",
  "magot",
  "magus",
  "mahoe",
  "mahua",
  "mahwa",
  "maids",
  "maiko",
  "maiks",
  "maile",
  "maill",
  "mails",
  "maims",
  "mains",
  "maire",
  "mairs",
  "maise",
  "maist",
  "makar",
  "makes",
  "makis",
  "makos",
  "malam",
  "malar",
  "malas",
  "malax",
  "males",
  "malic",
  "malik",
  "malis",
  "malls",
  "malms",
  "malmy",
  "malts",
  "malty",
  "malus",
  "malva",
  "malwa",
  "mamas",
  "mamba",
  "mamee",
  "mamey",
  "mamie",
  "manas",
  "manat",
  "mandi",
  "maneb",
  "maned",
  "maneh",
  "manes",
  "manet",
  "mangs",
  "manis",
  "manky",
  "manna",
  "manos",
  "manse",
  "manta",
  "manto",
  "manty",
  "manul",
  "manus",
  "mapau",
  "maqui",
  "marae",
  "marah",
  "maras",
  "marcs",
  "mardy",
  "mares",
  "marge",
  "margs",
  "maria",
  "marid",
  "marka",
  "marks",
  "marle",
  "marls",
  "marly",
  "marms",
  "maron",
  "maror",
  "marra",
  "marri",
  "marse",
  "marts",
  "marvy",
  "masas",
  "mased",
  "maser",
  "mases",
  "mashy",
  "masks",
  "massa",
  "massy",
  "masts",
  "masty",
  "masus",
  "matai",
  "mated",
  "mater",
  "mates",
  "maths",
  "matin",
  "matlo",
  "matte",
  "matts",
  "matza",
  "matzo",
  "mauby",
  "mauds",
  "mauls",
  "maund",
  "mauri",
  "mausy",
  "mauts",
  "mauzy",
  "maven",
  "mavie",
  "mavin",
  "mavis",
  "mawed",
  "mawks",
  "mawky",
  "mawns",
  "mawrs",
  "maxed",
  "maxes",
  "maxis",
  "mayan",
  "mayas",
  "mayed",
  "mayos",
  "mayst",
  "mazed",
  "mazer",
  "mazes",
  "mazey",
  "mazut",
  "mbira",
  "meads",
  "meals",
  "meane",
  "means",
  "meany",
  "meare",
  "mease",
  "meath",
  "meats",
  "mebos",
  "mechs",
  "mecks",
  "medii",
  "medle",
  "meeds",
  "meers",
  "meets",
  "meffs",
  "meins",
  "meint",
  "meiny",
  "meith",
  "mekka",
  "melas",
  "melba",
  "melds",
  "melic",
  "melik",
  "mells",
  "melts",
  "melty",
  "memes",
  "memos",
  "menad",
  "mends",
  "mened",
  "menes",
  "menge",
  "mengs",
  "mensa",
  "mense",
  "mensh",
  "menta",
  "mento",
  "menus",
  "meous",
  "meows",
  "merch",
  "mercs",
  "merde",
  "mered",
  "merel",
  "merer",
  "meres",
  "meril",
  "meris",
  "merks",
  "merle",
  "merls",
  "merse",
  "mesal",
  "mesas",
  "mesel",
  "meses",
  "meshy",
  "mesic",
  "mesne",
  "meson",
  "messy",
  "mesto",
  "meted",
  "metes",
  "metho",
  "meths",
  "metic",
  "metif",
  "metis",
  "metol",
  "metre",
  "meuse",
  "meved",
  "meves",
  "mewed",
  "mewls",
  "meynt",
  "mezes",
  "mezze",
  "mezzo",
  "mhorr",
  "miaou",
  "miaow",
  "miasm",
  "miaul",
  "micas",
  "miche",
  "micht",
  "micks",
  "micky",
  "micos",
  "micra",
  "middy",
  "midgy",
  "midis",
  "miens",
  "mieve",
  "miffs",
  "miffy",
  "mifty",
  "miggs",
  "mihas",
  "mihis",
  "miked",
  "mikes",
  "mikra",
  "mikva",
  "milch",
  "milds",
  "miler",
  "miles",
  "milfs",
  "milia",
  "milko",
  "milks",
  "mille",
  "mills",
  "milor",
  "milos",
  "milpa",
  "milts",
  "milty",
  "miltz",
  "mimed",
  "mimeo",
  "mimer",
  "mimes",
  "mimsy",
  "minae",
  "minar",
  "minas",
  "mincy",
  "minds",
  "mined",
  "mines",
  "minge",
  "mings",
  "mingy",
  "minis",
  "minke",
  "minks",
  "minny",
  "minos",
  "mints",
  "mired",
  "mires",
  "mirex",
  "mirid",
  "mirin",
  "mirks",
  "mirky",
  "mirly",
  "miros",
  "mirvs",
  "mirza",
  "misch",
  "misdo",
  "mises",
  "misgo",
  "misos",
  "missa",
  "mists",
  "misty",
  "mitch",
  "miter",
  "mites",
  "mitis",
  "mitre",
  "mitts",
  "mixed",
  "mixen",
  "mixer",
  "mixes",
  "mixte",
  "mixup",
  "mizen",
  "mizzy",
  "mneme",
  "moans",
  "moats",
  "mobby",
  "mobes",
  "mobey",
  "mobie",
  "moble",
  "mochi",
  "mochs",
  "mochy",
  "mocks",
  "moder",
  "modes",
  "modge",
  "modii",
  "modus",
  "moers",
  "mofos",
  "moggy",
  "mohel",
  "mohos",
  "mohrs",
  "mohua",
  "mohur",
  "moile",
  "moils",
  "moira",
  "moire",
  "moits",
  "mojos",
  "mokes",
  "mokis",
  "mokos",
  "molal",
  "molas",
  "molds",
  "moled",
  "moles",
  "molla",
  "molls",
  "molly",
  "molto",
  "molts",
  "molys",
  "momes",
  "momma",
  "mommy",
  "momus",
  "monad",
  "monal",
  "monas",
  "monde",
  "mondo",
  "moner",
  "mongo",
  "mongs",
  "monic",
  "monie",
  "monks",
  "monos",
  "monte",
  "monty",
  "moobs",
  "mooch",
  "moods",
  "mooed",
  "mooks",
  "moola",
  "mooli",
  "mools",
  "mooly",
  "moong",
  "moons",
  "moony",
  "moops",
  "moors",
  "moory",
  "moots",
  "moove",
  "moped",
  "moper",
  "mopes",
  "mopey",
  "moppy",
  "mopsy",
  "mopus",
  "morae",
  "moras",
  "morat",
  "moray",
  "morel",
  "mores",
  "moria",
  "morne",
  "morns",
  "morra",
  "morro",
  "morse",
  "morts",
  "mosed",
  "moses",
  "mosey",
  "mosks",
  "mosso",
  "moste",
  "mosts",
  "moted",
  "moten",
  "motes",
  "motet",
  "motey",
  "moths",
  "mothy",
  "motis",
  "motte",
  "motts",
  "motty",
  "motus",
  "motza",
  "mouch",
  "moues",
  "mould",
  "mouls",
  "moups",
  "moust",
  "mousy",
  "moved",
  "moves",
  "mowas",
  "mowed",
  "mowra",
  "moxas",
  "moxie",
  "moyas",
  "moyle",
  "moyls",
  "mozed",
  "mozes",
  "mozos",
  "mpret",
  "mucho",
  "mucic",
  "mucid",
  "mucin",
  "mucks",
  "mucor",
  "mucro",
  "mudge",
  "mudir",
  "mudra",
  "muffs",
  "mufti",
  "mugga",
  "muggs",
  "muggy",
  "muhly",
  "muids",
  "muils",
  "muirs",
  "muist",
  "mujik",
  "mulct",
  "muled",
  "mules",
  "muley",
  "mulga",
  "mulie",
  "mulla",
  "mulls",
  "mulse",
  "mulsh",
  "mumms",
  "mumps",
  "mumsy",
  "mumus",
  "munga",
  "munge",
  "mungo",
  "mungs",
  "munis",
  "munts",
  "muntu",
  "muons",
  "muras",
  "mured",
  "mures",
  "murex",
  "murid",
  "murks",
  "murls",
  "murly",
  "murra",
  "murre",
  "murri",
  "murrs",
  "murry",
  "murti",
  "murva",
  "musar",
  "musca",
  "mused",
  "muser",
  "muses",
  "muset",
  "musha",
  "musit",
  "musks",
  "musos",
  "musse",
  "mussy",
  "musth",
  "musts",
  "mutch",
  "muted",
  "muter",
  "mutes",
  "mutha",
  "mutis",
  "muton",
  "mutts",
  "muxed",
  "muxes",
  "muzak",
  "muzzy",
  "mvule",
  "myall",
  "mylar",
  "mynah",
  "mynas",
  "myoid",
  "myoma",
  "myope",
  "myops",
  "myopy",
  "mysid",
  "mythi",
  "myths",
  "mythy",
  "myxos",
  "mzees",
  "naams",
  "naans",
  "nabes",
  "nabis",
  "nabks",
  "nabla",
  "nabob",
  "nache",
  "nacho",
  "nacre",
  "nadas",
  "naeve",
  "naevi",
  "naffs",
  "nagas",
  "naggy",
  "nagor",
  "nahal",
  "naiad",
  "naifs",
  "naiks",
  "nails",
  "naira",
  "nairu",
  "naked",
  "naker",
  "nakfa",
  "nalas",
  "naled",
  "nalla",
  "named",
  "namer",
  "names",
  "namma",
  "namus",
  "nanas",
  "nance",
  "nancy",
  "nandu",
  "nanna",
  "nanos",
  "nanua",
  "napas",
  "naped",
  "napes",
  "napoo",
  "nappa",
  "nappe",
  "nappy",
  "naras",
  "narco",
  "narcs",
  "nards",
  "nares",
  "naric",
  "naris",
  "narks",
  "narky",
  "narre",
  "nashi",
  "natch",
  "nates",
  "natis",
  "natty",
  "nauch",
  "naunt",
  "navar",
  "naves",
  "navew",
  "navvy",
  "nawab",
  "nazes",
  "nazir",
  "nazis",
  "nduja",
  "neafe",
  "neals",
  "neaps",
  "nears",
  "neath",
  "neats",
  "nebek",
  "nebel",
  "necks",
  "neddy",
  "needs",
  "neeld",
  "neele",
  "neemb",
  "neems",
  "neeps",
  "neese",
  "neeze",
  "negro",
  "negus",
  "neifs",
  "neist",
  "neive",
  "nelis",
  "nelly",
  "nemas",
  "nemns",
  "nempt",
  "nenes",
  "neons",
  "neper",
  "nepit",
  "neral",
  "nerds",
  "nerka",
  "nerks",
  "nerol",
  "nerts",
  "nertz",
  "nervy",
  "nests",
  "netes",
  "netop",
  "netts",
  "netty",
  "neuks",
  "neume",
  "neums",
  "nevel",
  "neves",
  "nevus",
  "newbs",
  "newed",
  "newel",
  "newie",
  "newsy",
  "newts",
  "nexts",
  "nexus",
  "ngaio",
  "ngana",
  "ngati",
  "ngoma",
  "ngwee",
  "nicad",
  "nicht",
  "nicks",
  "nicol",
  "nidal",
  "nided",
  "nides",
  "nidor",
  "nidus",
  "niefs",
  "nieve",
  "nifes",
  "niffs",
  "niffy",
  "nifty",
  "niger",
  "nighs",
  "nihil",
  "nikab",
  "nikah",
  "nikau",
  "nills",
  "nimbi",
  "nimbs",
  "nimps",
  "niner",
  "nines",
  "ninon",
  "nipas",
  "nippy",
  "niqab",
  "nirls",
  "nirly",
  "nisei",
  "nisse",
  "nisus",
  "niter",
  "nites",
  "nitid",
  "niton",
  "nitre",
  "nitro",
  "nitry",
  "nitty",
  "nival",
  "nixed",
  "nixer",
  "nixes",
  "nixie",
  "nizam",
  "nkosi",
  "noahs",
  "nobby",
  "nocks",
  "nodal",
  "noddy",
  "nodes",
  "nodus",
  "noels",
  "noggs",
  "nohow",
  "noils",
  "noily",
  "noint",
  "noirs",
  "noles",
  "nolls",
  "nolos",
  "nomas",
  "nomen",
  "nomes",
  "nomic",
  "nomoi",
  "nomos",
  "nonas",
  "nonce",
  "nones",
  "nonet",
  "nongs",
  "nonis",
  "nonny",
  "nonyl",
  "noobs",
  "nooit",
  "nooks",
  "nooky",
  "noons",
  "noops",
  "nopal",
  "noria",
  "noris",
  "norks",
  "norma",
  "norms",
  "nosed",
  "noser",
  "noses",
  "notal",
  "noted",
  "noter",
  "notes",
  "notum",
  "nould",
  "noule",
  "nouls",
  "nouns",
  "nouny",
  "noups",
  "novae",
  "novas",
  "novum",
  "noway",
  "nowed",
  "nowls",
  "nowts",
  "nowty",
  "noxal",
  "noxes",
  "noyau",
  "noyed",
  "noyes",
  "nubby",
  "nubia",
  "nucha",
  "nuddy",
  "nuder",
  "nudes",
  "nudie",
  "nudzh",
  "nuffs",
  "nugae",
  "nuked",
  "nukes",
  "nulla",
  "nulls",
  "numbs",
  "numen",
  "nummy",
  "nunny",
  "nurds",
  "nurdy",
  "nurls",
  "nurrs",
  "nutso",
  "nutsy",
  "nyaff",
  "nyala",
  "nying",
  "nyssa",
  "oaked",
  "oaker",
  "oakum",
  "oared",
  "oases",
  "oasis",
  "oasts",
  "oaten",
  "oater",
  "oaths",
  "oaves",
  "obang",
  "obeah",
  "obeli",
  "obeys",
  "obias",
  "obied",
  "obiit",
  "obits",
  "objet",
  "oboes",
  "obole",
  "oboli",
  "obols",
  "occam",
  "ocher",
  "oches",
  "ochre",
  "ochry",
  "ocker",
  "ocrea",
  "octad",
  "octan",
  "octas",
  "octyl",
  "oculi",
  "odahs",
  "odals",
  "odeon",
  "odeum",
  "odism",
  "odist",
  "odium",
  "odors",
  "odour",
  "odyle",
  "odyls",
  "ofays",
  "offed",
  "offie",
  "oflag",
  "ofter",
  "ogams",
  "ogeed",
  "ogees",
  "oggin",
  "ogham",
  "ogive",
  "ogled",
  "ogler",
  "ogles",
  "ogmic",
  "ogres",
  "ohias",
  "ohing",
  "ohmic",
  "ohone",
  "oidia",
  "oiled",
  "oiler",
  "oinks",
  "oints",
  "ojime",
  "okapi",
  "okays",
  "okehs",
  "okras",
  "oktas",
  "oldie",
  "oleic",
  "olein",
  "olent",
  "oleos",
  "oleum",
  "olios",
  "ollas",
  "ollav",
  "oller",
  "ollie",
  "ology",
  "olpae",
  "olpes",
  "omasa",
  "omber",
  "ombus",
  "omens",
  "omers",
  "omits",
  "omlah",
  "omovs",
  "omrah",
  "oncer",
  "onces",
  "oncet",
  "oncus",
  "onely",
  "oners",
  "onery",
  "onium",
  "onkus",
  "onlay",
  "onned",
  "ontic",
  "oobit",
  "oohed",
  "oomph",
  "oonts",
  "ooped",
  "oorie",
  "ooses",
  "ootid",
  "oozed",
  "oozes",
  "opahs",
  "opals",
  "opens",
  "opepe",
  "oping",
  "oppos",
  "opsin",
  "opted",
  "opter",
  "orach",
  "oracy",
  "orals",
  "orang",
  "orant",
  "orate",
  "orbed",
  "orcas",
  "orcin",
  "ordos",
  "oread",
  "orfes",
  "orgia",
  "orgic",
  "orgue",
  "oribi",
  "oriel",
  "orixa",
  "orles",
  "orlon",
  "orlop",
  "ormer",
  "ornis",
  "orpin",
  "orris",
  "ortho",
  "orval",
  "orzos",
  "oscar",
  "oshac",
  "osier",
  "osmic",
  "osmol",
  "ossia",
  "ostia",
  "otaku",
  "otary",
  "ottar",
  "ottos",
  "oubit",
  "oucht",
  "ouens",
  "ouija",
  "oulks",
  "oumas",
  "oundy",
  "oupas",
  "ouped",
  "ouphe",
  "ouphs",
  "ourie",
  "ousel",
  "ousts",
  "outby",
  "outed",
  "outre",
  "outro",
  "outta",
  "ouzel",
  "ouzos",
  "ovals",
  "ovels",
  "ovens",
  "overs",
  "ovist",
  "ovoli",
  "ovolo",
  "ovule",
  "owche",
  "owies",
  "owled",
  "owler",
  "owlet",
  "owned",
  "owres",
  "owrie",
  "owsen",
  "oxbow",
  "oxers",
  "oxeye",
  "oxids",
  "oxies",
  "oxime",
  "oxims",
  "oxlip",
  "oxter",
  "oyers",
  "ozeki",
  "ozzie",
  "paals",
  "paans",
  "pacas",
  "paced",
  "pacer",
  "paces",
  "pacey",
  "pacha",
  "packs",
  "pacos",
  "pacta",
  "pacts",
  "padis",
  "padle",
  "padma",
  "padre",
  "padri",
  "paean",
  "paedo",
  "paeon",
  "paged",
  "pager",
  "pages",
  "pagle",
  "pagod",
  "pagri",
  "paiks",
  "pails",
  "pains",
  "paire",
  "pairs",
  "paisa",
  "paise",
  "pakka",
  "palas",
  "palay",
  "palea",
  "paled",
  "pales",
  "palet",
  "palis",
  "palki",
  "palla",
  "palls",
  "pally",
  "palms",
  "palmy",
  "palpi",
  "palps",
  "palsa",
  "pampa",
  "panax",
  "pance",
  "panda",
  "pands",
  "pandy",
  "paned",
  "panes",
  "panga",
  "pangs",
  "panim",
  "panko",
  "panne",
  "panni",
  "panto",
  "pants",
  "panty",
  "paoli",
  "paolo",
  "papas",
  "papaw",
  "papes",
  "pappi",
  "pappy",
  "parae",
  "paras",
  "parch",
  "pardi",
  "pards",
  "pardy",
  "pared",
  "paren",
  "pareo",
  "pares",
  "pareu",
  "parev",
  "parge",
  "pargo",
  "paris",
  "parki",
  "parks",
  "parky",
  "parle",
  "parly",
  "parma",
  "parol",
  "parps",
  "parra",
  "parrs",
  "parti",
  "parts",
  "parve",
  "parvo",
  "paseo",
  "pases",
  "pasha",
  "pashm",
  "paska",
  "paspy",
  "passe",
  "pasts",
  "pated",
  "paten",
  "pater",
  "pates",
  "paths",
  "patin",
  "patka",
  "patly",
  "patte",
  "patus",
  "pauas",
  "pauls",
  "pavan",
  "paved",
  "paven",
  "paver",
  "paves",
  "pavid",
  "pavin",
  "pavis",
  "pawas",
  "pawaw",
  "pawed",
  "pawer",
  "pawks",
  "pawky",
  "pawls",
  "pawns",
  "paxes",
  "payed",
  "payor",
  "paysd",
  "peage",
  "peags",
  "peaks",
  "peaky",
  "peals",
  "peans",
  "peare",
  "pears",
  "peart",
  "pease",
  "peats",
  "peaty",
  "peavy",
  "peaze",
  "pebas",
  "pechs",
  "pecke",
  "pecks",
  "pecky",
  "pedes",
  "pedis",
  "pedro",
  "peece",
  "peeks",
  "peels",
  "peens",
  "peeoy",
  "peepe",
  "peeps",
  "peers",
  "peery",
  "peeve",
  "peggy",
  "peghs",
  "peins",
  "peise",
  "peize",
  "pekan",
  "pekes",
  "pekin",
  "pekoe",
  "pelas",
  "pelau",
  "peles",
  "pelfs",
  "pells",
  "pelma",
  "pelon",
  "pelta",
  "pelts",
  "pends",
  "pendu",
  "pened",
  "penes",
  "pengo",
  "penie",
  "penis",
  "penks",
  "penna",
  "penni",
  "pents",
  "peons",
  "peony",
  "pepla",
  "pepos",
  "peppy",
  "pepsi",
  "perai",
  "perce",
  "percs",
  "perdu",
  "perdy",
  "perea",
  "peres",
  "peris",
  "perks",
  "perms",
  "perns",
  "perog",
  "perps",
  "perry",
  "perse",
  "perst",
  "perts",
  "perve",
  "pervo",
  "pervs",
  "pervy",
  "pesos",
  "pests",
  "pesty",
  "petar",
  "peter",
  "petit",
  "petre",
  "petri",
  "petti",
  "petto",
  "pewee",
  "pewit",
  "peyse",
  "phage",
  "phang",
  "phare",
  "pharm",
  "pheer",
  "phene",
  "pheon",
  "phese",
  "phial",
  "phish",
  "phizz",
  "phlox",
  "phoca",
  "phono",
  "phons",
  "phots",
  "phpht",
  "phuts",
  "phyla",
  "phyle",
  "piani",
  "pians",
  "pibal",
  "pical",
  "picas",
  "piccy",
  "picks",
  "picot",
  "picra",
  "picul",
  "piend",
  "piers",
  "piert",
  "pieta",
  "piets",
  "piezo",
  "pight",
  "pigmy",
  "piing",
  "pikas",
  "pikau",
  "piked",
  "piker",
  "pikes",
  "pikey",
  "pikis",
  "pikul",
  "pilae",
  "pilaf",
  "pilao",
  "pilar",
  "pilau",
  "pilaw",
  "pilch",
  "pilea",
  "piled",
  "pilei",
  "piler",
  "piles",
  "pilis",
  "pills",
  "pilow",
  "pilum",
  "pilus",
  "pimas",
  "pimps",
  "pinas",
  "pined",
  "pines",
  "pingo",
  "pings",
  "pinko",
  "pinks",
  "pinna",
  "pinny",
  "pinon",
  "pinot",
  "pinta",
  "pints",
  "pinup",
  "pions",
  "piony",
  "pious",
  "pioye",
  "pioys",
  "pipal",
  "pipas",
  "piped",
  "pipes",
  "pipet",
  "pipis",
  "pipit",
  "pippy",
  "pipul",
  "pirai",
  "pirls",
  "pirns",
  "pirog",
  "pisco",
  "pises",
  "pisky",
  "pisos",
  "pissy",
  "piste",
  "pitas",
  "piths",
  "piton",
  "pitot",
  "pitta",
  "piums",
  "pixes",
  "pized",
  "pizes",
  "plaas",
  "plack",
  "plage",
  "plans",
  "plaps",
  "plash",
  "plasm",
  "plast",
  "plats",
  "platt",
  "platy",
  "playa",
  "plays",
  "pleas",
  "plebe",
  "plebs",
  "plena",
  "pleon",
  "plesh",
  "plews",
  "plica",
  "plies",
  "plims",
  "pling",
  "plink",
  "ploat",
  "plods",
  "plong",
  "plonk",
  "plook",
  "plops",
  "plots",
  "plotz",
  "plouk",
  "plows",
  "ploye",
  "ploys",
  "plues",
  "pluff",
  "plugs",
  "plums",
  "plumy",
  "pluot",
  "pluto",
  "plyer",
  "poach",
  "poaka",
  "poake",
  "poboy",
  "pocks",
  "pocky",
  "podal",
  "poddy",
  "podex",
  "podge",
  "podgy",
  "podia",
  "poems",
  "poeps",
  "poets",
  "pogey",
  "pogge",
  "pogos",
  "pohed",
  "poilu",
  "poind",
  "pokal",
  "poked",
  "pokes",
  "pokey",
  "pokie",
  "poled",
  "poler",
  "poles",
  "poley",
  "polio",
  "polis",
  "polje",
  "polks",
  "polls",
  "polly",
  "polos",
  "polts",
  "polys",
  "pombe",
  "pomes",
  "pommy",
  "pomos",
  "pomps",
  "ponce",
  "poncy",
  "ponds",
  "pones",
  "poney",
  "ponga",
  "pongo",
  "pongs",
  "pongy",
  "ponks",
  "ponts",
  "ponty",
  "ponzu",
  "poods",
  "pooed",
  "poofs",
  "poofy",
  "poohs",
  "pooja",
  "pooka",
  "pooks",
  "pools",
  "poons",
  "poops",
  "poopy",
  "poori",
  "poort",
  "poots",
  "poove",
  "poovy",
  "popes",
  "poppa",
  "popsy",
  "porae",
  "poral",
  "pored",
  "porer",
  "pores",
  "porge",
  "porgy",
  "porin",
  "porks",
  "porky",
  "porno",
  "porns",
  "porny",
  "porta",
  "ports",
  "porty",
  "posed",
  "poses",
  "posey",
  "posho",
  "posts",
  "potae",
  "potch",
  "poted",
  "potes",
  "potin",
  "potoo",
  "potsy",
  "potto",
  "potts",
  "potty",
  "pouff",
  "poufs",
  "pouke",
  "pouks",
  "poule",
  "poulp",
  "poult",
  "poupe",
  "poupt",
  "pours",
  "pouts",
  "powan",
  "powin",
  "pownd",
  "powns",
  "powny",
  "powre",
  "poxed",
  "poxes",
  "poynt",
  "poyou",
  "poyse",
  "pozzy",
  "praam",
  "prads",
  "prahu",
  "prams",
  "prana",
  "prang",
  "praos",
  "prase",
  "prate",
  "prats",
  "pratt",
  "praty",
  "praus",
  "prays",
  "predy",
  "preed",
  "prees",
  "preif",
  "prems",
  "premy",
  "prent",
  "preon",
  "preop",
  "preps",
  "presa",
  "prese",
  "prest",
  "preve",
  "prexy",
  "preys",
  "prial",
  "pricy",
  "prief",
  "prier",
  "pries",
  "prigs",
  "prill",
  "prima",
  "primi",
  "primp",
  "prims",
  "primy",
  "prink",
  "prion",
  "prise",
  "priss",
  "proas",
  "probs",
  "prods",
  "proem",
  "profs",
  "progs",
  "proin",
  "proke",
  "prole",
  "proll",
  "promo",
  "proms",
  "pronk",
  "props",
  "prore",
  "proso",
  "pross",
  "prost",
  "prosy",
  "proto",
  "proul",
  "prows",
  "proyn",
  "prunt",
  "pruta",
  "pryer",
  "pryse",
  "pseud",
  "pshaw",
  "psion",
  "psoae",
  "psoai",
  "psoas",
  "psora",
  "psych",
  "psyop",
  "pubco",
  "pubes",
  "pubis",
  "pucan",
  "pucer",
  "puces",
  "pucka",
  "pucks",
  "puddy",
  "pudge",
  "pudic",
  "pudor",
  "pudsy",
  "pudus",
  "puers",
  "puffa",
  "puffs",
  "puggy",
  "pugil",
  "puhas",
  "pujah",
  "pujas",
  "pukas",
  "puked",
  "puker",
  "pukes",
  "pukey",
  "pukka",
  "pukus",
  "pulao",
  "pulas",
  "puled",
  "puler",
  "pules",
  "pulik",
  "pulis",
  "pulka",
  "pulks",
  "pulli",
  "pulls",
  "pully",
  "pulmo",
  "pulps",
  "pulus",
  "pumas",
  "pumie",
  "pumps",
  "punas",
  "punce",
  "punga",
  "pungs",
  "punji",
  "punka",
  "punks",
  "punky",
  "punny",
  "punto",
  "punts",
  "punty",
  "pupae",
  "pupas",
  "pupus",
  "purda",
  "pured",
  "pures",
  "purin",
  "puris",
  "purls",
  "purpy",
  "purrs",
  "pursy",
  "purty",
  "puses",
  "pusle",
  "pussy",
  "putid",
  "puton",
  "putti",
  "putto",
  "putts",
  "puzel",
  "pwned",
  "pyats",
  "pyets",
  "pygal",
  "pyins",
  "pylon",
  "pyned",
  "pynes",
  "pyoid",
  "pyots",
  "pyral",
  "pyran",
  "pyres",
  "pyrex",
  "pyric",
  "pyros",
  "pyxed",
  "pyxes",
  "pyxie",
  "pyxis",
  "pzazz",
  "qadis",
  "qaids",
  "qajaq",
  "qanat",
  "qapik",
  "qibla",
  "qophs",
  "qorma",
  "quads",
  "quaff",
  "quags",
  "quair",
  "quais",
  "quaky",
  "quale",
  "quant",
  "quare",
  "quass",
  "quate",
  "quats",
  "quayd",
  "quays",
  "qubit",
  "quean",
  "queme",
  "quena",
  "quern",
  "queyn",
  "queys",
  "quich",
  "quids",
  "quiff",
  "quims",
  "quina",
  "quine",
  "quino",
  "quins",
  "quint",
  "quipo",
  "quips",
  "quipu",
  "quire",
  "quirt",
  "quist",
  "quits",
  "quoad",
  "quods",
  "quoif",
  "quoin",
  "quoit",
  "quoll",
  "quonk",
  "quops",
  "qursh",
  "quyte",
  "rabat",
  "rabic",
  "rabis",
  "raced",
  "races",
  "rache",
  "racks",
  "racon",
  "radge",
  "radix",
  "radon",
  "raffs",
  "rafts",
  "ragas",
  "ragde",
  "raged",
  "ragee",
  "rager",
  "rages",
  "ragga",
  "raggs",
  "raggy",
  "ragis",
  "ragus",
  "rahed",
  "rahui",
  "raias",
  "raids",
  "raiks",
  "raile",
  "rails",
  "raine",
  "rains",
  "raird",
  "raita",
  "raits",
  "rajas",
  "rajes",
  "raked",
  "rakee",
  "raker",
  "rakes",
  "rakia",
  "rakis",
  "rakus",
  "rales",
  "ramal",
  "ramee",
  "ramet",
  "ramie",
  "ramin",
  "ramis",
  "rammy",
  "ramps",
  "ramus",
  "ranas",
  "rance",
  "rands",
  "ranee",
  "ranga",
  "rangi",
  "rangs",
  "rangy",
  "ranid",
  "ranis",
  "ranke",
  "ranks",
  "rants",
  "raped",
  "raper",
  "rapes",
  "raphe",
  "rappe",
  "rared",
  "raree",
  "rares",
  "rarks",
  "rased",
  "raser",
  "rases",
  "rasps",
  "rasse",
  "rasta",
  "ratal",
  "ratan",
  "ratas",
  "ratch",
  "rated",
  "ratel",
  "rater",
  "rates",
  "ratha",
  "rathe",
  "raths",
  "ratoo",
  "ratos",
  "ratus",
  "rauns",
  "raupo",
  "raved",
  "ravel",
  "raver",
  "raves",
  "ravey",
  "ravin",
  "rawer",
  "rawin",
  "rawly",
  "rawns",
  "raxed",
  "raxes",
  "rayah",
  "rayas",
  "rayed",
  "rayle",
  "rayne",
  "razed",
  "razee",
  "razer",
  "razes",
  "razoo",
  "readd",
  "reads",
  "reais",
  "reaks",
  "realo",
  "reals",
  "reame",
  "reams",
  "reamy",
  "reans",
  "reaps",
  "rears",
  "reast",
  "reata",
  "reate",
  "reave",
  "rebbe",
  "rebec",
  "rebid",
  "rebit",
  "rebop",
  "rebuy",
  "recal",
  "recce",
  "recco",
  "reccy",
  "recit",
  "recks",
  "recon",
  "recta",
  "recti",
  "recto",
  "redan",
  "redds",
  "reddy",
  "reded",
  "redes",
  "redia",
  "redid",
  "redip",
  "redly",
  "redon",
  "redos",
  "redox",
  "redry",
  "redub",
  "redux",
  "redye",
  "reech",
  "reede",
  "reeds",
  "reefs",
  "reefy",
  "reeks",
  "reeky",
  "reels",
  "reens",
  "reest",
  "reeve",
  "refed",
  "refel",
  "reffo",
  "refis",
  "refix",
  "refly",
  "refry",
  "regar",
  "reges",
  "reggo",
  "regie",
  "regma",
  "regna",
  "regos",
  "regur",
  "rehem",
  "reifs",
  "reify",
  "reiki",
  "reiks",
  "reink",
  "reins",
  "reird",
  "reist",
  "reive",
  "rejig",
  "rejon",
  "reked",
  "rekes",
  "rekey",
  "relet",
  "relie",
  "relit",
  "rello",
  "reman",
  "remap",
  "remen",
  "remet",
  "remex",
  "remix",
  "renay",
  "rends",
  "reney",
  "renga",
  "renig",
  "renin",
  "renne",
  "renos",
  "rente",
  "rents",
  "reoil",
  "reorg",
  "repeg",
  "repin",
  "repla",
  "repos",
  "repot",
  "repps",
  "repro",
  "reran",
  "rerig",
  "resat",
  "resaw",
  "resay",
  "resee",
  "reses",
  "resew",
  "resid",
  "resit",
  "resod",
  "resow",
  "resto",
  "rests",
  "resty",
  "resus",
  "retag",
  "retax",
  "retem",
  "retia",
  "retie",
  "retox",
  "revet",
  "revie",
  "rewan",
  "rewax",
  "rewed",
  "rewet",
  "rewin",
  "rewon",
  "rewth",
  "rexes",
  "rezes",
  "rheas",
  "rheme",
  "rheum",
  "rhies",
  "rhime",
  "rhine",
  "rhody",
  "rhomb",
  "rhone",
  "rhumb",
  "rhyne",
  "rhyta",
  "riads",
  "rials",
  "riant",
  "riata",
  "ribas",
  "ribby",
  "ribes",
  "riced",
  "ricer",
  "rices",
  "ricey",
  "richt",
  "ricin",
  "ricks",
  "rides",
  "ridgy",
  "ridic",
  "riels",
  "riems",
  "rieve",
  "rifer",
  "riffs",
  "rifte",
  "rifts",
  "rifty",
  "riggs",
  "rigol",
  "riled",
  "riles",
  "riley",
  "rille",
  "rills",
  "rimae",
  "rimed",
  "rimer",
  "rimes",
  "rimus",
  "rinds",
  "rindy",
  "rines",
  "rings",
  "rinks",
  "rioja",
  "riots",
  "riped",
  "ripes",
  "ripps",
  "rises",
  "rishi",
  "risks",
  "risps",
  "risus",
  "rites",
  "ritts",
  "ritzy",
  "rivas",
  "rived",
  "rivel",
  "riven",
  "rives",
  "riyal",
  "rizas",
  "roads",
  "roams",
  "roans",
  "roars",
  "roary",
  "roate",
  "robed",
  "robes",
  "roble",
  "rocks",
  "roded",
  "rodes",
  "roguy",
  "rohes",
  "roids",
  "roils",
  "roily",
  "roins",
  "roist",
  "rojak",
  "rojis",
  "roked",
  "roker",
  "rokes",
  "rolag",
  "roles",
  "rolfs",
  "rolls",
  "romal",
  "roman",
  "romeo",
  "romps",
  "ronde",
  "rondo",
  "roneo",
  "rones",
  "ronin",
  "ronne",
  "ronte",
  "ronts",
  "roods",
  "roofs",
  "roofy",
  "rooks",
  "rooky",
  "rooms",
  "roons",
  "roops",
  "roopy",
  "roosa",
  "roose",
  "roots",
  "rooty",
  "roped",
  "roper",
  "ropes",
  "ropey",
  "roque",
  "roral",
  "rores",
  "roric",
  "rorid",
  "rorie",
  "rorts",
  "rorty",
  "rosed",
  "roses",
  "roset",
  "roshi",
  "rosin",
  "rosit",
  "rosti",
  "rosts",
  "rotal",
  "rotan",
  "rotas",
  "rotch",
  "roted",
  "rotes",
  "rotis",
  "rotls",
  "roton",
  "rotos",
  "rotte",
  "rouen",
  "roues",
  "roule",
  "rouls",
  "roums",
  "roups",
  "roupy",
  "roust",
  "routh",
  "routs",
  "roved",
  "roven",
  "roves",
  "rowan",
  "rowed",
  "rowel",
  "rowen",
  "rowie",
  "rowme",
  "rownd",
  "rowth",
  "rowts",
  "royne",
  "royst",
  "rozet",
  "rozit",
  "ruana",
  "rubai",
  "rubby",
  "rubel",
  "rubes",
  "rubin",
  "ruble",
  "rubli",
  "rubus",
  "ruche",
  "rucks",
  "rudas",
  "rudds",
  "rudes",
  "rudie",
  "rudis",
  "rueda",
  "ruers",
  "ruffe",
  "ruffs",
  "rugae",
  "rugal",
  "ruggy",
  "ruing",
  "ruins",
  "rukhs",
  "ruled",
  "rules",
  "rumal",
  "rumbo",
  "rumen",
  "rumes",
  "rumly",
  "rummy",
  "rumpo",
  "rumps",
  "rumpy",
  "runch",
  "runds",
  "runed",
  "runes",
  "rungs",
  "runic",
  "runny",
  "runts",
  "runty",
  "rupia",
  "rurps",
  "rurus",
  "rusas",
  "ruses",
  "rushy",
  "rusks",
  "rusma",
  "russe",
  "rusts",
  "ruths",
  "rutin",
  "rutty",
  "ryals",
  "rybat",
  "ryked",
  "rykes",
  "rymme",
  "rynds",
  "ryots",
  "ryper",
  "saags",
  "sabal",
  "sabed",
  "saber",
  "sabes",
  "sabha",
  "sabin",
  "sabir",
  "sable",
  "sabot",
  "sabra",
  "sabre",
  "sacks",
  "sacra",
  "saddo",
  "sades",
  "sadhe",
  "sadhu",
  "sadis",
  "sados",
  "sadza",
  "safed",
  "safes",
  "sagas",
  "sager",
  "sages",
  "saggy",
  "sagos",
  "sagum",
  "saheb",
  "sahib",
  "saice",
  "saick",
  "saics",
  "saids",
  "saiga",
  "sails",
  "saims",
  "saine",
  "sains",
  "sairs",
  "saist",
  "saith",
  "sajou",
  "sakai",
  "saker",
  "sakes",
  "sakia",
  "sakis",
  "sakti",
  "salal",
  "salat",
  "salep",
  "sales",
  "salet",
  "salic",
  "salix",
  "salle",
  "salmi",
  "salol",
  "salop",
  "salpa",
  "salps",
  "salse",
  "salto",
  "salts",
  "salue",
  "salut",
  "saman",
  "samas",
  "samba",
  "sambo",
  "samek",
  "samel",
  "samen",
  "sames",
  "samey",
  "samfu",
  "sammy",
  "sampi",
  "samps",
  "sands",
  "saned",
  "sanes",
  "sanga",
  "sangh",
  "sango",
  "sangs",
  "sanko",
  "sansa",
  "santo",
  "sants",
  "saola",
  "sapan",
  "sapid",
  "sapor",
  "saran",
  "sards",
  "sared",
  "saree",
  "sarge",
  "sargo",
  "sarin",
  "saris",
  "sarks",
  "sarky",
  "sarod",
  "saros",
  "sarus",
  "saser",
  "sasin",
  "sasse",
  "satai",
  "satay",
  "sated",
  "satem",
  "sates",
  "satis",
  "sauba",
  "sauch",
  "saugh",
  "sauls",
  "sault",
  "saunt",
  "saury",
  "sauts",
  "saved",
  "saver",
  "saves",
  "savey",
  "savin",
  "sawah",
  "sawed",
  "sawer",
  "saxes",
  "sayed",
  "sayer",
  "sayid",
  "sayne",
  "sayon",
  "sayst",
  "sazes",
  "scabs",
  "scads",
  "scaff",
  "scags",
  "scail",
  "scala",
  "scall",
  "scams",
  "scand",
  "scans",
  "scapa",
  "scape",
  "scapi",
  "scarp",
  "scars",
  "scart",
  "scath",
  "scats",
  "scatt",
  "scaud",
  "scaup",
  "scaur",
  "scaws",
  "sceat",
  "scena",
  "scend",
  "schav",
  "schmo",
  "schul",
  "schwa",
  "sclim",
  "scody",
  "scogs",
  "scoog",
  "scoot",
  "scopa",
  "scops",
  "scots",
  "scoug",
  "scoup",
  "scowp",
  "scows",
  "scrab",
  "scrae",
  "scrag",
  "scran",
  "scrat",
  "scraw",
  "scray",
  "scrim",
  "scrip",
  "scrob",
  "scrod",
  "scrog",
  "scrow",
  "scudi",
  "scudo",
  "scuds",
  "scuff",
  "scuft",
  "scugs",
  "sculk",
  "scull",
  "sculp",
  "sculs",
  "scums",
  "scups",
  "scurf",
  "scurs",
  "scuse",
  "scuta",
  "scute",
  "scuts",
  "scuzz",
  "scyes",
  "sdayn",
  "sdein",
  "seals",
  "seame",
  "seams",
  "seamy",
  "seans",
  "seare",
  "sears",
  "sease",
  "seats",
  "seaze",
  "sebum",
  "secco",
  "sechs",
  "sects",
  "seder",
  "sedes",
  "sedge",
  "sedgy",
  "sedum",
  "seeds",
  "seeks",
  "seeld",
  "seels",
  "seely",
  "seems",
  "seeps",
  "seepy",
  "seers",
  "sefer",
  "segar",
  "segni",
  "segno",
  "segol",
  "segos",
  "sehri",
  "seifs",
  "seils",
  "seine",
  "seirs",
  "seise",
  "seism",
  "seity",
  "seiza",
  "sekos",
  "sekts",
  "selah",
  "seles",
  "selfs",
  "sella",
  "selle",
  "sells",
  "selva",
  "semee",
  "semes",
  "semie",
  "semis",
  "senas",
  "sends",
  "senes",
  "sengi",
  "senna",
  "senor",
  "sensa",
  "sensi",
  "sente",
  "senti",
  "sents",
  "senvy",
  "senza",
  "sepad",
  "sepal",
  "sepic",
  "sepoy",
  "septa",
  "septs",
  "serac",
  "serai",
  "seral",
  "sered",
  "serer",
  "seres",
  "serfs",
  "serge",
  "seric",
  "serin",
  "serks",
  "seron",
  "serow",
  "serra",
  "serre",
  "serrs",
  "serry",
  "servo",
  "sesey",
  "sessa",
  "setae",
  "setal",
  "seton",
  "setts",
  "sewan",
  "sewar",
  "sewed",
  "sewel",
  "sewen",
  "sewin",
  "sexed",
  "sexer",
  "sexes",
  "sexto",
  "sexts",
  "seyen",
  "shads",
  "shags",
  "shahs",
  "shako",
  "shakt",
  "shalm",
  "shaly",
  "shama",
  "shams",
  "shand",
  "shans",
  "shaps",
  "sharn",
  "shash",
  "shaul",
  "shawm",
  "shawn",
  "shaws",
  "shaya",
  "shays",
  "shchi",
  "sheaf",
  "sheal",
  "sheas",
  "sheds",
  "sheel",
  "shend",
  "shent",
  "sheol",
  "sherd",
  "shere",
  "shero",
  "shets",
  "sheva",
  "shewn",
  "shews",
  "shiai",
  "shiel",
  "shier",
  "shies",
  "shill",
  "shily",
  "shims",
  "shins",
  "ships",
  "shirr",
  "shirs",
  "shish",
  "shiso",
  "shist",
  "shite",
  "shits",
  "shiur",
  "shiva",
  "shive",
  "shivs",
  "shlep",
  "shlub",
  "shmek",
  "shmoe",
  "shoat",
  "shoed",
  "shoer",
  "shoes",
  "shogi",
  "shogs",
  "shoji",
  "shojo",
  "shola",
  "shool",
  "shoon",
  "shoos",
  "shope",
  "shops",
  "shorl",
  "shote",
  "shots",
  "shott",
  "showd",
  "shows",
  "shoyu",
  "shred",
  "shris",
  "shrow",
  "shtik",
  "shtum",
  "shtup",
  "shule",
  "shuln",
  "shuls",
  "shuns",
  "shura",
  "shute",
  "shuts",
  "shwas",
  "shyer",
  "sials",
  "sibbs",
  "sibyl",
  "sices",
  "sicht",
  "sicko",
  "sicks",
  "sicky",
  "sidas",
  "sided",
  "sider",
  "sides",
  "sidha",
  "sidhe",
  "sidle",
  "sield",
  "siens",
  "sient",
  "sieth",
  "sieur",
  "sifts",
  "sighs",
  "sigil",
  "sigla",
  "signa",
  "signs",
  "sijos",
  "sikas",
  "siker",
  "sikes",
  "silds",
  "siled",
  "silen",
  "siler",
  "siles",
  "silex",
  "silks",
  "sills",
  "silos",
  "silts",
  "silty",
  "silva",
  "simar",
  "simas",
  "simba",
  "simis",
  "simps",
  "simul",
  "sinds",
  "sined",
  "sines",
  "sings",
  "sinhs",
  "sinks",
  "sinky",
  "sinus",
  "siped",
  "sipes",
  "sippy",
  "sired",
  "siree",
  "sires",
  "sirih",
  "siris",
  "siroc",
  "sirra",
  "sirup",
  "sisal",
  "sises",
  "sista",
  "sists",
  "sitar",
  "sited",
  "sites",
  "sithe",
  "sitka",
  "situp",
  "situs",
  "siver",
  "sixer",
  "sixes",
  "sixmo",
  "sixte",
  "sizar",
  "sized",
  "sizel",
  "sizer",
  "sizes",
  "skags",
  "skail",
  "skald",
  "skank",
  "skart",
  "skats",
  "skatt",
  "skaws",
  "skean",
  "skear",
  "skeds",
  "skeed",
  "skeef",
  "skeen",
  "skeer",
  "skees",
  "skeet",
  "skegg",
  "skegs",
  "skein",
  "skelf",
  "skell",
  "skelm",
  "skelp",
  "skene",
  "skens",
  "skeos",
  "skeps",
  "skers",
  "skets",
  "skews",
  "skids",
  "skied",
  "skies",
  "skiey",
  "skimo",
  "skims",
  "skink",
  "skins",
  "skint",
  "skios",
  "skips",
  "skirl",
  "skirr",
  "skite",
  "skits",
  "skive",
  "skivy",
  "sklim",
  "skoal",
  "skody",
  "skoff",
  "skogs",
  "skols",
  "skool",
  "skort",
  "skosh",
  "skran",
  "skrik",
  "skuas",
  "skugs",
  "skyed",
  "skyer",
  "skyey",
  "skyfs",
  "skyre",
  "skyrs",
  "skyte",
  "slabs",
  "slade",
  "slaes",
  "slags",
  "slaid",
  "slake",
  "slams",
  "slane",
  "slank",
  "slaps",
  "slart",
  "slats",
  "slaty",
  "slaws",
  "slays",
  "slebs",
  "sleds",
  "sleer",
  "slews",
  "sleys",
  "slier",
  "slily",
  "slims",
  "slipe",
  "slips",
  "slipt",
  "slish",
  "slits",
  "slive",
  "sloan",
  "slobs",
  "sloes",
  "slogs",
  "sloid",
  "slojd",
  "slomo",
  "sloom",
  "sloot",
  "slops",
  "slopy",
  "slorm",
  "slots",
  "slove",
  "slows",
  "sloyd",
  "slubb",
  "slubs",
  "slued",
  "slues",
  "sluff",
  "slugs",
  "sluit",
  "slums",
  "slurb",
  "slurs",
  "sluse",
  "sluts",
  "slyer",
  "slype",
  "smaak",
  "smaik",
  "smalm",
  "smalt",
  "smarm",
  "smaze",
  "smeek",
  "smees",
  "smeik",
  "smeke",
  "smerk",
  "smews",
  "smirr",
  "smirs",
  "smits",
  "smogs",
  "smoko",
  "smolt",
  "smoor",
  "smoot",
  "smore",
  "smorg",
  "smout",
  "smowt",
  "smugs",
  "smurs",
  "smush",
  "smuts",
  "snabs",
  "snafu",
  "snags",
  "snaps",
  "snarf",
  "snark",
  "snars",
  "snary",
  "snash",
  "snath",
  "snaws",
  "snead",
  "sneap",
  "snebs",
  "sneck",
  "sneds",
  "sneed",
  "snees",
  "snell",
  "snibs",
  "snick",
  "snies",
  "snift",
  "snigs",
  "snips",
  "snipy",
  "snirt",
  "snits",
  "snobs",
  "snods",
  "snoek",
  "snoep",
  "snogs",
  "snoke",
  "snood",
  "snook",
  "snool",
  "snoot",
  "snots",
  "snowk",
  "snows",
  "snubs",
  "snugs",
  "snush",
  "snyes",
  "soaks",
  "soaps",
  "soare",
  "soars",
  "soave",
  "sobas",
  "socas",
  "soces",
  "socko",
  "socks",
  "socle",
  "sodas",
  "soddy",
  "sodic",
  "sodom",
  "sofar",
  "sofas",
  "softa",
  "softs",
  "softy",
  "soger",
  "sohur",
  "soils",
  "soily",
  "sojas",
  "sojus",
  "sokah",
  "soken",
  "sokes",
  "sokol",
  "solah",
  "solan",
  "solas",
  "solde",
  "soldi",
  "soldo",
  "solds",
  "soled",
  "solei",
  "soler",
  "soles",
  "solon",
  "solos",
  "solum",
  "solus",
  "soman",
  "somas",
  "sonce",
  "sonde",
  "sones",
  "songs",
  "sonly",
  "sonne",
  "sonny",
  "sonse",
  "sonsy",
  "sooey",
  "sooks",
  "sooky",
  "soole",
  "sools",
  "sooms",
  "soops",
  "soote",
  "soots",
  "sophs",
  "sophy",
  "sopor",
  "soppy",
  "sopra",
  "soral",
  "soras",
  "sorbo",
  "sorbs",
  "sorda",
  "sordo",
  "sords",
  "sored",
  "soree",
  "sorel",
  "sorer",
  "sores",
  "sorex",
  "sorgo",
  "sorns",
  "sorra",
  "sorta",
  "sorts",
  "sorus",
  "soths",
  "sotol",
  "souce",
  "souct",
  "sough",
  "souks",
  "souls",
  "soums",
  "soups",
  "soupy",
  "sours",
  "souse",
  "souts",
  "sowar",
  "sowce",
  "sowed",
  "sowff",
  "sowfs",
  "sowle",
  "sowls",
  "sowms",
  "sownd",
  "sowne",
  "sowps",
  "sowse",
  "sowth",
  "soyas",
  "soyle",
  "soyuz",
  "sozin",
  "spacy",
  "spado",
  "spaed",
  "spaer",
  "spaes",
  "spags",
  "spahi",
  "spail",
  "spain",
  "spait",
  "spake",
  "spald",
  "spale",
  "spall",
  "spalt",
  "spams",
  "spane",
  "spang",
  "spans",
  "spard",
  "spars",
  "spart",
  "spate",
  "spats",
  "spaul",
  "spawl",
  "spaws",
  "spayd",
  "spays",
  "spaza",
  "spazz",
  "speal",
  "spean",
  "speat",
  "specs",
  "spect",
  "speel",
  "speer",
  "speil",
  "speir",
  "speks",
  "speld",
  "spelk",
  "speos",
  "spets",
  "speug",
  "spews",
  "spewy",
  "spial",
  "spica",
  "spick",
  "spics",
  "spide",
  "spier",
  "spies",
  "spiff",
  "spifs",
  "spiks",
  "spile",
  "spims",
  "spina",
  "spink",
  "spins",
  "spirt",
  "spiry",
  "spits",
  "spitz",
  "spivs",
  "splay",
  "splog",
  "spode",
  "spods",
  "spoom",
  "spoor",
  "spoot",
  "spork",
  "sposh",
  "spots",
  "sprad",
  "sprag",
  "sprat",
  "spred",
  "sprew",
  "sprit",
  "sprod",
  "sprog",
  "sprue",
  "sprug",
  "spuds",
  "spued",
  "spuer",
  "spues",
  "spugs",
  "spule",
  "spume",
  "spumy",
  "spurs",
  "sputa",
  "spyal",
  "spyre",
  "squab",
  "squaw",
  "squeg",
  "squid",
  "squit",
  "squiz",
  "stabs",
  "stade",
  "stags",
  "stagy",
  "staig",
  "stane",
  "stang",
  "staph",
  "staps",
  "starn",
  "starr",
  "stars",
  "stats",
  "staun",
  "staws",
  "stays",
  "stean",
  "stear",
  "stedd",
  "stede",
  "steds",
  "steek",
  "steem",
  "steen",
  "steil",
  "stela",
  "stele",
  "stell",
  "steme",
  "stems",
  "stend",
  "steno",
  "stens",
  "stent",
  "steps",
  "stept",
  "stere",
  "stets",
  "stews",
  "stewy",
  "steys",
  "stich",
  "stied",
  "sties",
  "stilb",
  "stile",
  "stime",
  "stims",
  "stimy",
  "stipa",
  "stipe",
  "stire",
  "stirk",
  "stirp",
  "stirs",
  "stive",
  "stivy",
  "stoae",
  "stoai",
  "stoas",
  "stoat",
  "stobs",
  "stoep",
  "stogy",
  "stoit",
  "stoln",
  "stoma",
  "stond",
  "stong",
  "stonk",
  "stonn",
  "stook",
  "stoor",
  "stope",
  "stops",
  "stopt",
  "stoss",
  "stots",
  "stott",
  "stoun",
  "stoup",
  "stour",
  "stown",
  "stowp",
  "stows",
  "strad",
  "strae",
  "strag",
  "strak",
  "strep",
  "strew",
  "stria",
  "strig",
  "strim",
  "strop",
  "strow",
  "stroy",
  "strum",
  "stubs",
  "stude",
  "studs",
  "stull",
  "stulm",
  "stumm",
  "stums",
  "stuns",
  "stupa",
  "stupe",
  "sture",
  "sturt",
  "styed",
  "styes",
  "styli",
  "stylo",
  "styme",
  "stymy",
  "styre",
  "styte",
  "subah",
  "subas",
  "subby",
  "suber",
  "subha",
  "succi",
  "sucks",
  "sucky",
  "sucre",
  "sudds",
  "sudor",
  "sudsy",
  "suede",
  "suent",
  "suers",
  "suete",
  "suets",
  "suety",
  "sugan",
  "sughs",
  "sugos",
  "suhur",
  "suids",
  "suint",
  "suits",
  "sujee",
  "sukhs",
  "sukuk",
  "sulci",
  "sulfa",
  "sulfo",
  "sulks",
  "sulph",
  "sulus",
  "sumis",
  "summa",
  "sumos",
  "sumph",
  "sumps",
  "sunis",
  "sunks",
  "sunna",
  "sunns",
  "sunup",
  "supes",
  "supra",
  "surah",
  "sural",
  "suras",
  "surat",
  "surds",
  "sured",
  "sures",
  "surfs",
  "surfy",
  "surgy",
  "surra",
  "sused",
  "suses",
  "susus",
  "sutor",
  "sutra",
  "sutta",
  "swabs",
  "swack",
  "swads",
  "swage",
  "swags",
  "swail",
  "swain",
  "swale",
  "swaly",
  "swamy",
  "swang",
  "swank",
  "swans",
  "swaps",
  "swapt",
  "sward",
  "sware",
  "swarf",
  "swart",
  "swats",
  "swayl",
  "sways",
  "sweal",
  "swede",
  "sweed",
  "sweel",
  "sweer",
  "swees",
  "sweir",
  "swelt",
  "swerf",
  "sweys",
  "swies",
  "swigs",
  "swile",
  "swims",
  "swink",
  "swipe",
  "swire",
  "swiss",
  "swith",
  "swits",
  "swive",
  "swizz",
  "swobs",
  "swole",
  "swoln",
  "swops",
  "swopt",
  "swots",
  "swoun",
  "sybbe",
  "sybil",
  "syboe",
  "sybow",
  "sycee",
  "syces",
  "sycon",
  "syens",
  "syker",
  "sykes",
  "sylis",
  "sylph",
  "sylva",
  "symar",
  "synch",
  "syncs",
  "synds",
  "syned",
  "synes",
  "synth",
  "syped",
  "sypes",
  "syphs",
  "syrah",
  "syren",
  "sysop",
  "sythe",
  "syver",
  "taals",
  "taata",
  "taber",
  "tabes",
  "tabid",
  "tabis",
  "tabla",
  "tabor",
  "tabun",
  "tabus",
  "tacan",
  "taces",
  "tacet",
  "tache",
  "tacho",
  "tachs",
  "tacks",
  "tacos",
  "tacts",
  "taels",
  "tafia",
  "taggy",
  "tagma",
  "tahas",
  "tahrs",
  "taiga",
  "taigs",
  "taiko",
  "tails",
  "tains",
  "taira",
  "taish",
  "taits",
  "tajes",
  "takas",
  "takes",
  "takhi",
  "takin",
  "takis",
  "takky",
  "talak",
  "talaq",
  "talar",
  "talas",
  "talcs",
  "talcy",
  "talea",
  "taler",
  "tales",
  "talks",
  "talky",
  "talls",
  "talma",
  "talpa",
  "taluk",
  "talus",
  "tamal",
  "tamed",
  "tames",
  "tamin",
  "tamis",
  "tammy",
  "tamps",
  "tanas",
  "tanga",
  "tangi",
  "tangs",
  "tanhs",
  "tanka",
  "tanks",
  "tanky",
  "tanna",
  "tansy",
  "tanti",
  "tanto",
  "tanty",
  "tapas",
  "taped",
  "tapen",
  "tapes",
  "tapet",
  "tapis",
  "tappa",
  "tapus",
  "taras",
  "tardo",
  "tared",
  "tares",
  "targa",
  "targe",
  "tarns",
  "taroc",
  "tarok",
  "taros",
  "tarps",
  "tarre",
  "tarry",
  "tarsi",
  "tarts",
  "tarty",
  "tasar",
  "tased",
  "taser",
  "tases",
  "tasks",
  "tassa",
  "tasse",
  "tasso",
  "tatar",
  "tater",
  "tates",
  "taths",
  "tatie",
  "tatou",
  "tatts",
  "tatus",
  "taube",
  "tauld",
  "tauon",
  "taupe",
  "tauts",
  "tavah",
  "tavas",
  "taver",
  "tawai",
  "tawas",
  "tawed",
  "tawer",
  "tawie",
  "tawse",
  "tawts",
  "taxed",
  "taxer",
  "taxes",
  "taxis",
  "taxol",
  "taxon",
  "taxor",
  "taxus",
  "tayra",
  "tazza",
  "tazze",
  "teade",
  "teads",
  "teaed",
  "teaks",
  "teals",
  "teams",
  "tears",
  "teats",
  "teaze",
  "techs",
  "techy",
  "tecta",
  "teels",
  "teems",
  "teend",
  "teene",
  "teens",
  "teeny",
  "teers",
  "teffs",
  "teggs",
  "tegua",
  "tegus",
  "tehrs",
  "teiid",
  "teils",
  "teind",
  "teins",
  "telae",
  "telco",
  "teles",
  "telex",
  "telia",
  "telic",
  "tells",
  "telly",
  "teloi",
  "telos",
  "temed",
  "temes",
  "tempi",
  "temps",
  "tempt",
  "temse",
  "tench",
  "tends",
  "tendu",
  "tenes",
  "tenge",
  "tenia",
  "tenne",
  "tenno",
  "tenny",
  "tenon",
  "tents",
  "tenty",
  "tenue",
  "tepal",
  "tepas",
  "tepoy",
  "terai",
  "teras",
  "terce",
  "terek",
  "teres",
  "terfe",
  "terfs",
  "terga",
  "terms",
  "terne",
  "terns",
  "terry",
  "terts",
  "tesla",
  "testa",
  "teste",
  "tests",
  "tetes",
  "teths",
  "tetra",
  "tetri",
  "teuch",
  "teugh",
  "tewed",
  "tewel",
  "tewit",
  "texas",
  "texes",
  "texts",
  "thack",
  "thagi",
  "thaim",
  "thale",
  "thali",
  "thana",
  "thane",
  "thang",
  "thans",
  "thanx",
  "tharm",
  "thars",
  "thaws",
  "thawy",
  "thebe",
  "theca",
  "theed",
  "theek",
  "thees",
  "thegn",
  "theic",
  "thein",
  "thelf",
  "thema",
  "thens",
  "theow",
  "therm",
  "thesp",
  "thete",
  "thews",
  "thewy",
  "thigs",
  "thilk",
  "thill",
  "thine",
  "thins",
  "thiol",
  "thirl",
  "thoft",
  "thole",
  "tholi",
  "thoro",
  "thorp",
  "thous",
  "thowl",
  "thrae",
  "thraw",
  "thrid",
  "thrip",
  "throe",
  "thuds",
  "thugs",
  "thuja",
  "thunk",
  "thurl",
  "thuya",
  "thymi",
  "thymy",
  "tians",
  "tiars",
  "tical",
  "ticca",
  "ticed",
  "tices",
  "tichy",
  "ticks",
  "ticky",
  "tiddy",
  "tided",
  "tides",
  "tiers",
  "tiffs",
  "tifos",
  "tifts",
  "tiges",
  "tigon",
  "tikas",
  "tikes",
  "tikis",
  "tikka",
  "tilak",
  "tiled",
  "tiler",
  "tiles",
  "tills",
  "tilly",
  "tilth",
  "tilts",
  "timbo",
  "timed",
  "times",
  "timon",
  "timps",
  "tinas",
  "tinct",
  "tinds",
  "tinea",
  "tined",
  "tines",
  "tinge",
  "tings",
  "tinks",
  "tinny",
  "tints",
  "tinty",
  "tipis",
  "tippy",
  "tired",
  "tires",
  "tirls",
  "tiros",
  "tirrs",
  "titch",
  "titer",
  "titis",
  "titre",
  "titty",
  "titup",
  "tiyin",
  "tiyns",
  "tizes",
  "tizzy",
  "toads",
  "toady",
  "toaze",
  "tocks",
  "tocky",
  "tocos",
  "todde",
  "toeas",
  "toffs",
  "toffy",
  "tofts",
  "tofus",
  "togae",
  "togas",
  "toged",
  "toges",
  "togue",
  "tohos",
  "toile",
  "toils",
  "toing",
  "toise",
  "toits",
  "tokay",
  "toked",
  "toker",
  "tokes",
  "tokos",
  "tolan",
  "tolar",
  "tolas",
  "toled",
  "toles",
  "tolls",
  "tolly",
  "tolts",
  "tolus",
  "tolyl",
  "toman",
  "tombs",
  "tomes",
  "tomia",
  "tommy",
  "tomos",
  "tondi",
  "tondo",
  "toned",
  "toner",
  "tones",
  "toney",
  "tongs",
  "tonka",
  "tonks",
  "tonne",
  "tonus",
  "tools",
  "tooms",
  "toons",
  "toots",
  "toped",
  "topee",
  "topek",
  "toper",
  "topes",
  "tophe",
  "tophi",
  "tophs",
  "topis",
  "topoi",
  "topos",
  "toppy",
  "toque",
  "torah",
  "toran",
  "toras",
  "torcs",
  "tores",
  "toric",
  "torii",
  "toros",
  "torot",
  "torrs",
  "torse",
  "torsi",
  "torsk",
  "torta",
  "torte",
  "torts",
  "tosas",
  "tosed",
  "toses",
  "toshy",
  "tossy",
  "toted",
  "toter",
  "totes",
  "totty",
  "touks",
  "touns",
  "tours",
  "touse",
  "tousy",
  "touts",
  "touze",
  "touzy",
  "towed",
  "towie",
  "towns",
  "towny",
  "towse",
  "towsy",
  "towts",
  "towze",
  "towzy",
  "toyed",
  "toyer",
  "toyon",
  "toyos",
  "tozed",
  "tozes",
  "tozie",
  "trabs",
  "trads",
  "tragi",
  "traik",
  "trams",
  "trank",
  "tranq",
  "trans",
  "trant",
  "trape",
  "traps",
  "trapt",
  "trass",
  "trats",
  "tratt",
  "trave",
  "trayf",
  "trays",
  "treck",
  "treed",
  "treen",
  "trees",
  "trefa",
  "treif",
  "treks",
  "trema",
  "trems",
  "tress",
  "trest",
  "trets",
  "trews",
  "treyf",
  "treys",
  "triac",
  "tride",
  "trier",
  "tries",
  "triff",
  "trigo",
  "trigs",
  "trike",
  "trild",
  "trill",
  "trims",
  "trine",
  "trins",
  "triol",
  "trior",
  "trios",
  "trips",
  "tripy",
  "trist",
  "troad",
  "troak",
  "troat",
  "trock",
  "trode",
  "trods",
  "trogs",
  "trois",
  "troke",
  "tromp",
  "trona",
  "tronc",
  "trone",
  "tronk",
  "trons",
  "trooz",
  "troth",
  "trots",
  "trows",
  "troys",
  "trued",
  "trues",
  "trugo",
  "trugs",
  "trull",
  "tryer",
  "tryke",
  "tryma",
  "tryps",
  "tsade",
  "tsadi",
  "tsars",
  "tsked",
  "tsuba",
  "tsubo",
  "tuans",
  "tuart",
  "tuath",
  "tubae",
  "tubar",
  "tubas",
  "tubby",
  "tubed",
  "tubes",
  "tucks",
  "tufas",
  "tuffe",
  "tuffs",
  "tufts",
  "tufty",
  "tugra",
  "tuile",
  "tuina",
  "tuism",
  "tuktu",
  "tules",
  "tulpa",
  "tulsi",
  "tumid",
  "tummy",
  "tumps",
  "tumpy",
  "tunas",
  "tunds",
  "tuned",
  "tuner",
  "tunes",
  "tungs",
  "tunny",
  "tupek",
  "tupik",
  "tuple",
  "tuque",
  "turds",
  "turfs",
  "turfy",
  "turks",
  "turme",
  "turms",
  "turns",
  "turnt",
  "turps",
  "turrs",
  "tushy",
  "tusks",
  "tusky",
  "tutee",
  "tutti",
  "tutty",
  "tutus",
  "tuxes",
  "tuyer",
  "twaes",
  "twain",
  "twals",
  "twank",
  "twats",
  "tways",
  "tweel",
  "tween",
  "tweep",
  "tweer",
  "twerk",
  "twerp",
  "twier",
  "twigs",
  "twill",
  "twilt",
  "twink",
  "twins",
  "twiny",
  "twire",
  "twirp",
  "twite",
  "twits",
  "twoer",
  "twyer",
  "tyees",
  "tyers",
  "tyiyn",
  "tykes",
  "tyler",
  "tymps",
  "tynde",
  "tyned",
  "tynes",
  "typal",
  "typed",
  "types",
  "typey",
  "typic",
  "typos",
  "typps",
  "typto",
  "tyran",
  "tyred",
  "tyres",
  "tyros",
  "tythe",
  "tzars",
  "udals",
  "udons",
  "ugali",
  "ugged",
  "uhlan",
  "uhuru",
  "ukase",
  "ulama",
  "ulans",
  "ulema",
  "ulmin",
  "ulnad",
  "ulnae",
  "ulnar",
  "ulnas",
  "ulpan",
  "ulvas",
  "ulyie",
  "ulzie",
  "umami",
  "umbel",
  "umber",
  "umble",
  "umbos",
  "umbre",
  "umiac",
  "umiak",
  "umiaq",
  "ummah",
  "ummas",
  "ummed",
  "umped",
  "umphs",
  "umpie",
  "umpty",
  "umrah",
  "umras",
  "unais",
  "unapt",
  "unarm",
  "unary",
  "unaus",
  "unbag",
  "unban",
  "unbar",
  "unbed",
  "unbid",
  "unbox",
  "uncap",
  "unces",
  "uncia",
  "uncos",
  "uncoy",
  "uncus",
  "undam",
  "undee",
  "undos",
  "undug",
  "uneth",
  "unfix",
  "ungag",
  "unget",
  "ungod",
  "ungot",
  "ungum",
  "unhat",
  "unhip",
  "unica",
  "units",
  "unjam",
  "unked",
  "unket",
  "unkid",
  "unlaw",
  "unlay",
  "unled",
  "unlet",
  "unlid",
  "unman",
  "unmew",
  "unmix",
  "unpay",
  "unpeg",
  "unpen",
  "unpin",
  "unred",
  "unrid",
  "unrig",
  "unrip",
  "unsaw",
  "unsay",
  "unsee",
  "unsew",
  "unsex",
  "unsod",
  "untax",
  "untin",
  "unwet",
  "unwit",
  "unwon",
  "upbow",
  "upbye",
  "updos",
  "updry",
  "upend",
  "upjet",
  "uplay",
  "upled",
  "uplit",
  "upped",
  "upran",
  "uprun",
  "upsee",
  "upsey",
  "uptak",
  "upter",
  "uptie",
  "uraei",
  "urali",
  "uraos",
  "urare",
  "urari",
  "urase",
  "urate",
  "urbex",
  "urbia",
  "urdee",
  "ureal",
  "ureas",
  "uredo",
  "ureic",
  "urena",
  "urent",
  "urged",
  "urger",
  "urges",
  "urial",
  "urite",
  "urman",
  "urnal",
  "urned",
  "urped",
  "ursae",
  "ursid",
  "urson",
  "urubu",
  "urvas",
  "users",
  "usnea",
  "usque",
  "usure",
  "usury",
  "uteri",
  "uveal",
  "uveas",
  "uvula",
  "vacua",
  "vaded",
  "vades",
  "vagal",
  "vagus",
  "vails",
  "vaire",
  "vairs",
  "vairy",
  "vakas",
  "vakil",
  "vales",
  "valis",
  "valse",
  "vamps",
  "vampy",
  "vanda",
  "vaned",
  "vanes",
  "vangs",
  "vants",
  "vaped",
  "vaper",
  "vapes",
  "varan",
  "varas",
  "vardy",
  "varec",
  "vares",
  "varia",
  "varix",
  "varna",
  "varus",
  "varve",
  "vasal",
  "vases",
  "vasts",
  "vasty",
  "vatic",
  "vatus",
  "vauch",
  "vaute",
  "vauts",
  "vawte",
  "vaxes",
  "veale",
  "veals",
  "vealy",
  "veena",
  "veeps",
  "veers",
  "veery",
  "vegas",
  "veges",
  "vegie",
  "vegos",
  "vehme",
  "veils",
  "veily",
  "veins",
  "veiny",
  "velar",
  "velds",
  "veldt",
  "veles",
  "vells",
  "velum",
  "venae",
  "venal",
  "vends",
  "vendu",
  "veney",
  "venge",
  "venin",
  "vents",
  "venus",
  "verbs",
  "verra",
  "verry",
  "verst",
  "verts",
  "vertu",
  "vespa",
  "vesta",
  "vests",
  "vetch",
  "vexed",
  "vexer",
  "vexes",
  "vexil",
  "vezir",
  "vials",
  "viand",
  "vibes",
  "vibex",
  "vibey",
  "viced",
  "vices",
  "vichy",
  "viers",
  "views",
  "viewy",
  "vifda",
  "viffs",
  "vigas",
  "vigia",
  "vilde",
  "viler",
  "villi",
  "vills",
  "vimen",
  "vinal",
  "vinas",
  "vinca",
  "vined",
  "viner",
  "vines",
  "vinew",
  "vinic",
  "vinos",
  "vints",
  "viold",
  "viols",
  "vired",
  "vireo",
  "vires",
  "virga",
  "virge",
  "virid",
  "virls",
  "virtu",
  "visas",
  "vised",
  "vises",
  "visie",
  "visne",
  "vison",
  "visto",
  "vitae",
  "vitas",
  "vitex",
  "vitro",
  "vitta",
  "vivas",
  "vivat",
  "vivda",
  "viver",
  "vives",
  "vizir",
  "vizor",
  "vleis",
  "vlies",
  "vlogs",
  "voars",
  "vocab",
  "voces",
  "voddy",
  "vodou",
  "vodun",
  "voema",
  "vogie",
  "voids",
  "voile",
  "voips",
  "volae",
  "volar",
  "voled",
  "voles",
  "volet",
  "volks",
  "volta",
  "volte",
  "volti",
  "volts",
  "volva",
  "volve",
  "vomer",
  "voted",
  "votes",
  "vouge",
  "voulu",
  "vowed",
  "vower",
  "voxel",
  "vozhd",
  "vraic",
  "vrils",
  "vroom",
  "vrous",
  "vrouw",
  "vrows",
  "vuggs",
  "vuggy",
  "vughs",
  "vughy",
  "vulgo",
  "vulns",
  "vulva",
  "vutty",
  "waacs",
  "wacke",
  "wacko",
  "wacks",
  "wadds",
  "waddy",
  "waded",
  "wader",
  "wades",
  "wadge",
  "wadis",
  "wadts",
  "waffs",
  "wafts",
  "waged",
  "wages",
  "wagga",
  "wagyu",
  "wahoo",
  "waide",
  "waifs",
  "waift",
  "wails",
  "wains",
  "wairs",
  "waite",
  "waits",
  "wakas",
  "waked",
  "waken",
  "waker",
  "wakes",
  "wakfs",
  "waldo",
  "walds",
  "waled",
  "waler",
  "wales",
  "walie",
  "walis",
  "walks",
  "walla",
  "walls",
  "wally",
  "walty",
  "wamed",
  "wames",
  "wamus",
  "wands",
  "waned",
  "wanes",
  "waney",
  "wangs",
  "wanks",
  "wanky",
  "wanle",
  "wanly",
  "wanna",
  "wants",
  "wanty",
  "wanze",
  "waqfs",
  "warbs",
  "warby",
  "wards",
  "wared",
  "wares",
  "warez",
  "warks",
  "warms",
  "warns",
  "warps",
  "warre",
  "warst",
  "warts",
  "wases",
  "washy",
  "wasms",
  "wasps",
  "waspy",
  "wasts",
  "watap",
  "watts",
  "wauff",
  "waugh",
  "wauks",
  "waulk",
  "wauls",
  "waurs",
  "waved",
  "waves",
  "wavey",
  "wawas",
  "wawes",
  "wawls",
  "waxed",
  "waxer",
  "waxes",
  "wayed",
  "wazir",
  "wazoo",
  "weald",
  "weals",
  "weamb",
  "weans",
  "wears",
  "webby",
  "weber",
  "wecht",
  "wedel",
  "wedgy",
  "weeds",
  "weeke",
  "weeks",
  "weels",
  "weems",
  "weens",
  "weeny",
  "weeps",
  "weepy",
  "weest",
  "weete",
  "weets",
  "wefte",
  "wefts",
  "weids",
  "weils",
  "weirs",
  "weise",
  "weize",
  "wekas",
  "welds",
  "welke",
  "welks",
  "welkt",
  "wells",
  "welly",
  "welts",
  "wembs",
  "wends",
  "wenge",
  "wenny",
  "wents",
  "weros",
  "wersh",
  "wests",
  "wetas",
  "wetly",
  "wexed",
  "wexes",
  "whamo",
  "whams",
  "whang",
  "whaps",
  "whare",
  "whata",
  "whats",
  "whaup",
  "whaur",
  "wheal",
  "whear",
  "wheen",
  "wheep",
  "wheft",
  "whelk",
  "whelm",
  "whens",
  "whets",
  "whews",
  "wheys",
  "whids",
  "whift",
  "whigs",
  "whilk",
  "whims",
  "whins",
  "whios",
  "whips",
  "whipt",
  "whirr",
  "whirs",
  "whish",
  "whiss",
  "whist",
  "whits",
  "whity",
  "whizz",
  "whomp",
  "whoof",
  "whoot",
  "whops",
  "whore",
  "whorl",
  "whort",
  "whoso",
  "whows",
  "whump",
  "whups",
  "whyda",
  "wicca",
  "wicks",
  "wicky",
  "widdy",
  "wides",
  "wiels",
  "wifed",
  "wifes",
  "wifey",
  "wifie",
  "wifty",
  "wigan",
  "wigga",
  "wiggy",
  "wikis",
  "wilco",
  "wilds",
  "wiled",
  "wiles",
  "wilga",
  "wilis",
  "wilja",
  "wills",
  "wilts",
  "wimps",
  "winds",
  "wined",
  "wines",
  "winey",
  "winge",
  "wings",
  "wingy",
  "winks",
  "winna",
  "winns",
  "winos",
  "winze",
  "wiped",
  "wiper",
  "wipes",
  "wired",
  "wirer",
  "wires",
  "wirra",
  "wised",
  "wises",
  "wisha",
  "wisht",
  "wisps",
  "wists",
  "witan",
  "wited",
  "wites",
  "withe",
  "withs",
  "withy",
  "wived",
  "wiver",
  "wives",
  "wizen",
  "wizes",
  "woads",
  "woald",
  "wocks",
  "wodge",
  "woful",
  "wojus",
  "woker",
  "wokka",
  "wolds",
  "wolfs",
  "wolly",
  "wolve",
  "wombs",
  "womby",
  "womyn",
  "wonga",
  "wongi",
  "wonks",
  "wonky",
  "wonts",
  "woods",
  "wooed",
  "woofs",
  "woofy",
  "woold",
  "wools",
  "woons",
  "woops",
  "woopy",
  "woose",
  "woosh",
  "wootz",
  "words",
  "works",
  "worms",
  "wormy",
  "worts",
  "wowed",
  "wowee",
  "woxen",
  "wrang",
  "wraps",
  "wrapt",
  "wrast",
  "wrate",
  "wrawl",
  "wrens",
  "wrick",
  "wried",
  "wrier",
  "wries",
  "writs",
  "wroke",
  "wroot",
  "wroth",
  "wryer",
  "wuddy",
  "wudus",
  "wulls",
  "wurst",
  "wuses",
  "wushu",
  "wussy",
  "wuxia",
  "wyled",
  "wyles",
  "wynds",
  "wynns",
  "wyted",
  "wytes",
  "xebec",
  "xenia",
  "xenic",
  "xenon",
  "xeric",
  "xerox",
  "xerus",
  "xoana",
  "xrays",
  "xylan",
  "xylem",
  "xylic",
  "xylol",
  "xylyl",
  "xysti",
  "xysts",
  "yaars",
  "yabas",
  "yabba",
  "yabby",
  "yacca",
  "yacka",
  "yacks",
  "yaffs",
  "yager",
  "yages",
  "yagis",
  "yahoo",
  "yaird",
  "yakka",
  "yakow",
  "yales",
  "yamen",
  "yampy",
  "yamun",
  "yangs",
  "yanks",
  "yapok",
  "yapon",
  "yapps",
  "yappy",
  "yarak",
  "yarco",
  "yards",
  "yarer",
  "yarfa",
  "yarks",
  "yarns",
  "yarrs",
  "yarta",
  "yarto",
  "yates",
  "yauds",
  "yauld",
  "yaups",
  "yawed",
  "yawey",
  "yawls",
  "yawns",
  "yawny",
  "yawps",
  "ybore",
  "yclad",
  "ycled",
  "ycond",
  "ydrad",
  "ydred",
  "yeads",
  "yeahs",
  "yealm",
  "yeans",
  "yeard",
  "years",
  "yecch",
  "yechs",
  "yechy",
  "yedes",
  "yeeds",
  "yeesh",
  "yeggs",
  "yelks",
  "yells",
  "yelms",
  "yelps",
  "yelts",
  "yenta",
  "yente",
  "yerba",
  "yerds",
  "yerks",
  "yeses",
  "yesks",
  "yests",
  "yesty",
  "yetis",
  "yetts",
  "yeuks",
  "yeuky",
  "yeven",
  "yeves",
  "yewen",
  "yexed",
  "yexes",
  "yfere",
  "yiked",
  "yikes",
  "yills",
  "yince",
  "yipes",
  "yippy",
  "yirds",
  "yirks",
  "yirrs",
  "yirth",
  "yites",
  "yitie",
  "ylems",
  "ylike",
  "ylkes",
  "ymolt",
  "ympes",
  "yobbo",
  "yobby",
  "yocks",
  "yodel",
  "yodhs",
  "yodle",
  "yogas",
  "yogee",
  "yoghs",
  "yogic",
  "yogin",
  "yogis",
  "yoick",
  "yojan",
  "yoked",
  "yokel",
  "yoker",
  "yokes",
  "yokul",
  "yolks",
  "yolky",
  "yomim",
  "yomps",
  "yonic",
  "yonis",
  "yonks",
  "yoofs",
  "yoops",
  "yores",
  "yorks",
  "yorps",
  "youks",
  "yourn",
  "yours",
  "yourt",
  "youse",
  "yowed",
  "yowes",
  "yowie",
  "yowls",
  "yowza",
  "yrapt",
  "yrent",
  "yrivd",
  "yrneh",
  "ysame",
  "ytost",
  "yuans",
  "yucas",
  "yucca",
  "yucch",
  "yucko",
  "yucks",
  "yucky",
  "yufts",
  "yugas",
  "yuked",
  "yukes",
  "yukky",
  "yukos",
  "yulan",
  "yules",
  "yummo",
  "yummy",
  "yumps",
  "yupon",
  "yuppy",
  "yurta",
  "yurts",
  "yuzus",
  "zabra",
  "zacks",
  "zaida",
  "zaidy",
  "zaire",
  "zakat",
  "zaman",
  "zambo",
  "zamia",
  "zanja",
  "zante",
  "zanza",
  "zanze",
  "zappy",
  "zarfs",
  "zaris",
  "zatis",
  "zaxes",
  "zayin",
  "zazen",
  "zeals",
  "zebec",
  "zebub",
  "zebus",
  "zedas",
  "zeins",
  "zendo",
  "zerda",
  "zerks",
  "zeros",
  "zests",
  "zetas",
  "zexes",
  "zezes",
  "zhomo",
  "zibet",
  "ziffs",
  "zigan",
  "zilas",
  "zilch",
  "zilla",
  "zills",
  "zimbi",
  "zimbs",
  "zinco",
  "zincs",
  "zincy",
  "zineb",
  "zines",
  "zings",
  "zingy",
  "zinke",
  "zinky",
  "zippo",
  "zippy",
  "ziram",
  "zitis",
  "zizel",
  "zizit",
  "zlote",
  "zloty",
  "zoaea",
  "zobos",
  "zobus",
  "zocco",
  "zoeae",
  "zoeal",
  "zoeas",
  "zoism",
  "zoist",
  "zombi",
  "zonae",
  "zonda",
  "zoned",
  "zoner",
  "zones",
  "zonks",
  "zooea",
  "zooey",
  "zooid",
  "zooks",
  "zooms",
  "zoons",
  "zooty",
  "zoppa",
  "zoppo",
  "zoril",
  "zoris",
  "zorro",
  "zouks",
  "zowee",
  "zowie",
  "zulus",
  "zupan",
  "zupas",
  "zuppa",
  "zurfs",
  "zuzim",
  "zygal",
  "zygon",
  "zymes",
  "zymic",
  "cigar",
  "rebut",
  "sissy",
  "humph",
  "awake",
  "blush",
  "focal",
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "agora",
  "aroma",
  "caulk",
  "shake",
  "pupal",
  "dodge",
  "swill",
  "tacit",
  "other",
  "thorn",
  "trove",
  "bloke",
  "vivid",
  "spill",
  "chant",
  "choke",
  "rupee",
  "nasty",
  "mourn",
  "ahead",
  "brine",
  "cloth",
  "hoard",
  "sweet",
  "month",
  "lapse",
  "watch",
  "today",
  "focus",
  "smelt",
  "tease",
  "cater",
  "movie",
  "lynch",
  "saute",
  "allow",
  "renew",
  "their",
  "slosh",
  "purge",
  "chest",
  "depot",
  "epoxy",
  "nymph",
  "found",
  "shall",
  "harry",
  "stove",
  "lowly",
  "snout",
  "trope",
  "fewer",
  "shawl",
  "natal",
  "fibre",
  "comma",
  "foray",
  "scare",
  "stair",
  "black",
  "squad",
  "royal",
  "chunk",
  "mince",
  "slave",
  "shame",
  "cheek",
  "ample",
  "flair",
  "foyer",
  "cargo",
  "oxide",
  "plant",
  "olive",
  "inert",
  "askew",
  "heist",
  "shown",
  "zesty",
  "hasty",
  "trash",
  "fella",
  "larva",
  "forgo",
  "story",
  "hairy",
  "train",
  "homer",
  "badge",
  "midst",
  "canny",
  "fetus",
  "butch",
  "farce",
  "slung",
  "tipsy",
  "metal",
  "yield",
  "delve",
  "being",
  "scour",
  "glass",
  "gamer",
  "scrap",
  "money",
  "hinge",
  "album",
  "vouch",
  "asset",
  "tiara",
  "crept",
  "bayou",
  "atoll",
  "manor",
  "creak",
  "showy",
  "phase",
  "froth",
  "depth",
  "gloom",
  "flood",
  "trait",
  "girth",
  "piety",
  "payer",
  "goose",
  "float",
  "donor",
  "atone",
  "primo",
  "apron",
  "blown",
  "cacao",
  "loser",
  "input",
  "gloat",
  "awful",
  "brink",
  "smite",
  "beady",
  "rusty",
  "retro",
  "droll",
  "gawky",
  "hutch",
  "pinto",
  "gaily",
  "egret",
  "lilac",
  "sever",
  "field",
  "fluff",
  "hydro",
  "flack",
  "agape",
  "wench",
  "voice",
  "stead",
  "stalk",
  "berth",
  "madam",
  "night",
  "bland",
  "liver",
  "wedge",
  "augur",
  "roomy",
  "wacky",
  "flock",
  "angry",
  "bobby",
  "trite",
  "aphid",
  "tryst",
  "midge",
  "power",
  "elope",
  "cinch",
  "motto",
  "stomp",
  "upset",
  "bluff",
  "cramp",
  "quart",
  "coyly",
  "youth",
  "rhyme",
  "buggy",
  "alien",
  "smear",
  "unfit",
  "patty",
  "cling",
  "glean",
  "label",
  "hunky",
  "khaki",
  "poker",
  "gruel",
  "twice",
  "twang",
  "shrug",
  "treat",
  "unlit",
  "waste",
  "merit",
  "woven",
  "octal",
  "needy",
  "clown",
  "widow",
  "irony",
  "ruder",
  "gauze",
  "chief",
  "onset",
  "prize",
  "fungi",
  "charm",
  "gully",
  "inter",
  "whoop",
  "taunt",
  "leery",
  "class",
  "theme",
  "lofty",
  "tibia",
  "booze",
  "alpha",
  "thyme",
  "eclat",
  "doubt",
  "parer",
  "chute",
  "stick",
  "trice",
  "alike",
  "sooth",
  "recap",
  "saint",
  "liege",
  "glory",
  "grate",
  "admit",
  "brisk",
  "soggy",
  "usurp",
  "scald",
  "scorn",
  "leave",
  "twine",
  "sting",
  "bough",
  "marsh",
  "sloth",
  "dandy",
  "vigor",
  "howdy",
  "enjoy",
  "valid",
  "ionic",
  "equal",
  "unset",
  "floor",
  "catch",
  "spade",
  "stein",
  "exist",
  "quirk",
  "denim",
  "grove",
  "spiel",
  "mummy",
  "fault",
  "foggy",
  "flout",
  "carry",
  "sneak",
  "libel",
  "waltz",
  "aptly",
  "piney",
  "inept",
  "aloud",
  "photo",
  "dream",
  "stale",
  "vomit",
  "ombre",
  "fanny",
  "unite",
  "snarl",
  "baker",
  "there",
  "glyph",
  "pooch",
  "hippy",
  "spell",
  "folly",
  "louse",
  "gulch",
  "vault",
  "godly",
  "threw",
  "fleet",
  "grave",
  "inane",
  "shock",
  "crave",
  "spite",
  "valve",
  "skimp",
  "claim",
  "rainy",
  "musty",
  "pique",
  "daddy",
  "quasi",
  "arise",
  "aging",
  "valet",
  "opium",
  "avert",
  "stuck",
  "recut",
  "mulch",
  "genre",
  "plume",
  "rifle",
  "count",
  "incur",
  "total",
  "wrest",
  "mocha",
  "deter",
  "study",
  "lover",
  "safer",
  "rivet",
  "funny",
  "smoke",
  "mound",
  "undue",
  "sedan",
  "pagan",
  "swine",
  "guile",
  "gusty",
  "equip",
  "tough",
  "canoe",
  "chaos",
  "covet",
  "human",
  "udder",
  "lunch",
  "blast",
  "stray",
  "manga",
  "melee",
  "lefty",
  "quick",
  "paste",
  "given",
  "octet",
  "risen",
  "groan",
  "leaky",
  "grind",
  "carve",
  "loose",
  "sadly",
  "spilt",
  "apple",
  "slack",
  "honey",
  "final",
  "sheen",
  "eerie",
  "minty",
  "slick",
  "derby",
  "wharf",
  "spelt",
  "coach",
  "erupt",
  "singe",
  "price",
  "spawn",
  "fairy",
  "jiffy",
  "filmy",
  "stack",
  "chose",
  "sleep",
  "ardor",
  "nanny",
  "niece",
  "woozy",
  "handy",
  "grace",
  "ditto",
  "stank",
  "cream",
  "usual",
  "diode",
  "valor",
  "angle",
  "ninja",
  "muddy",
  "chase",
  "reply",
  "prone",
  "spoil",
  "heart",
  "shade",
  "diner",
  "arson",
  "onion",
  "sleet",
  "dowel",
  "couch",
  "palsy",
  "bowel",
  "smile",
  "evoke",
  "creek",
  "lance",
  "eagle",
  "idiot",
  "siren",
  "built",
  "embed",
  "award",
  "dross",
  "annul",
  "goody",
  "frown",
  "patio",
  "laden",
  "humid",
  "elite",
  "lymph",
  "edify",
  "might",
  "reset",
  "visit",
  "gusto",
  "purse",
  "vapor",
  "crock",
  "write",
  "sunny",
  "loath",
  "chaff",
  "slide",
  "queer",
  "venom",
  "stamp",
  "sorry",
  "still",
  "acorn",
  "aping",
  "pushy",
  "tamer",
  "hater",
  "mania",
  "awoke",
  "brawn",
  "swift",
  "exile",
  "birch",
  "lucky",
  "freer",
  "risky",
  "ghost",
  "plier",
  "lunar",
  "winch",
  "snare",
  "nurse",
  "house",
  "borax",
  "nicer",
  "lurch",
  "exalt",
  "about",
  "savvy",
  "toxin",
  "tunic",
  "pried",
  "inlay",
  "chump",
  "lanky",
  "cress",
  "eater",
  "elude",
  "cycle",
  "kitty",
  "boule",
  "moron",
  "tenet",
  "place",
  "lobby",
  "plush",
  "vigil",
  "index",
  "blink",
  "clung",
  "qualm",
  "croup",
  "clink",
  "juicy",
  "stage",
  "decay",
  "nerve",
  "flier",
  "shaft",
  "crook",
  "clean",
  "china",
  "ridge",
  "vowel",
  "gnome",
  "snuck",
  "icing",
  "spiny",
  "rigor",
  "snail",
  "flown",
  "rabid",
  "prose",
  "thank",
  "poppy",
  "budge",
  "fiber",
  "moldy",
  "dowdy",
  "kneel",
  "track",
  "caddy",
  "quell",
  "dumpy",
  "paler",
  "swore",
  "rebar",
  "scuba",
  "splat",
  "flyer",
  "horny",
  "mason",
  "doing",
  "ozone",
  "amply",
  "molar",
  "ovary",
  "beset",
  "queue",
  "cliff",
  "magic",
  "truce",
  "sport",
  "fritz",
  "edict",
  "twirl",
  "verse",
  "llama",
  "eaten",
  "range",
  "whisk",
  "hovel",
  "rehab",
  "macaw",
  "sigma",
  "spout",
  "verve",
  "sushi",
  "dying",
  "fetid",
  "brain",
  "buddy",
  "thump",
  "scion",
  "candy",
  "chord",
  "basin",
  "march",
  "crowd",
  "arbor",
  "gayly",
  "musky",
  "stain",
  "dally",
  "bless",
  "bravo",
  "stung",
  "title",
  "ruler",
  "kiosk",
  "blond",
  "ennui",
  "layer",
  "fluid",
  "tatty",
  "score",
  "cutie",
  "zebra",
  "barge",
  "matey",
  "bluer",
  "aider",
  "shook",
  "river",
  "privy",
  "betel",
  "frisk",
  "bongo",
  "begun",
  "azure",
  "weave",
  "genie",
  "sound",
  "glove",
  "braid",
  "scope",
  "wryly",
  "rover",
  "assay",
  "ocean",
  "bloom",
  "irate",
  "later",
  "woken",
  "silky",
  "wreck",
  "dwelt",
  "slate",
  "smack",
  "solid",
  "amaze",
  "hazel",
  "wrist",
  "jolly",
  "globe",
  "flint",
  "rouse",
  "civil",
  "vista",
  "relax",
  "cover",
  "alive",
  "beech",
  "jetty",
  "bliss",
  "vocal",
  "often",
  "dolly",
  "eight",
  "joker",
  "since",
  "event",
  "ensue",
  "shunt",
  "diver",
  "poser",
  "worst",
  "sweep",
  "alley",
  "creed",
  "anime",
  "leafy",
  "bosom",
  "dunce",
  "stare",
  "pudgy",
  "waive",
  "choir",
  "stood",
  "spoke",
  "outgo",
  "delay",
  "bilge",
  "ideal",
  "clasp",
  "seize",
  "hotly",
  "laugh",
  "sieve",
  "block",
  "meant",
  "grape",
  "noose",
  "hardy",
  "shied",
  "drawl",
  "daisy",
  "putty",
  "strut",
  "burnt",
  "tulip",
  "crick",
  "idyll",
  "vixen",
  "furor",
  "geeky",
  "cough",
  "naive",
  "shoal",
  "stork",
  "bathe",
  "aunty",
  "check",
  "prime",
  "brass",
  "outer",
  "furry",
  "razor",
  "elect",
  "evict",
  "imply",
  "demur",
  "quota",
  "haven",
  "cavil",
  "swear",
  "crump",
  "dough",
  "gavel",
  "wagon",
  "salon",
  "nudge",
  "harem",
  "pitch",
  "sworn",
  "pupil",
  "excel",
  "stony",
  "cabin",
  "unzip",
  "queen",
  "trout",
  "polyp",
  "earth",
  "storm",
  "until",
  "taper",
  "enter",
  "child",
  "adopt",
  "minor",
  "fatty",
  "husky",
  "brave",
  "filet",
  "slime",
  "glint",
  "tread",
  "steal",
  "regal",
  "guest",
  "every",
  "murky",
  "share",
  "spore",
  "hoist",
  "buxom",
  "inner",
  "otter",
  "dimly",
  "level",
  "sumac",
  "donut",
  "stilt",
  "arena",
  "sheet",
  "scrub",
  "fancy",
  "slimy",
  "pearl",
  "silly",
  "porch",
  "dingo",
  "sepia",
  "amble",
  "shady",
  "bread",
  "friar",
  "reign",
  "dairy",
  "quill",
  "cross",
  "brood",
  "tuber",
  "shear",
  "posit",
  "blank",
  "villa",
  "shank",
  "piggy",
  "freak",
  "which",
  "among",
  "fecal",
  "shell",
  "would",
  "algae",
  "large",
  "rabbi",
  "agony",
  "amuse",
  "bushy",
  "copse",
  "swoon",
  "knife",
  "pouch",
  "ascot",
  "plane",
  "crown",
  "urban",
  "snide",
  "relay",
  "abide",
  "viola",
  "rajah",
  "straw",
  "dilly",
  "crash",
  "amass",
  "third",
  "trick",
  "tutor",
  "woody",
  "blurb",
  "grief",
  "disco",
  "where",
  "sassy",
  "beach",
  "sauna",
  "comic",
  "clued",
  "creep",
  "caste",
  "graze",
  "snuff",
  "frock",
  "gonad",
  "drunk",
  "prong",
  "lurid",
  "steel",
  "halve",
  "buyer",
  "vinyl",
  "utile",
  "smell",
  "adage",
  "worry",
  "tasty",
  "local",
  "trade",
  "finch",
  "ashen",
  "modal",
  "gaunt",
  "clove",
  "enact",
  "adorn",
  "roast",
  "speck",
  "sheik",
  "missy",
  "grunt",
  "snoop",
  "party",
  "touch",
  "mafia",
  "emcee",
  "array",
  "south",
  "vapid",
  "jelly",
  "skulk",
  "angst",
  "tubal",
  "lower",
  "crest",
  "sweat",
  "cyber",
  "adore",
  "tardy",
  "swami",
  "notch",
  "groom",
  "roach",
  "hitch",
  "young",
  "align",
  "ready",
  "frond",
  "strap",
  "puree",
  "realm",
  "venue",
  "swarm",
  "offer",
  "seven",
  "dryer",
  "diary",
  "dryly",
  "drank",
  "acrid",
  "heady",
  "theta",
  "junto",
  "pixie",
  "quoth",
  "bonus",
  "shalt",
  "penne",
  "amend",
  "datum",
  "build",
  "piano",
  "shelf",
  "lodge",
  "suing",
  "rearm",
  "coral",
  "ramen",
  "worth",
  "psalm",
  "infer",
  "overt",
  "mayor",
  "ovoid",
  "glide",
  "usage",
  "poise",
  "randy",
  "chuck",
  "prank",
  "fishy",
  "tooth",
  "ether",
  "drove",
  "idler",
  "swath",
  "stint",
  "while",
  "begat",
  "apply",
  "slang",
  "tarot",
  "radar",
  "credo",
  "aware",
  "canon",
  "shift",
  "timer",
  "bylaw",
  "serum",
  "three",
  "steak",
  "iliac",
  "shirk",
  "blunt",
  "puppy",
  "penal",
  "joist",
  "bunny",
  "shape",
  "beget",
  "wheel",
  "adept",
  "stunt",
  "stole",
  "topaz",
  "chore",
  "fluke",
  "afoot",
  "bloat",
  "bully",
  "dense",
  "caper",
  "sneer",
  "boxer",
  "jumbo",
  "lunge",
  "space",
  "avail",
  "short",
  "slurp",
  "loyal",
  "flirt",
  "pizza",
  "conch",
  "tempo",
  "droop",
  "plate",
  "bible",
  "plunk",
  "afoul",
  "savoy",
  "steep",
  "agile",
  "stake",
  "dwell",
  "knave",
  "beard",
  "arose",
  "motif",
  "smash",
  "broil",
  "glare",
  "shove",
  "baggy",
  "mammy",
  "swamp",
  "along",
  "rugby",
  "wager",
  "quack",
  "squat",
  "snaky",
  "debit",
  "mange",
  "skate",
  "ninth",
  "joust",
  "tramp",
  "spurn",
  "medal",
  "micro",
  "rebel",
  "flank",
  "learn",
  "nadir",
  "maple",
  "comfy",
  "remit",
  "gruff",
  "ester",
  "least",
  "mogul",
  "fetch",
  "cause",
  "oaken",
  "aglow",
  "meaty",
  "gaffe",
  "shyly",
  "racer",
  "prowl",
  "thief",
  "stern",
  "poesy",
  "rocky",
  "tweet",
  "waist",
  "spire",
  "grope",
  "havoc",
  "patsy",
  "truly",
  "forty",
  "deity",
  "uncle",
  "swish",
  "giver",
  "preen",
  "bevel",
  "lemur",
  "draft",
  "slope",
  "annoy",
  "lingo",
  "bleak",
  "ditty",
  "curly",
  "cedar",
  "dirge",
  "grown",
  "horde",
  "drool",
  "shuck",
  "crypt",
  "cumin",
  "stock",
  "gravy",
  "locus",
  "wider",
  "breed",
  "quite",
  "chafe",
  "cache",
  "blimp",
  "deign",
  "fiend",
  "logic",
  "cheap",
  "elide",
  "rigid",
  "false",
  "renal",
  "pence",
  "rowdy",
  "shoot",
  "blaze",
  "envoy",
  "posse",
  "brief",
  "never",
  "abort",
  "mouse",
  "mucky",
  "sulky",
  "fiery",
  "media",
  "trunk",
  "yeast",
  "clear",
  "skunk",
  "scalp",
  "bitty",
  "cider",
  "koala",
  "duvet",
  "segue",
  "creme",
  "super",
  "grill",
  "after",
  "owner",
  "ember",
  "reach",
  "nobly",
  "empty",
  "speed",
  "gipsy",
  "recur",
  "smock",
  "dread",
  "merge",
  "burst",
  "kappa",
  "amity",
  "shaky",
  "hover",
  "carol",
  "snort",
  "synod",
  "faint",
  "haunt",
  "flour",
  "chair",
  "detox",
  "shrew",
  "tense",
  "plied",
  "quark",
  "burly",
  "novel",
  "waxen",
  "stoic",
  "jerky",
  "blitz",
  "beefy",
  "lyric",
  "hussy",
  "towel",
  "quilt",
  "below",
  "bingo",
  "wispy",
  "brash",
  "scone",
  "toast",
  "easel",
  "saucy",
  "value",
  "spice",
  "honor",
  "route",
  "sharp",
  "bawdy",
  "radii",
  "skull",
  "phony",
  "issue",
  "lager",
  "swell",
  "urine",
  "gassy",
  "trial",
  "flora",
  "upper",
  "latch",
  "wight",
  "brick",
  "retry",
  "holly",
  "decal",
  "grass",
  "shack",
  "dogma",
  "mover",
  "defer",
  "sober",
  "optic",
  "crier",
  "vying",
  "nomad",
  "flute",
  "hippo",
  "shark",
  "drier",
  "obese",
  "bugle",
  "tawny",
  "chalk",
  "feast",
  "ruddy",
  "pedal",
  "scarf",
  "cruel",
  "bleat",
  "tidal",
  "slush",
  "semen",
  "windy",
  "dusty",
  "sally",
  "igloo",
  "nerdy",
  "jewel",
  "shone",
  "whale",
  "hymen",
  "abuse",
  "fugue",
  "elbow",
  "crumb",
  "pansy",
  "welsh",
  "syrup",
  "terse",
  "suave",
  "gamut",
  "swung",
  "drake",
  "freed",
  "afire",
  "shirt",
  "grout",
  "oddly",
  "tithe",
  "plaid",
  "dummy",
  "broom",
  "blind",
  "torch",
  "enemy",
  "again",
  "tying",
  "pesky",
  "alter",
  "gazer",
  "noble",
  "ethos",
  "bride",
  "extol",
  "decor",
  "hobby",
  "beast",
  "idiom",
  "utter",
  "these",
  "sixth",
  "alarm",
  "erase",
  "elegy",
  "spunk",
  "piper",
  "scaly",
  "scold",
  "hefty",
  "chick",
  "sooty",
  "canal",
  "whiny",
  "slash",
  "quake",
  "joint",
  "swept",
  "prude",
  "heavy",
  "wield",
  "femme",
  "lasso",
  "maize",
  "shale",
  "screw",
  "spree",
  "smoky",
  "whiff",
  "scent",
  "glade",
  "spent",
  "prism",
  "stoke",
  "riper",
  "orbit",
  "cocoa",
  "guilt",
  "humus",
  "shush",
  "table",
  "smirk",
  "wrong",
  "noisy",
  "alert",
  "shiny",
  "elate",
  "resin",
  "whole",
  "hunch",
  "pixel",
  "polar",
  "hotel",
  "sword",
  "cleat",
  "mango",
  "rumba",
  "puffy",
  "filly",
  "billy",
  "leash",
  "clout",
  "dance",
  "ovate",
  "facet",
  "chili",
  "paint",
  "liner",
  "curio",
  "salty",
  "audio",
  "snake",
  "fable",
  "cloak",
  "navel",
  "spurt",
  "pesto",
  "balmy",
  "flash",
  "unwed",
  "early",
  "churn",
  "weedy",
  "stump",
  "lease",
  "witty",
  "wimpy",
  "spoof",
  "saner",
  "blend",
  "salsa",
  "thick",
  "warty",
  "manic",
  "blare",
  "squib",
  "spoon",
  "probe",
  "crepe",
  "knack",
  "force",
  "debut",
  "order",
  "haste",
  "teeth",
  "agent",
  "widen",
  "icily",
  "slice",
  "ingot",
  "clash",
  "juror",
  "blood",
  "abode",
  "throw",
  "unity",
  "pivot",
  "slept",
  "troop",
  "spare",
  "sewer",
  "parse",
  "morph",
  "cacti",
  "tacky",
  "spool",
  "demon",
  "moody",
  "annex",
  "begin",
  "fuzzy",
  "patch",
  "water",
  "lumpy",
  "admin",
  "omega",
  "limit",
  "tabby",
  "macho",
  "aisle",
  "skiff",
  "basis",
  "plank",
  "verge",
  "botch",
  "crawl",
  "lousy",
  "slain",
  "cubic",
  "raise",
  "wrack",
  "guide",
  "foist",
  "cameo",
  "under",
  "actor",
  "revue",
  "fraud",
  "harpy",
  "scoop",
  "climb",
  "refer",
  "olden",
  "clerk",
  "debar",
  "tally",
  "ethic",
  "cairn",
  "tulle",
  "ghoul",
  "hilly",
  "crude",
  "apart",
  "scale",
  "older",
  "plain",
  "sperm",
  "briny",
  "abbot",
  "rerun",
  "quest",
  "crisp",
  "bound",
  "befit",
  "drawn",
  "suite",
  "itchy",
  "cheer",
  "bagel",
  "guess",
  "broad",
  "axiom",
  "chard",
  "caput",
  "leant",
  "harsh",
  "curse",
  "proud",
  "swing",
  "opine",
  "taste",
  "lupus",
  "gumbo",
  "miner",
  "green",
  "chasm",
  "lipid",
  "topic",
  "armor",
  "brush",
  "crane",
  "mural",
  "abled",
  "habit",
  "bossy",
  "maker",
  "dusky",
  "dizzy",
  "lithe",
  "brook",
  "jazzy",
  "fifty",
  "sense",
  "giant",
  "surly",
  "legal",
  "fatal",
  "flunk",
  "began",
  "prune",
  "small",
  "slant",
  "scoff",
  "torus",
  "ninny",
  "covey",
  "viper",
  "taken",
  "moral",
  "vogue",
  "owing",
  "token",
  "entry",
  "booth",
  "voter",
  "chide",
  "elfin",
  "ebony",
  "neigh",
  "minim",
  "melon",
  "kneed",
  "decoy",
  "voila",
  "ankle",
  "arrow",
  "mushy",
  "tribe",
  "cease",
  "eager",
  "birth",
  "graph",
  "odder",
  "terra",
  "weird",
  "tried",
  "clack",
  "color",
  "rough",
  "weigh",
  "uncut",
  "ladle",
  "strip",
  "craft",
  "minus",
  "dicey",
  "titan",
  "lucid",
  "vicar",
  "dress",
  "ditch",
  "gypsy",
  "pasta",
  "taffy",
  "flame",
  "swoop",
  "aloof",
  "sight",
  "broke",
  "teary",
  "chart",
  "sixty",
  "wordy",
  "sheer",
  "leper",
  "nosey",
  "bulge",
  "savor",
  "clamp",
  "funky",
  "foamy",
  "toxic",
  "brand",
  "plumb",
  "dingy",
  "butte",
  "drill",
  "tripe",
  "bicep",
  "tenor",
  "krill",
  "worse",
  "drama",
  "hyena",
  "think",
  "ratio",
  "cobra",
  "basil",
  "scrum",
  "bused",
  "phone",
  "court",
  "camel",
  "proof",
  "heard",
  "angel",
  "petal",
  "pouty",
  "throb",
  "maybe",
  "fetal",
  "sprig",
  "spine",
  "shout",
  "cadet",
  "macro",
  "dodgy",
  "satyr",
  "rarer",
  "binge",
  "trend",
  "nutty",
  "leapt",
  "amiss",
  "split",
  "myrrh",
  "width",
  "sonar",
  "tower",
  "baron",
  "fever",
  "waver",
  "spark",
  "belie",
  "sloop",
  "expel",
  "smote",
  "baler",
  "above",
  "north",
  "wafer",
  "scant",
  "frill",
  "awash",
  "snack",
  "scowl",
  "frail",
  "drift",
  "limbo",
  "fence",
  "motel",
  "ounce",
  "wreak",
  "revel",
  "talon",
  "prior",
  "knelt",
  "cello",
  "flake",
  "debug",
  "anode",
  "crime",
  "salve",
  "scout",
  "imbue",
  "pinky",
  "stave",
  "vague",
  "chock",
  "fight",
  "video",
  "stone",
  "teach",
  "cleft",
  "frost",
  "prawn",
  "booty",
  "twist",
  "apnea",
  "stiff",
  "plaza",
  "ledge",
  "tweak",
  "board",
  "grant",
  "medic",
  "bacon",
  "cable",
  "brawl",
  "slunk",
  "raspy",
  "forum",
  "drone",
  "women",
  "mucus",
  "boast",
  "toddy",
  "coven",
  "tumor",
  "truer",
  "wrath",
  "stall",
  "steam",
  "axial",
  "purer",
  "daily",
  "trail",
  "niche",
  "mealy",
  "juice",
  "nylon",
  "plump",
  "merry",
  "flail",
  "papal",
  "wheat",
  "berry",
  "cower",
  "erect",
  "brute",
  "leggy",
  "snipe",
  "sinew",
  "skier",
  "penny",
  "jumpy",
  "rally",
  "umbra",
  "scary",
  "modem",
  "gross",
  "avian",
  "greed",
  "satin",
  "tonic",
  "parka",
  "sniff",
  "livid",
  "stark",
  "trump",
  "giddy",
  "reuse",
  "taboo",
  "avoid",
  "quote",
  "devil",
  "liken",
  "gloss",
  "gayer",
  "beret",
  "noise",
  "gland",
  "dealt",
  "sling",
  "rumor",
  "opera",
  "thigh",
  "tonga",
  "flare",
  "wound",
  "white",
  "bulky",
  "etude",
  "horse",
  "circa",
  "paddy",
  "inbox",
  "fizzy",
  "grain",
  "exert",
  "surge",
  "gleam",
  "belle",
  "salvo",
  "crush",
  "fruit",
  "sappy",
  "taker",
  "tract",
  "ovine",
  "spiky",
  "frank",
  "reedy",
  "filth",
  "spasm",
  "heave",
  "mambo",
  "right",
  "clank",
  "trust",
  "lumen",
  "borne",
  "spook",
  "sauce",
  "amber",
  "lathe",
  "carat",
  "corer",
  "dirty",
  "slyly",
  "affix",
  "alloy",
  "taint",
  "sheep",
  "kinky",
  "wooly",
  "mauve",
  "flung",
  "yacht",
  "fried",
  "quail",
  "brunt",
  "grimy",
  "curvy",
  "cagey",
  "rinse",
  "deuce",
  "state",
  "grasp",
  "milky",
  "bison",
  "graft",
  "sandy",
  "baste",
  "flask",
  "hedge",
  "girly",
  "swash",
  "boney",
  "coupe",
  "endow",
  "abhor",
  "welch",
  "blade",
  "tight",
  "geese",
  "miser",
  "mirth",
  "cloud",
  "cabal",
  "leech",
  "close",
  "tenth",
  "pecan",
  "droit",
  "grail",
  "clone",
  "guise",
  "ralph",
  "tango",
  "biddy",
  "smith",
  "mower",
  "payee",
  "serif",
  "drape",
  "fifth",
  "spank",
  "glaze",
  "allot",
  "truck",
  "kayak",
  "virus",
  "testy",
  "tepee",
  "fully",
  "zonal",
  "metro",
  "curry",
  "grand",
  "banjo",
  "axion",
  "bezel",
  "occur",
  "chain",
  "nasal",
  "gooey",
  "filer",
  "brace",
  "allay",
  "pubic",
  "raven",
  "plead",
  "gnash",
  "flaky",
  "munch",
  "dully",
  "eking",
  "thing",
  "slink",
  "hurry",
  "theft",
  "shorn",
  "pygmy",
  "ranch",
  "wring",
  "lemon",
  "shore",
  "mamma",
  "froze",
  "newer",
  "style",
  "moose",
  "antic",
  "drown",
  "vegan",
  "chess",
  "guppy",
  "union",
  "lever",
  "lorry",
  "image",
  "cabby",
  "druid",
  "exact",
  "truth",
  "dopey",
  "spear",
  "cried",
  "chime",
  "crony",
  "stunk",
  "timid",
  "batch",
  "gauge",
  "rotor",
  "crack",
  "curve",
  "latte",
  "witch",
  "bunch",
  "repel",
  "anvil",
  "soapy",
  "meter",
  "broth",
  "madly",
  "dried",
  "scene",
  "known",
  "magma",
  "roost",
  "woman",
  "thong",
  "punch",
  "pasty",
  "downy",
  "knead",
  "whirl",
  "rapid",
  "clang",
  "anger",
  "drive",
  "goofy",
  "email",
  "music",
  "stuff",
  "bleep",
  "rider",
  "mecca",
  "folio",
  "setup",
  "verso",
  "quash",
  "fauna",
  "gummy",
  "happy",
  "newly",
  "fussy",
  "relic",
  "guava",
  "ratty",
  "fudge",
  "femur",
  "chirp",
  "forte",
  "alibi",
  "whine",
  "petty",
  "golly",
  "plait",
  "fleck",
  "felon",
  "gourd",
  "brown",
  "thrum",
  "ficus",
  "stash",
  "decry",
  "wiser",
  "junta",
  "visor",
  "daunt",
  "scree",
  "impel",
  "await",
  "press",
  "whose",
  "turbo",
  "stoop",
  "speak",
  "mangy",
  "eying",
  "inlet",
  "crone",
  "pulse",
  "mossy",
  "staid",
  "hence",
  "pinch",
  "teddy",
  "sully",
  "snore",
  "ripen",
  "snowy",
  "attic",
  "going",
  "leach",
  "mouth",
  "hound",
  "clump",
  "tonal",
  "bigot",
  "peril",
  "piece",
  "blame",
  "haute",
  "spied",
  "undid",
  "intro",
  "basal",
  "shine",
  "gecko",
  "rodeo",
  "guard",
  "steer",
  "loamy",
  "scamp",
  "scram",
  "manly",
  "hello",
  "vaunt",
  "organ",
  "feral",
  "knock",
  "extra",
  "condo",
  "adapt",
  "willy",
  "polka",
  "rayon",
  "skirt",
  "faith",
  "torso",
  "match",
  "mercy",
  "tepid",
  "sleek",
  "riser",
  "twixt",
  "peace",
  "flush",
  "catty",
  "login",
  "eject",
  "roger",
  "rival",
  "untie",
  "refit",
  "aorta",
  "adult",
  "judge",
  "rower",
  "artsy",
  "rural",
  "shave",
  "kenya",
  "aesop",
  "elgin",
  "tamil",
  "lagos",
  "dante",
  "helen",
  "essen",
  "santa",
  "carib",
  "harpo",
  "malta",
  "iraqi",
  "plato",
  "faust",
  "naomi",
  "hosea",
  "dijon",
  "idaho",
  "satie",
  "maori",
  "mande",
  "nixon",
  "titus",
  "petra",
  "alloa",
  "agnes",
  "chloe",
  "gogol",
  "indus",
  "irish",
  "delhi",
  "evita",
  "auden",
  "eliot",
  "dhaka",
  "dewey",
  "saiva",
  "gabon",
  "samoa",
  "mahdi",
  "maine",
  "sufic",
  "swazi",
  "jason",
  "cilla",
  "durer",
  "miami",
  "burma",
  "weser",
  "alice",
  "arkle",
  "masai",
  "calum",
  "verdi",
  "nauru",
  "nilot",
  "emile",
  "ernst",
  "lhasa",
  "aries",
  "sakta",
  "leeds",
  "kirov",
  "byron",
  "perth",
  "sarum",
  "eblis",
  "decca",
  "gouda",
  "aaron",
  "liszt",
  "godot",
  "priam",
  "inuit",
  "tiber",
  "dubai",
  "norse",
  "abuja",
  "horus",
  "trevi",
  "iceni",
  "turin",
  "nepal",
  "crete",
  "yukon",
  "basra",
  "amish",
  "dalek",
  "tokyo",
  "solti",
  "boone",
  "ypres",
  "haiti",
  "virgo",
  "sligo",
  "sarah",
  "elgar",
  "eilat",
  "samos",
  "euler",
  "hindi",
  "orion",
  "zappa",
  "diego",
  "defoe",
  "omaha",
  "qajar",
  "deneb",
  "mcjob",
  "julia",
  "yeats",
  "andes",
  "accra",
  "elsie",
  "nobel",
  "ghent",
  "iyyar",
  "eiger",
  "yalta",
  "yemen",
  "xhosa",
  "enoch",
  "klimt",
  "ernie",
  "nimes",
  "eddie",
  "latin",
  "aston",
  "dirac",
  "lehar",
  "ibsen",
  "laois",
  "anita",
  "troon",
  "omani",
  "erato",
  "tosti",
  "banff",
  "corfu",
  "stasi",
  "tunis",
  "haydn",
  "defra",
  "macao",
  "ennis",
  "fargo",
  "susan",
  "tosca",
  "syria",
  "hanoi",
  "luigi"
]

const WORD_LENGTH = 5
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const winBox = document.querySelector("[data-win-box]")
const loseBox = document.querySelector("[data-lose-box]")
const shareWin = document.querySelector("[data-share-win]")
const shareLose = document.querySelector("[data-share-lose]")
const winExplain = document.querySelector("[data-win-explain]")
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const clue = document.querySelector("[clue]")
const offsetFromDate = new Date(2022, 0, 1)
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
let targetWord = targetWordle[Math.floor(dayOffset)][1]
let clueData = targetWordle[Math.floor(dayOffset)][0]
let urlData = targetWordle[Math.floor(dayOffset)][2]
let charMap = new Map();
let charGuessMap = new Map();
let shareText = "";

window.onload = function () {
  console.log("Loading game...")
    fetch('https://cryptic-wordle-13db76bdac59.herokuapp.com/') //Set to backend URL
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    // Process the fetched data
    //Override variable to allow site to work if backend is down
    targetWord = data[1];
    clueData = data[0];
    urlData = data[2];
    startInteraction()

    for (const char of targetWord) {
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      } else {
        charMap.set(char, 1);
      }
    } 
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
}

startInteraction()

 function startInteraction() {

  clue.textContent = clueData
  document.addEventListener("click", handleMouseClick)
  document.addEventListener("keydown", handleKeyPress)

  winExplain.addEventListener("click", async () => {
    var URL = urlData != null ? urlData : 'https://www.youtube.com/@CrypticWordle';
    window.location.href = URL;
  });

  shareWin.addEventListener("click", async () => {
    try {
      let outputText = "Play the daily Cryptic Wordle with me!\n" + shareText; 
      await navigator.share({
        title: "Cryptic Wordle",
        text: outputText,
        url: "https://crypticwordle.com/",
      });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("error:", err.message);
    }
  });

  shareLose.addEventListener("click", async () => {
    try {
      let outputText = "Play the daily Cryptic Wordle with me!\n" + shareText;
      await navigator.share({
        title: "Cryptic Wordle",
        text: outputText,
        url: "https://crypticwordle.com/",
      });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("error:", err.message);
    }
  });

}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  console.log(e.target);

  if (e.target.matches("[data-delete]")) {
    deleteKey()
    return
  }

  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess()
    return
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey()
    return
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key)
    return
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles()
  if (activeTiles.length >= WORD_LENGTH) return
  const nextTile = guessGrid.querySelector(":not([data-letter])")
  nextTile.dataset.letter = key.toLowerCase()
  nextTile.textContent = key
  nextTile.dataset.state = "active"
}

function deleteKey() {
  const activeTiles = getActiveTiles()
  const lastTile = activeTiles[activeTiles.length - 1]
  if (lastTile == null) return
  lastTile.textContent = ""
  delete lastTile.dataset.state
  delete lastTile.dataset.letter
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()]
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert("Not enough letters")
    shakeTiles(activeTiles)
    return
  }

  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter
  }, "")

  if (!dictionary.includes(guess)) {
    showAlert("Not in word list")
    shakeTiles(activeTiles)
    return
  }

  stopInteraction()

  //reset guess map
  charGuessMap = new Map();

  //Set characters in guess to occurence count
  for (const char of guess) {
    if (charGuessMap.has(char)) {
      charGuessMap.set(char, charGuessMap.get(char) + 1);
    } else {
      charGuessMap.set(char, 1);
    }
  } 

  activeTiles.forEach((...params) => flipTile(...params, guess))
  shareText += "\n";

  //Reset target word map
  charMap = new Map();
  for (const char of targetWord) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  } 
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter
  const key = keyboard.querySelector(`[data-key="${letter}"i]`)

  var count = 0;
  var guessCounter = charGuessMap.get(letter);

  if (charMap.has(letter)){
    count = charMap.get(letter);

    if (guessCounter > count)
    {
      count = 0;
    }
  }

  setTimeout(() => {
    tile.classList.add("flip")
  }, (index * FLIP_ANIMATION_DURATION) / 2)

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip")
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct"
        key.classList.add("correct")
        shareText += "🟩";
      } else if (targetWord.includes(letter) && count != 0) {
        tile.dataset.state = "wrong-location"
        key.classList.add("wrong-location")
        shareText += "🟨";
      } else {
        tile.dataset.state = "wrong"
        key.classList.add("wrong")
        shareText += "⬛";
      }

      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction()
            checkWinLose(guess, array)
          },
          { once: true }
        )
      }
    },
    { once: true }
  )

  charGuessMap.set(letter, guessCounter-1);

  //Update map to avoid false positives on duplicate letters
  if (targetWord[index] === letter || (targetWord.includes(letter) && count != 0)) {
    charMap.set(letter, count-1);
  }
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000) {
  const alert = document.createElement("div")
  alert.textContent = message
  alert.classList.add("alert")
  alertContainer.prepend(alert)
  if (duration == null) return

  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake")
      },
      { once: true }
    )
  })
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    keyboard.classList.add("win-keyboard");
    winBox.classList.add("win-box-show");
    danceTiles(tiles)
    stopInteraction()
    return
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
  if (remainingTiles.length === 0) {
    keyboard.classList.add("win-keyboard");
    loseBox.classList.add("lose-box-show");
    //showAlert(targetWord.toUpperCase(), null)
    stopInteraction()
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance")
        },
        { once: true }
      )
    }, (index * DANCE_ANIMATION_DURATION) / 5)
  })
}
