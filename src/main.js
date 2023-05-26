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
export const $BLACK   = '\x1b[40m'
export const $RED     = '\x1b[41m'
export const $GREEN   = '\x1b[42m'
export const $YELLOW  = '\x1b[43m'
export const $BLUE    = '\x1b[44m'
export const $MAGENTA = '\x1b[45m'
export const $CYAN    = '\x1b[46m'
export const $WHITE   = '\x1b[47m'

//--- Aliases: -----------------------------------------------------/

export const T   = RESET
export const RT  = RESET
export const RST = RESET

export const D   = BOLD
export const BD  = BOLD
export const BLD = BOLD
export const _D   = NOT_BOLD
export const _BD  = NOT_BOLD
export const _BLD = NOT_BOLD

export const F  = FAINT
export const FT = FAINT
export const DM = DIM

export const N   = NORMAL_INTENSITY
export const NI  = NORMAL_INTENSITY
export const NM  = NORMAL
export const NML = NORMAL

export const I   = ITALIC
export const IT  = ITALIC
export const ITL = ITALIC
export const _I   = NOT_ITALIC
export const _IT  = NOT_ITALIC
export const _ITL = NOT_ITALIC

export const U   = UNDERLINE
export const UL  = UNDERLINE
export const UNL = UNDERLINE
export const _U   = NOT_UNDERLINED
export const _UL  = NOT_UNDERLINED
export const _UNL = NOT_UNDERLINED

export const UU  = DOUBLY_UNDERLINED
export const DU  = DOUBLY_UNDERLINED
export const DUL = DOUBLY_UNDERLINED

export const BN  = BLINK
export const BNK = BLINK
export const _BN  = NOT_BLINKING
export const _BNK = NOT_BLINKING

export const RB  = RAPID_BLINK
export const RBN = RAPID_BLINK

export const V   = REVERSE
export const RV  = REVERSE
export const RVR = REVERSE
export const _V   = NOT_REVERSED
export const _RV  = NOT_REVERSED
export const _RVR = NOT_REVERSED

export const H   = HIDDEN
export const HN  = HIDDEN
export const HDN = HIDDEN
export const _H   = NOT_HIDDEN
export const _HN  = NOT_HIDDEN
export const _HDN = NOT_HIDDEN

export const S   = STRIKE
export const ST  = STRIKE
export const STK = STRIKE
export const _S   = NOT_STRIKE
export const _ST  = NOT_STRIKE
export const _STK = NOT_STRIKE

//------------------------------------------------------------------/

export const K   = BLACK
export const BK  = BLACK
export const BLK = BLACK
export const $K   = $BLACK
export const $BK  = $BLACK
export const $BLK = $BLACK

export const R   = RED
export const RD  = RED
export const $R   = $RED
export const $RD  = $RED

export const G   = GREEN
export const GR  = GREEN
export const GRN = GREEN
export const $G   = $GREEN
export const $GR  = $GREEN
export const $GRN = $GREEN

export const Y   = YELLOW
export const YL  = YELLOW
export const YLW = YELLOW
export const $Y   = $YELLOW
export const $YL  = $YELLOW
export const $YLW = $YELLOW

export const B   = BLUE
export const BL  = BLUE
export const BLU = BLUE
export const $B   = $BLUE
export const $BL  = $BLUE
export const $BLU = $BLUE

export const M   = MAGENTA
export const MG  = MAGENTA
export const MGN = MAGENTA
export const $M   = $MAGENTA
export const $MG  = $MAGENTA
export const $MGN = $MAGENTA

export const C   = CYAN
export const CN  = CYAN
export const CYN = CYAN
export const $C   = $CYAN
export const $CN  = $CYAN
export const $CYN = $CYAN

export const W   = WHITE
export const WT  = WHITE
export const WHT = WHITE
export const $W   = $WHITE
export const $WT  = $WHITE
export const $WHT = $WHITE

//------------------------------------------------------------------/

export * as default from './main.js'
