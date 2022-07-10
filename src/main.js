/**
 * @author <a href="https://mirismaili.github.io">S. Mahdi Mir-Ismaili</a>.
 * Created on 1397/12/26 (2019/3/17).
 *
 * See: https://en.wikipedia.org/wiki/ANSI_escape_code
 */
  
  // Colors and styles by [bodi0](https://stackoverflow.com/users/632524/bodi0):
  //      https://stackoverflow.com/a/41407246/5318303

export const RESET      =  '\x1b[0m';
export const BRIGHT     =  '\x1b[1m';
export const DIM        =  '\x1b[2m';
export const UNDERSCORE =  '\x1b[4m';
export const BLINK      =  '\x1b[5m';
export const REVERSE    =  '\x1b[7m';
export const HIDDEN     =  '\x1b[8m';

export const FG_BLACK   = '\x1b[30m';
export const FG_RED     = '\x1b[31m';
export const FG_GREEN   = '\x1b[32m';
export const FG_YELLOW  = '\x1b[33m';
export const FG_BLUE    = '\x1b[34m';
export const FG_MAGENTA = '\x1b[35m';
export const FG_CYAN    = '\x1b[36m';
export const FG_WHITE   = '\x1b[37m';

export const BG_BLACK   = '\x1b[40m';
export const BG_RED     = '\x1b[41m';
export const BG_GREEN   = '\x1b[42m';
export const BG_YELLOW  = '\x1b[43m';
export const BG_BLUE    = '\x1b[44m';
export const BG_MAGENTA = '\x1b[45m';
export const BG_CYAN    = '\x1b[46m';
export const BG_WHITE   = '\x1b[47m';

//------------------------------------------------------------------/
  
export const T   = RESET
export const RS  = RESET
export const RT  = RESET
export const RST = RESET

export const D    = BRIGHT
export const BD   = BRIGHT
export const BR   = BRIGHT
export const BLD  = BRIGHT
export const BRT  = BRIGHT
export const BOLD = BRIGHT

export const I   = DIM
export const DM  = DIM
// export const DIM = DIM

export const U         = UNDERSCORE
export const UL        = UNDERSCORE
export const US        = UNDERSCORE
export const UNL       = UNDERSCORE
export const UNS       = UNDERSCORE
export const UNDERLINE = UNDERSCORE

export const N   = BLINK
export const BN  = BLINK
export const BNK = BLINK

export const V   = REVERSE
export const RV  = REVERSE
export const RVR = REVERSE

export const H   = HIDDEN
export const HN  = HIDDEN
export const HDN = HIDDEN

//------------------------------------------------------------------/

export const K       = FG_BLACK
export const BK      = FG_BLACK
export const BLK     = FG_BLACK
export const BLACK   = FG_BLACK

export const R       = FG_RED
export const RD      = FG_RED
export const RED     = FG_RED

export const G       = FG_GREEN
export const GR      = FG_GREEN
export const GRN     = FG_GREEN
export const GREEN   = FG_GREEN

export const Y       = FG_YELLOW
export const YL      = FG_YELLOW
export const YLW     = FG_YELLOW
export const YELLOW  = FG_YELLOW

export const B       = FG_BLUE
export const BL      = FG_BLUE
export const BLU     = FG_BLUE
export const BLUE    = FG_BLUE

export const M       = FG_MAGENTA
export const MG      = FG_MAGENTA
export const MGN     = FG_MAGENTA
export const MAGENTA = FG_MAGENTA

export const C       = FG_CYAN
export const CN      = FG_CYAN
export const CYN     = FG_CYAN
export const CYAN    = FG_CYAN

export const W       = FG_WHITE
export const WT      = FG_WHITE
export const WHT     = FG_WHITE
export const WHITE   = FG_WHITE

//------------------------------------------------------------------/

export const $K       = BG_BLACK
export const $BK      = BG_BLACK
export const $BLK     = BG_BLACK
export const $BLACK   = BG_BLACK

export const $R       = BG_RED
export const $RD      = BG_RED
export const $RED     = BG_RED

export const $G       = BG_GREEN
export const $GR      = BG_GREEN
export const $GRN     = BG_GREEN
export const $GREEN   = BG_GREEN

export const $Y       = BG_YELLOW
export const $YL      = BG_YELLOW
export const $YLW     = BG_YELLOW
export const $YELLOW  = BG_YELLOW

export const $E       = BG_BLUE
export const $BL      = BG_BLUE
export const $BLU     = BG_BLUE
export const $BLUE    = BG_BLUE

export const $M       = BG_MAGENTA
export const $MG      = BG_MAGENTA
export const $MGN     = BG_MAGENTA
export const $MAGENTA = BG_MAGENTA

export const $C       = BG_CYAN
export const $CN      = BG_CYAN
export const $CYN     = BG_CYAN
export const $CYAN    = BG_CYAN

export const $W       = BG_WHITE
export const $WT      = BG_WHITE
export const $WHT     = BG_WHITE
export const $WHITE   = BG_WHITE

export * as default from './main.js'
