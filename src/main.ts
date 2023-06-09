/**
 * @author <a href="https://mirismaili.github.io">S. Mahdi Mir-Ismaili</a>.
 * Created on 1397/12/26 (2019/3/17).
 *
 * @see: {@link https://en.wikipedia.org/wiki/ANSI_escape_code}
 */

// 1. STYLES:
export const RESET       = '\x1b[0m' // All attributes become turned off
export const BOLD        = '\x1b[1m' // As with faint, the color change is a PC (SCO / CGA) invention
export const FAINT       = '\x1b[2m' // May be implemented as a light font weight like bold
export const ITALIC      = '\x1b[3m' // Not widely supported. Sometimes treated as inverse or blink
export const UNDERLINE   = '\x1b[4m' // Style extensions exist for Kitty, VTE, mintty and iTerm2
export const BLINK       = '\x1b[5m' // Sets blinking to less than 150 times per minute
export const RAPID_BLINK = '\x1b[6m' // MS-DOS ANSI.SYS, 150+ per minute; not widely supported
export const REVERSE     = '\x1b[7m' // Swap foreground and background colors; inconsistent emulation
export const HIDDEN      = '\x1b[8m' // Not widely supported
export const STRIKE      = '\x1b[9m' // Characters legible but marked as if for deletion. Not supported in Terminal app
// Aliases:
export const DIM         = FAINT
export const CONCEAL     = HIDDEN
export const CROSSED_OUT = STRIKE

// 2. (NOT)-STYLES:
export const NOT_BOLD          = '\x1b[21m' // CAVEAT (!): Double-underline per ECMA-48
export const DOUBLY_UNDERLINED = '\x1b[21m' // CAVEAT (!): Disables bold intensity on several terminals, including in the Linux kernel's console before version 4.17
export const NORMAL_INTENSITY  = '\x1b[22m' // Neither bold nor faint; color changes where intensity is implemented as such
export const NOT_ITALIC        = '\x1b[23m' // Neither italic, nor blackletter
export const NOT_UNDERLINED    = '\x1b[24m' // Neither singly nor doubly underlined
export const NOT_BLINKING      = '\x1b[25m' // Turn blinking off
export const NOT_REVERSED      = '\x1b[27m'
export const NOT_HIDDEN        = '\x1b[28m' // Not concealed
export const NOT_STRIKE        = '\x1b[29m'
// Aliases:
export const NORMAL          = NORMAL_INTENSITY
export const REVEAL          = NOT_HIDDEN
export const NOT_CONCEALED   = NOT_HIDDEN
export const NOT_CROSSED_OUT = NOT_STRIKE

// 3. FOREGROUND-COLORS:
export const BLACK   = '\x1b[30m'
export const RED     = '\x1b[31m'
export const GREEN   = '\x1b[32m'
export const YELLOW  = '\x1b[33m'
export const BLUE    = '\x1b[34m'
export const MAGENTA = '\x1b[35m'
export const CYAN    = '\x1b[36m'
export const WHITE   = '\x1b[37m'

// 3. BACKGROUND-COLORS:
/**   Black background */ export const $BLACK   = '\x1b[40m'
/**     Red background */ export const $RED     = '\x1b[41m'
/**   Green background */ export const $GREEN   = '\x1b[42m'
/**  Yellow background */ export const $YELLOW  = '\x1b[43m'
/**    Blue background */ export const $BLUE    = '\x1b[44m'
/** Magenta background */ export const $MAGENTA = '\x1b[45m'
/**    Cyan background */ export const $CYAN    = '\x1b[46m'
/**   White background */ export const $WHITE   = '\x1b[47m'

//--- Aliases: -----------------------------------------------------/

/** Reset */ export const T   = RESET
/** Reset */ export const RT  = RESET
/** Reset */ export const RST = RESET

/** Bold */ export const D   = BOLD
/** Bold */ export const BD  = BOLD
/** Bold */ export const BLD = BOLD
/** Not Bold */ export const _D   = NOT_BOLD
/** Not Bold */ export const _BD  = NOT_BOLD
/** Not Bold */ export const _BLD = NOT_BOLD

/** Faint */ export const F  = FAINT
/** Faint */ export const FT = FAINT
/** Dim */ export const DM = DIM

/** Normal Intensity */ export const N   = NORMAL_INTENSITY
/** Normal Intensity */ export const NI  = NORMAL_INTENSITY
/** Normal */ export const NM  = NORMAL
/** Normal */ export const NML = NORMAL

/** Italic */ export const I   = ITALIC
/** Italic */ export const IT  = ITALIC
/** Italic */ export const ITL = ITALIC
/** Not Italic */ export const _I   = NOT_ITALIC
/** Not Italic */ export const _IT  = NOT_ITALIC
/** Not Italic */ export const _ITL = NOT_ITALIC

/** Underline */ export const U   = UNDERLINE
/** Underline */ export const UL  = UNDERLINE
/** Underline */ export const UNL = UNDERLINE
/** Not Underlined */ export const _U   = NOT_UNDERLINED
/** Not Underlined */ export const _UL  = NOT_UNDERLINED
/** Not Underlined */ export const _UNL = NOT_UNDERLINED

/** Doubly Underlined */ export const UU  = DOUBLY_UNDERLINED
/** Doubly Underlined */ export const DU  = DOUBLY_UNDERLINED
/** Doubly Underlined */ export const DUL = DOUBLY_UNDERLINED

/** Blink */ export const BN  = BLINK
/** Blink */ export const BNK = BLINK
/** Not Blinking */ export const _BN  = NOT_BLINKING
/** Not Blinking */ export const _BNK = NOT_BLINKING

/** Rapid Blink */ export const RB  = RAPID_BLINK
/** Rapid Blink */ export const RBN = RAPID_BLINK

/** Reverse */ export const V   = REVERSE
/** Reverse */ export const RV  = REVERSE
/** Reverse */ export const RVR = REVERSE
/** Not Reversed */ export const _V   = NOT_REVERSED
/** Not Reversed */ export const _RV  = NOT_REVERSED
/** Not Reversed */ export const _RVR = NOT_REVERSED

/** Hidden */ export const H   = HIDDEN
/** Hidden */ export const HN  = HIDDEN
/** Hidden */ export const HDN = HIDDEN
/** Not Hidden */ export const _H   = NOT_HIDDEN
/** Not Hidden */ export const _HN  = NOT_HIDDEN
/** Not Hidden */ export const _HDN = NOT_HIDDEN

/** Strike */ export const S   = STRIKE
/** Strike */ export const ST  = STRIKE
/** Strike */ export const STK = STRIKE
/** Not Strike */ export const _S   = NOT_STRIKE
/** Not Strike */ export const _ST  = NOT_STRIKE
/** Not Strike */ export const _STK = NOT_STRIKE

//------------------------------------------------------------------/

/** Black */ export const K   = BLACK
/** Black */ export const BK  = BLACK
/** Black */ export const BLK = BLACK
/** Black background */ export const $K   = $BLACK
/** Black background */ export const $BK  = $BLACK
/** Black background */ export const $BLK = $BLACK

/** Red */ export const R   = RED
/** Red */ export const RD  = RED
/** Red background */ export const $R   = $RED
/** Red background */ export const $RD  = $RED

/** Green */ export const G   = GREEN
/** Green */ export const GR  = GREEN
/** Green */ export const GRN = GREEN
/** Green background */ export const $G   = $GREEN
/** Green background */ export const $GR  = $GREEN
/** Green background */ export const $GRN = $GREEN

/** Yellow */ export const Y   = YELLOW
/** Yellow */ export const YL  = YELLOW
/** Yellow */ export const YLW = YELLOW
/** Yellow background */ export const $Y   = $YELLOW
/** Yellow background */ export const $YL  = $YELLOW
/** Yellow background */ export const $YLW = $YELLOW

/** Blue */ export const B   = BLUE
/** Blue */ export const BL  = BLUE
/** Blue */ export const BLU = BLUE
/** Blue background */ export const $B   = $BLUE
/** Blue background */ export const $BL  = $BLUE
/** Blue background */ export const $BLU = $BLUE

/** Magenta */ export const M   = MAGENTA
/** Magenta */ export const MG  = MAGENTA
/** Magenta */ export const MGN = MAGENTA
/** Magenta background */ export const $M   = $MAGENTA
/** Magenta background */ export const $MG  = $MAGENTA
/** Magenta background */ export const $MGN = $MAGENTA

/** Cyan */ export const C   = CYAN
/** Cyan */ export const CN  = CYAN
/** Cyan */ export const CYN = CYAN
/** Cyan background */ export const $C   = $CYAN
/** Cyan background */ export const $CN  = $CYAN
/** Cyan background */ export const $CYN = $CYAN

/** White */ export const W   = WHITE
/** White */ export const WT  = WHITE
/** White */ export const WHT = WHITE
/** White background */ export const $W   = $WHITE
/** White background */ export const $WT  = $WHITE
/** White background */ export const $WHT = $WHITE

//------------------------------------------------------------------/

export * as default from './main.js'
