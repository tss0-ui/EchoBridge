import os

  const gestureLabels = {
  thumbs_up: "Thumbs Up",
  thumbs_down: "Thumbs Down",
  okay: "Okay",
  peace: "Peace",
  fist: "Fist",
  open_hand: "Open Hand",
  call_me: "Call Me",
  rock_on: "Rock On",
  stop: "Stop",
  live_long: "Live Long",
  point_left: "Point Left",
  point_right: "Point Right",
  point_up: "Point Up",
  point_down: "Point Down",
  pinch: "Pinch",
  clap: "Clap",
  wave: "Wave",
  love_you: "Love You",
  hello: "Hello",
  goodbye: "Goodbye",
  yes: "Yes",
  no: "No",
  help: "Help",
  please: "Please",
  thank_you: "Thank You",
  sorry: "Sorry",
  more: "More",
  eat: "Eat",
  drink: "Drink",
  toilet: "Toilet",
  hurt: "Hurt",
  bathroom: "Bathroom",
  tired: "Tired",
  sleepy: "Sleepy",
  cold: "Cold",
  hot: "Hot",
  sad: "Sad",
  happy: "Happy",
  angry: "Angry",
  scared: "Scared",
  excited: "Excited",
  bored: "Bored",
  confused: "Confused",
  surprised: "Surprised",
  // Auto-generated gestures from 001 to 457 to make total 500
  ...Object.fromEntries(
    Array.from({ length: 457 }, (_, i) => {
      const key = `gesture_${String(i + 1).padStart(3, "0")}`;
      const value = `Gesture ${String(i + 1).padStart(3, "0")}`;
      return [key, value];
    })
  )
};

export default gestureLabels;

# Read the existing gestureLabels.js content and append new ASL gesture labels
file_path = "/mnt/data/gestureLabels.js"
  
# New ASL gesture labels from the user
new_gestures = [
    "@", "AAC", "ABC's", "ABBREVIATE", "ABORTION", "ABOUT", "ABOVE", "ABUSE", "ACADEMIC", "ACCEPT",
    "ACCENT", "ACCIDENT", "accompany", "ACCOMPLICE", "ACCOMPLISH", "ACCOUNTANT",
    "ACQUAINTANCE", "ACQUIRE", "ACROSS", "ACT", "ACTIVE", "ACTOR", "ACTUALLY", "ADD", "ADDICT",
    "add-to", "ADDRESS", "administration", "ADMIT", "adopt", "ADOPT",
    "ADULT", "advise/advice", "AFRAID", "AFRICA", "AFTER",
    "AFTERNOON", "AGAIN", "AGAINST", "AGENT",
    "AGGRESSIVE", "AGREE", "AI", "AIDE", "AIR", "AIR CONDITIONING", "AIRPLANE", "ALABAMA", "ALASKA",
    "ALCOHOL", "ALCOHOLIC", "ALLERGIC", "ALL", "ALLIGATOR", "all-over", "ALLOW",
    "almost", "alone", "A-LOT", "ALMOST", "ALOHA", "ALPHABET", "ALRIGHT",
    "ALSO", "ALTOGETHER", "ALWAYS", "AMAZON", "ambulance",
    "AMERICA", "American", "American: Native American", "Amish", "AMOUNT", "AND",
    "ANGEL", "ANGRY", "ANIMAL", "ANIMALS", "annually", "ANOTHER", "ANSWER", "ANT", "ANTHROPOLOGY",
    "ANY", "ANXIOUS", "APARTMENT", "APE", "APOSTROPHE", "APOSTROPHE S / \"'S\"", "APPEAR", "APPLAUSE",
    "APPLE", "APPLY", "APPOINTMENT", "APPRECIATE", "APPROXIMATELY", "ARE (Not ASL)", "AREA", "ARGUE",
    "ARIZONA", "ARKANSAS", "ARMADILLO", "ARMY", "around", "ARRIVE", "art",
    "ARTHRITIS", "article/column", "ARTICLE", "ARTIFICIAL INTELLIGENCE",
    "ASK", "ASSAULT", "ASSIGNMENT", "ASSOCIATE", "ASSOCIATION", "ASTERISK",
    "AT", "ATM", "ATLANTA", "ATTENTION", "AUDIENCE", "AUNT", "AUSTRALIA", "AUTISM", "AUTUMN", "AVERAGE",
    "AVOCADO", "AWAY", "AWESOME", "AWFUL", "AWKWARD", "BABY", "BABYSITTER",
    "BACHELOR", "BACK", "BACKPACK", "BACK-STAB", "BAD", "BAG", "BAIL", "BAKE", "BALD", "BALL",
    "BALLOON", "BALTIMORE", "BANANA", "BANDAGE", "BANGLADESH", "BANK", "BAPTIZE",
    "BARBER", "BASEBALL", "BASEMENT", "BASKET", "BASKETBALL", "BASSOON", "BAT", "BATHROOM", "BATHTUB",
    "BATTERY", "be", "BEACH", "BEAR", "BEARD", "BEAUTIFUL", "BEAVER", "BECOME", "because",
    "bed", "bed", "BEDROOM", "BEE", "BEEF", "been", "BEER", "BEFORE", "begin / start",
    "BEHAVE", "BEHAVIOR", "behind", "BELIEVE", "BELL", "BELLYBUTTON", "below", "BELT", "BENCH",
    "beneath", "BERRY", "BEST", "BETTER", "between", "BICEPS", "BICYCLE",
    "BIG", "BIG-DIPPER", "BIKINI", "BINOCULARS", "BIRD", "BIRTH", "BIRTHDAY", "BISON", "BITE",
    "BLACK", "BLACKBOARD", "BLAME", "BLANKET", "BLOCK", "BLOOD", "blood",
    "blouse", "BLOW-DRY", "BLUE", "BLUE-RAY", "BLURT", "BO STAFF", "BOAT", "BOAR", "BODY",
    "body-parts", "BOIL", "BOLD", "BOLOGNA", "BOOK", "BOOKSTORE",
    "boots", "BOUQUET", "BORED", "born", "borrow", "BOSS", "BOSTON", "both", "bother",
    "bottle", "bottom", "BOWEL MOVEMENT", "BOWL", "BOWLING", "bow-tie", "BOX", "BOY",
    "BOYFRIEND", "bracelet", "BRA", "BRAIN", "BRANCH", "BRAVE", "BREAD", "BREAK", "BREAK-DOWN",
    "BREAK-UP", "BREAKFAST", "BREASTFEED", "BREATHE", "BRIDESMAID", "BRIDGE", "BRIGHT", "BRING",
    "BROCCOLI", "BROKE", "BRONCHIECTASIS", "BROTHER",
    "BROWN", "BRUISE", "BRUSH", "BRUSH-TEETH", "BS", "BUFFALO", "BUG", "BUILD", "BUILDING", "BULL",
    "BULLY", "BUM", "BUNK-BED", "BURRITO", "BUS", "BUSINESS", "BUSY", "BUT",
    "BUTTER", "BUTTERFLY", "BUTTON", "buy", "BUZZ-CUT", "BY", "BY-A-HAIR", "CABINET",
    "CAFETERIA", "CAFFEINE", "CAKE", "CALIFORNIA", "CALL", "calm-down",
    "CAMP", "CAMPER", "CAN", "can"     "CANADA", "CANCEL", "CANCER", "candidate-[see APPLY]", "CANDY", "CAN'T", "CAP", "CAR/[ DRIVE]", "CARD", "CARPOOL", 
    "CARE", "CAREFUL", "CARELESS", "CARPENTER-[do woodwork]", "CARIBOU", "CARPOOL", "CARTOON", "CASE", "CAT-[kitten]", 
    "CATEGORY", "CATERPILLAR", "CAUCASIAN", "CAUSE", "CAVE", "CELEBRATE", "CELL-PHONE", "CEMETERY", "CENTER", "CENTS", 
    "CENTURY", "CEREAL", "CHAIN", "chair-[see SIT]", "CHAMELEON", "CHAMP or CHAMPION", "CHANCE", "CHANGE-[adapt, convert, COINS]", 
    "CHARACTER", "CHARGE", "CHASE", "CHAT", "CHEAP", "CHEAT", "CHECK (envelope / card)", "CHEESE", "CHESS", "CHEETAH", 
    "CHEW", "CHICAGO", "CHICKEN", "CHICKEN_NUGGETS", "CHIHUAHUA", "CHILD", "CHIMNEY", "CHINA-[Chinese, Asian]", "CHIPMUNK", 
    "CHIPS", "CHRIST", "CHRISTMAS", "CHOCOLATE", "CHRONIC", "CHURCH", "CIGARETTE", "CITY", "CL:A", "CL:1", "CL:3", "CL:4-[\"line of people,\" \"curtains\"]", 
    "CL:5-[scads of]", "CL:B-[roof, flat, wall]", "CL:C-[thick things, round pole-like things]", "CL:G-[thinness]", 
    "CL:L(bent)-[large, big-headed/egoistic/conceited, check, card, square]", "CL:R-[rope-like, braided, twisted]", 
    "CL:V-[stand, walk-to, lay down, toss-and-turn, dive, jump, skate board, scooter, get up]", "CL-claw-3", "class-[see FAMILY]", 
    "Classifiers", "CLASS", "CLASS-[group]", "CLASSROOM", "CLAW-3", "CLEAN", "Clean up your new cooking school papers before leaving.", 
    "CLEAR", "CLEVER", "CLIMB", "CLOCK", "CLOSE", "CLOSE-CAPTIONED", "CLOSE-THE-WINDOW", "CLOSET", "CLOTHES-[DRESS]", "CLOTHES", 
    "CLOUD(S)", "CLOUDY", "CLUB-[#CLUB-(lexicalized)]", "CLUSTER", "COAT-[jacket]", "COAT-animal", "COCOON", "COCHLEAR IMPLANT", 
    "COCKROACH", "COFFEE", "COIN", "COINS-[Also see CL:F]", "COKE", "COLD-[REFRIGERATOR]", "COLLECT", "COLLEGE-[university]", 
    "COLOR", "COLORADO", "COLORING", "COMB", "COME/[GO]-[come on, go-there, go-to, attend]", "COME-ON [see come/go]", 
    "COMMON SENSE", "COMMUNICATION", "COMMUTE", "COMPLAIN", "COMPLIMENT", "COMPUTER", "CONCLUDE", "CONFESS", "CONFLICT", 
    "CONGRATULATIONS", "CONNECT", "CONNECTICUT", "CONSTRUCTION", "CONTAINER", "CONTENTION", "CONTEXT", "CONTINENT", "CONTINUE", 
    "CONVINCE", "COOK", "COOKIE", "COOL (temperature)", "COOL (spiffy)", "COPE", "COPY", "CORN", "CORNER", "CORRECT", 
    "COST-[tax, fine, fee]", "COUCH", "COUGH", "COUNSEL", "COUNT-[accountant]", "count-on-[DEPEND]", "COUNTRY", "COUNTRIES", 
    "court-[see IF]", "COUSIN", "COVER-[shell]", "COW", "COWBOY", "CRAB", "CRACK", "CRASH", "CRAZY-[nuts, crazy-about]", 
    "CREATE", "CREATOR", "CREDENTIAL", "CRITICIZE", "CROCHET", "CROCODILE", "CROSSWALK", "CRUEL", "CRUSH", "CRYPTO", 
    "CRY (4)", "CULTURE", "CUBBY", "CUP", "CUPCAKE", "CURIOUS", "CURLY-HAIR", "CURTAINS", "CUTE-[sugar]", "Cut it out!", "DAD", 
    "DAILY", "DAIRY", "DALLAS", "DANCE", "DANCER", "DANDELION", "DANGER", "DARK", "DATE", "daughter-[see BABY]", "DAWN", "DAY", 
    "DAYS OF THE WEEK", "DEAD", "DEADLINE", "DEAF", "DEAFHOOD", "DEAFNESS", "DEAF-SCHOOL", "DEAR", "DECIDE-[determine]", 
    "DECLINE", "DECIMAL", "DECORATE", "DECREASE", "DEER", "DEGREE", "DEGREE-[educational]", "DELAWARE", "DELICIOUS", "DENTIST", 
    "DENY", "DEPEND", "DEPLETE-[run-out-of]", "DEPOSIT", "DEPRESSED", "DESSERT", "desk-[see TABLE]", "DESTROY", "DETECTIVE", 
    "DETROIT", "DEVELOP", "diabetes", "DIAPER", "dictionary", "DIDN'T", "DIE", "DIET", "DIFFERENT", "DIFFICULT", "DIG", 
    "DINING ROOM", "DINNER", "DINOSAUR", "DIPLOMA", "DIRT", "DIRTY", "DIRTY-MINDED", "DISABLED", "DISAGREE", "DISAPPEAR", 
    "DISCOVER", "DISCUSS", "DISGUSTED", "DISH-[plate]", "DISNEYLAND", "DISPARAGE", "DISTANCE", "DIVIDE", "DIVORCE", "DIZZY", 
    "DO", "DO-what? [#DO-(lexicalized)]", "DOCTOR", "DOG", "DOLL", "DOLLAR", "DOLPHIN", "DONE-(FINISH)", "DONKEY-[stubborn]", 
    "DON'T", "don't-CARE", "don't-FORGET", "don't-HAVE", "don't-KNOW", "don't-LIKE", "don't-MIND", "don't-WANT", "DONUT", 
    "DOOR-[open, open door, close door]", "DORM", "DOTS", "DOUGH", "DOWN-[downstairs, CALM-DOWN]", "DOWN-SYNDROME", "DOZEN", 
    "DRAGONFLY", "Dr. PEPPER", "DRAW-[art]", "DRAW-OUT", "DRAWER-[open drawer, close drawer]", "DREAM", "DRESS", "DRESSER", 
    "DRESSING ROOM", "DRIBBLE", "DRILL", "DRINK", "DRIVE", "DROP", "DRUNK", "DRYER-[dry]", "DUCK", "DUDE", "dump", 
    "DURING-[while]", "DUTY-[obligation]", "DVD", "EACH", "EAGLE", "EARLY", "EARN", "EARS", "EARTH-[planet]", "EARTH-QUAKE-[planet]", 
    "EAST", "EASTER", "EASY-[ALMOST]", "EAT-[food]", "EAT-YOUR-WORDS", "EBOLA", "EGG", "EITHER", "ELECTRICITY", "ELEPHANT", 
    "ELEPHANT SEAL", "ELEMENTARY", "ELEVATOR", "ELiS", "ELK", "ELOPE", "EMAIL", "EMBARRASSED", "EMBASSY", "EMERGENCY", 
    "EMOTION", "EMPTY", "ENCORE", "ENCOURAGE", "END", "ENGLAND-[English, British]", "ENGLISH", "ENJOY-[appreciate]", 
    "ENOUGH-[good-enough, PLENTY]", "enter-[see IN]", "ENTHUSIASTIC", "ENVIRONMENT", "EQUAL-[fair, level]", "ERASE", 
    "ESCAPE", "ESTABLISH-[set-up]", "ETCETERA", "ETERNITY", "EURO", "EUROPE", "EVAPORATE", "EVERY", "EVERYDAY", "EVERYWHERE", 
    "EXACT-[perfect]", "EXAGGERATE", "EXAM", "example -[see SHOW]", "exchange-[see TRADE]", "EXCITED", "EXCUSE-[lay-off/pardon/release/] (4)", 
    "EXERCISE", "EXIT", "EXPAND", "EXPENSIVE", "EXPERIENCE", "EXPERT", "EXPIRE", "EXPLAIN-[describe, directions]", "EXPRESS", 
    "EYES", "FACE", "FACEBOOK", "FACTORY", "FAIL", "FAIRY", "fall-[see AUTUMN, see CL:V]", "FALL", "FALL-IN-LOVE", "FALL-FROM-GRACE", 
    "FALSE", "FAMILIAR", "FAMILY-[class, group, team, category, cluster]", "FAMILY ROOM", "FANCY", "FAR-(\"A\" hand, \"Index finger)-[distant]", 
    "FARM", "FART", "FAST-[quick, speed, immediately]", "FAT-[obese]", "FATHER", "FAULT", "FAVORITE-[prefer]", "FEAR", 
    "FEATHER", "FEDERAL", "FEED-[nourish, SPEND]", "FEEL", "FEET", "FENCE", "FERRET", "FEW-[several]", "FICTION"
]

# Load existing content
with open(file_path, "r") as file:
    content = file.read()

# Parse and append the new gestures
start = content.find("[")
end = content.find("]") + 1
prefix = content[:start + 1]
existing_labels = content[start + 1:end - 1].strip().split(",")
existing_labels = [label.strip().strip('"') for label in existing_labels if label.strip()]

# Merge and deduplicate
all_labels = sorted(set(existing_labels + new_gestures))

# Rebuild file content
new_content = prefix + "\n  \"" + "\",\n  \"".join(all_labels) + "\"\n];"

# Write to the file
with open(file_path, "w") as file:
    file.write("export const gestureLabels = " + new_content)

file_path
