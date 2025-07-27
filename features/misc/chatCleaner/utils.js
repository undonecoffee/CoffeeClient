export const messages = {
    ability: [
        /^Your pickaxe ability is on cooldown for \d+s\.$/,
        /^This ability is on cooldown for \d+s\.$/,
        /^This item is on cooldown\.$/,
        /^This ability is on cooldown \d+$/,
        /^Your .+ hit \d+ enem(ies|y) for .+ damage\.$/,
    ],
    boss: [/^\[BOSS\] /],
    error: [
        /^There are blocks in the way!$/,
    ],
    blessings: [
        /^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Superboom TNT|Blessing of \w+|\w+ \w+)!$/,
        /^DUNGEON BUFF! \w+ found a Blessing of \w+ (I|II|III|IV|V)!( \(.+\))?$/, // DUNGEON BUFF! hiimfabyy found a Blessing of Wisdom V! (09s)
        /^DUNGEON BUFF! A Blessing of .+ (I|II|III|IV|V) was found! \(.+\)$/,
        /^     (Also )?Granted you \+\d.+ (and|&) \+\d.+\.$/i,
    ],
    moreBoss: [
        /^⚠ Storm is enraged! ⚠$/,
        /^⚠ Maxor is enraged! ⚠$/,
        /^⚠ Maxor is enraged! ⚠$/,
    ],
    random: [
        // idk what this is from
        /^\s*$/,

        // warping
        /^Warping\.\.\.$/,
        /^Warping you to your SkyBlock island\.\.\.$/,
        /^Sending to server mini\w+\.\.\.$/,
        /^You are playing on profile\: \w+$/,
        /^Profile ID\: [a-f0-9-]{36}$/,

        // watchdog
        /^\[WATCHDOG ANNOUNCEMENT\]$/,
        /^Watchdog has banned .+ players in the last 7 days\.$/,
        /^Staff have banned an additional .+ in the last 7 days\.$/,
        /^Blacklisted modifications are a bannable offense!$/,

        // random error messages
        /^Whow! Slow down there!$/,
        /^This menu is disabled here!$/,
        /^Woah slow down, you're doing that too fast!$/,
        /^Please wait a few seconds between refreshing!$/,

        // join things
        /^You earned .+ Event EXP from playing SkyBlock!$/,
        /^Click here to view them!$/,
        /^\w+ joined the lobby!$/,
        /^You earned .+ GEXP$/,
        /^Latest update: SkyBlock .+/,
        /^Welcome to Hypixel SkyBlock!$/,
        /^BONUS! Temporarily earn 5% more skill experience!$/,

        // other
        /^RARE REWARD! \w+ found a .+ in their (Bedrock|Obsidian) Chest!$/,
        /^The New Year's Celebration event is starting in \d days!$/,
        /^Your Auto Recombobulator recombobulated/,
        /^Queuing\.\.\. \(Attempt 1\/3\)$/,
    ],
    moreRandom: [
        /^-----------------------------$/,
        /^You sold .+ x\d+ for .+ Coin(s)?!$/,
        /^You have teleported to \w+!$/,
        /^Refreshing\.\.\.$/,
        /^Attempting to add you to the party\.\.\.$/,

        // kill combo
        /^\+\d+ Kill Combo \+.+/,
        /Your Kill Combo has expired! You reached a \d+ Kill Combo!/,

        // inventory things
        /Moved \d+ .+ from your Sacks to your inventory./,
        /^You don't have enough space in your inventory to pick up this item!$/,
        /^Inventory full\? Don't forget to check out your Storage inside the SkyBlock Menu!$/,
        /^AUTO-PICKUP! Drop sent to your inventory! \[I GET IT\]$/,
    ],
    dungeon: [
        /^\[NPC\] Mort: .+/,

        // damage / healing things
        /^The Arrow Trap hit you for .+ damage!$/,
        /^The Crusher hit you for .+ damage!$/,

        /^The Stormy .+ struck you for .+ damage!$/,
        /^The Flamethrower hit you for .+ damage!$/,
        /^A Crypt Wither Skull exploded, hitting you for .+damage\.$/,

        /^Your Spirit Pet healed .+ for .+ health!$/,
        /^\w+ healed you for .+ health!$/,

        /^Storm's Lightning Fireball hit you for .+ true damage.$/,
        /^Storm's Static Field hit you for .+ true damage.$/,
        /^Storm's Giga Lightning hit you for .+ true damage.$/,
        /^Goldor's TNT Trap hit you for .+ true damage\.$/,
        /^Goldor's Greatsword hit you for .+ damage\.$/,
        /^Necron's Nuclear Frenzy hit you for .+ damage\.$/,

        // class messages
        /^(Throwing Axe|Healing Circle|Guided Sheep) is now available!$/,
        /^Used (Throwing Axe|Healing Circle)!$/,
        /^\w+('s)? fairy healed you for .+ health!$/,
        /^◕ You picked up a \w+ Orb from \w+ .+\.$/,

        // secrets
        /^ESSENCE! \w+ found x\d+ .+ Essence!$/,
        /^Someone has already activated this lever!$/,
        /^\w+ found a Wither Essence! Everyone gains an extra essence!$/,
        /^That chest is locked!$/,
        /^This chest has already been searched!$/,
        /^You hear the sound of something opening\.\.\.$/,

        // random error messages
        /^A mystical force in this room prevents you from using that ability!$/,
        /^It isn't your turn!$/,
        /^Don't move diagonally! Bad!$/,
        /^Oops! You stepped on the wrong block!$/,
        /^You do not have the key for this door!$/,
        /^You cannot move the silverfish in that direction!$/,
        /^This creature is immune to this kind of magic!$/,
        /^You cannot hit the silverfish while it's moving!$/,

        /^The Frozen Adventurer used Ice Spray on you!$/,
        /^This Terminal doesn't seem to be responsive at the moment\.$/,
    ],
    moreDungeon: [
        // key / door
        /^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Blood|Wither) Key!$/,
        /^RIGHT CLICK on (a WITHER door|the BLOOD DOOR) to open it. This key can only be used to open 1 door!$/,
        /^\w+ opened a WITHER door!$/,
        /^The BLOOD DOOR has been opened!$/,
        /^A shiver runs down your spine\.\.\.$/,

        // class messages
        /^\w+ Milestone .: You have .+ so far! .+s$/,
        /^Your \w+ stats are doubled because you are the only player using this class!$/,
        /^\[(Tank|Berserk|Mage|Archer|Healer)\] .+ -> .+/,
        /^(Castle of Stone|Thunder Storm|Ragnarok) is ready to use! Press DROP to activate it!$/,

        // other random things
        /^Someone else is currently reviving that player!$/,
        /^\w+ is now ready!$/,
        /^RARE DROP! .+ \(\+\d+% ✯ Magic Find\)$/,
        /^PUZZLE SOLVED! \w+ .+! Good job!$/,
    ],
    evenMoreDungeon: [
        // party chat messages
        /^Party > (\[(MVP|VIP)(\+)?(\+)?\] )?\w+: (Mimic Killed!|300 score|270 score|UwUaddons ».*)$/i,
        /^\w+ picked up an Energy Crystal!$/,
        /^The Energy Laser is charging up!$/,
        /^[12]\/2 Energy Crystals are now active!$/,
        /^Creeper Veil (Activated|De-activated)!$/,
        /^You have selected the .+ Dungeon Class!$/,
    ],
}

