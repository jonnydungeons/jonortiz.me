'use strict'

const CreateDate = () => {
  let today = new Date(),
  year = today.getFullYear(),
  month = today.getMonth(),
  day = today.getDate(),
  hour = today.getHours(),
  minute = today.getMinutes(),
  second = today.getSeconds(),
  date = new Date(Date.UTC(year, month, day, hour, minute, second)).toString()

  return date
}

const LudwigIsRunning = (server) => {
  //https://manytools.org/hacker-tools/convert-images-to-ascii-art/go
console.log('Dub...dub...dub...dot...Ludwig...dot...com is running @', server, 'on', CreateDate())


console.log('                                                                                                                         &                              ')
console.log('                      @.                                                                                                @@@                             ')
console.log('                    @@@@                                                                                               @@@@@                            ')
console.log('                  #@@@@@@                                                                                             &@@@@@@.                          ')
console.log('                 @@@@@@@@&                                                                                           &@@@@@@@@.                         ')
console.log('               %@@@@@@@@@@.                                                                                         &@@@@@@@@@@,                        ')
console.log('              @@@@@@@@@@@@@#                                                                                       @@@@@@@@@@@@@.                       ')
console.log('             @@@@@@@@@@@@@@@@*                                                                                   @@@@@@@@@@@@@@@@.                      ')
console.log('            @@@@@@@@@@@@@@@@@@@@@,                                                                            #@@@@@@@@@@@@@@@@@@@                      ')
console.log('           %@@@@@@@#  @@@@@@@@@@@@@@                                                                       #@@@@@@@@@@@@  @@@@@@@@@                     ')
console.log('          .@@@@@@@@     @@@@@@@@@@@@@@                                                                   %@@@@@@@@@@@@.    @@@@@@@@,                    ')
console.log('          @@@@@@@@.       .&@@@@@@@@@@@%                ,*                           *.                #@@@@@@@@@@@#       (@@@@@@@@                    ')
console.log('          @@@@@@@&            ,@@@@@@@@@@&@@@@@@@@@@@@@@@@@@@#                   %@@@@@@@@@@@@@@@@@@@&@@@@@@@@@@(           @@@@@@@@/                   ')
console.log('         *@@@@@@@,              ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*           %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.             ,@@@@@@@@                   ')
console.log('         /@@@@@@@,                &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                @@@@@@@@                   ')
console.log('         *@@@@@@@,                 ,@@@@@@@@@@@@@@@@@&%#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(%&@@@@@@@@@@@@@@@@@&                  @@@@@@@@                   ')
console.log('         .@@@@@@@%                  /&%/,.                 /@@@@@@@@@@@@@@@@@@@@@@%                  .*#%@                   @@@@@@@@                   ')
console.log('          @@@@@@@@                                             %@@@@@@@@@@@@@@&.                                            .@@@@@@@@                   ')
console.log('          @@@@@@@@                                                 &@@@@@@@.                                                 @@@@@@@@                   ')
console.log('          @@@@@@@@                                                   %@@@                                                    @@@@@@@@                   ')
console.log('         .@@@@@@@%                                                   %@@@                                                    &@@@@@@@.                  ')
console.log('         %@@@@@@@,                                                   %@@@                                                    ,@@@@@@@&                  ')
console.log('         @@@@@@@@                   #@*          (@,                 %@@@                  @%.          @&.                   @@@@@@@@                  ')
console.log('        &@@@@@@@#                 .@@@@         @@@@.                %@@@                 @@@@(        #@@@&                  %@@@@@@@@                 ')
console.log('       @@@@@@@@@                   ,@@@@        *@@@@                %@@@                &@@@@        (@@@@                    @@@@@@@@/                ')
console.log('       @@@@@@@@           (@@@.     &@@@@        (@@@@               %@@@               ,@@@@         @@@@      @@@&           #@@@@@@@@                ')
console.log('       (@@@@@@@&           @@@@.     @@@@(        #@@@&              %@@@              .@@@@         @@@@.     @@@@#          ,@@@@@@@@,                ')
console.log('        @@@@@@@@*           @@@@#     @@@@(        @@@@%             %@@@              @@@@(        @@@@/    .@@@@/           @@@@@@@@%                 ')
console.log('         @@@@@@@@            @@@@@%    @@@@@%       @@@@@@           %@@@           .@@@@@(      ,@@@@@&   ,@@@@@/           (@@@@@@@@                  ')
console.log('         (@@@@@@@&            @@@@@@     @@@@@&       @@@@@@                      #@@@@@/      /@@@@@#    &@@@@@#           .@@@@@@@@                   ')
console.log('          @@@@@@@@/           @@@@.        @@@@@        &@@@@.                   %@@@@,       &@@@@.        %@@@#           @@@@@@@@#                   ')
console.log('           @@@@@@@@           @@@@           #            %,                       &            %           .@@@#          @@@@@@@@@                    ')
console.log('           .@@@@@@@&          @@@@                                                                          .@@@#         ,@@@@@@@@                     ')
console.log('            @@@@@@@@*         @@@@               @@*                                      @@.               .@@@#         @@@@@@@@%                     ')
console.log('             @@@@@@@@         @@@@               @@@@@(                                @@@@@.               .@@@#        &@@@@@@@@                      ')
console.log('             .@@@@@@@@        @@@@               @@@@@@@@#                         .@@@@@@@@,               .@@@#       .@@@@@@@@                       ')
console.log('              @@@@@@@@/       @@@@               @@@@%@@@@@@(                   ,@@@@@@@#@@@,               .@@@#       @@@@@@@@/                       ')
console.log('            .@@@@@@@@@*       @@@@               @@@@   #@@@@@@%             /@@@@@@@   (@@@/               .@@@#       @@@@@@@@@@                      ')
console.log('           #@@@@@@@@@         @@@@               ,,,*   @@@@@@@               (@@@@@@%  .,,,.               .@@@#        #@@@@@@@@@*                    ')
console.log('          @@@@@@@@@(          @@@@                      @@@@@                   #@@@@%                      .@@@#          @@@@@@@@@@                   ')
console.log('        *@@@@@@@@@            @@@@                      @@@@@                   #@@@@%                      .@@@#           &@@@@@@@@@.                 ')
console.log('       ,@@@@@@@@@             @@@@                                .@@@@@@@@                                 .@@@#            *@@@@@@@@%                 ')
console.log('         @@@@@@@@@@           @@@@@@@*                            @@@@@@@@@*                            .&@@@@@@#          /@@@@@@@@@#                  ')
console.log('          #@@@@@@@@@@/          ,@@@@@@@@/                            ,                             .&@@@@@@@(           @@@@@@@@@@@(                   ')
console.log('            @@@@@@@@@@@@%.          ,@@@@@@@@#                @@@@@@@@@@@@@@@@@*                .@@@@@@@@(          (@@@@@@@@@@@@@@                     ')
console.log('              @@@@@@@@@@@@@@@@@&%%%%    /@@@@@@@@,          .@@@@@@@@@@@@@@@@@@@(            %@@@@@@@&    %&&%%@@@@@@@@@@@@@@@@@@                       ')
console.log('                %@@@@@@@@@@@@@@@@@&         /@@@@@@@@,       @@@*            @@@*        &@@@@@@@%         .@@@@@@@@@@@@@@@@@@/                         ')
console.log('                   &@@@@@@@@@@@@@(              *@@@@@@@@/                           &@@@@@@@%               @@@@@@@@@@@@@&                             ')
console.log('                       @@@@@@@@@                    ,@@@@@@@@/                  .&@@@@@@@(                    %@@@@@@@@@                                ')
console.log('                     .@@@@@@@@@                         ,@@@@@@@@/          .@@@@@@@@(                         /@@@@@@@@@                               ')
console.log('                    #@@@@@@@@#                         ,%@@@@@@@@@@@@,   %@@@@@@@@@@@@#.                         @@@@@@@@@*                             ')
console.log('                   @@@@@@@@@*                 ,#@@@@@@@@@@@@@@@%/@@@@@@@@@@@@%#@@@@@@@@@@@@@@@&/.                 @@@@@@@@@#                            ')
console.log('                 .@@@@@@@@@          .(@@@@@@@@@@@@@@@&(  #@@@@@@&* *@@@@% .%@@@@@@&* ,%@@@@@@@@@@@@@@@%,          (@@@@@@@@@                           ')
console.log('                *@@@@@@@@&   /&@@@@@@@@@@@@@@@@*   ,%@@@@@@%.   .%@@@@@@@@@@&*    #@@@@@@&/   .&@@@@@@@@@@@@@@@@#,  ,@@@@@@@@@.                         ')
console.log('               @@@@@@@@@@@@@@@@@@@@@@@@@#.   ,&@@@@@@(.   *&@@@@@@%.       /&@@@@@@(.   *@@@@@@@#.   ,&@@@@@@@@@@@@@@@@@@@@@@@@%                        ')
console.log('              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(    /@@@@@@@/    /&@@@@@@@@@%.   ,&@@@@@@#.   ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       ')
console.log('            ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(    /@@@@@@@(    .   ,%@@@@@@%,   ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                      ')
console.log('           (@@@@@@@@@@@@@@@@@&(.,%@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@#.,#@@@@@@@@@@@@@@@@@@,                    ')
console.log('          @@@@@@@@@@@%,                *&@@@@@@@@@@@@@@@@@@@@@@@              #@@@@@@@@@@@@@@@@@@@@@@@%,                ,%@@@@@@@@@@&                   ')
console.log('         @@@%*                                /&@@@@@@@@@@@@@@   #@@      &@@   (@@@@@@@@@@@@@@&*                               ./&@@@                  ')
console.log('                                                /@@@@@@@@@@@@@@@@@@        &@@@@@@@@@@@@@@@@@@                                                          ')
console.log('                                              (@@@@@@@@@@@@@@@@@@@@@@@(,@@@@@@@@@@@@@@@@@@@@@@@@,                                                       ')
console.log('                                            .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                                      ')
console.log('                                                         .*#&@@@@@@@@@@@@@@@@@@@@@%(*.                                                                  ')
console.log('                                                                  *@@@@@@@@@,                                                                           ')
console.log('                                                                      ,&                                                                                ')

}


const MindCtrlIsRunning = (server) => {
  console.log('Dub...dub...dub...dot...Mind...Ctrl...Industries...dot...com is running @', server, 'on', CreateDate())
  console.log('                                     ,▄▒▓▓█▄')
  console.log('                                    ╣▓▀░░░░▓▓▄,')
  console.log('                                   j▓▌░░░╙▀▀▀▀▀▓▄')
  console.log('                                ,▒▓▀▀▀▀╪╡░░░░░░░▓▓')
  console.log('                               ╓▓▀░░░░░░░░░░░▄▄▒▓▓')
  console.log('                              ╓▓▓▌░░░░░░░░░╣▓▀░░░▀▓▓▄')
  console.log('                             ▓▓▀▀▀█▄▓▀░░░░║░░░░░░░░╚▓')
  console.log('                            ]▓▌░░░░░▀░░░░░░░░░░░░░░░╚▓')
  console.log('                          ╓▄▓▓▓▒æ░░░░▌░░░░░░╔▒░░░░░░░▓▓')
  console.log('                        ,▓▓▓▀░░░░▄░░░░▓▄▄▄▄▄▌░░░░░░░▒▓▓▓▓▄')
  console.log('                        ▓▓▓░░░░░░╣▀▀▀^      ▀▄░▄░░░░░░░░▀▓')
  console.log('                       ║▓▓▌░░░░░▓      %▄╖    ▐▓░░░░░░░░░▓▓')
  console.log('                       ▐▓▓░░░░░║▌   ,  ╫▓▓▓    ╙▀▄░░░░░░▒▓▓▄')
  console.log('                    ╓▒▓▀▀▀▌░░░░║▌   ▀▓▓▓▓▓▓     ]▌░░░░░░░░▀▓▓')
  console.log('                   ╫▓▀░░░░░░░║▌░▀╕    ▒▒▒    ,▄▄▄▓░░▄▄░░░░░░▓▓')
  console.log('                   ▓▓░░░░░░░▄▓▀░░▀▒        ▒▀░░░║▀░░░░░░░░░▓▓▓▒,')
  console.log('                  ╓▓▓▌▄╪░░░░░▀▌░░░░▀▀▒▄╖▒▀▀░░░░░▀░░░░░░░░░╣▓▀║▓▓')
  console.log('                ▄▓▓▀▀░░░░░░░░║▓░░░░░░░░▌░░▄░░░░░░░░░░░░▄▒▓▀░░▓▓▓,')
  console.log('              ╓▓▓▀░░░░░░▄▄▄▄▓▌░░░░░░░▄░░░║▌░░░░░░░░░░░░░░╙▌░░░░▀▓▓▄')
  console.log('             ╒▓▓▀░░░░░▀░░░░░░░▀▌░░░#▀▀▀▀▓▓▓▒█▀▀░░░░░░░░░░░▓▌░░░░░╙▓▌')
  console.log('           ╓▄▓▓▌░░░░░░░░░░░░░░░║▌░░░░░░░▐▓░░░░░░░░░░╦░░░▄▓▀░░░░░▓▄║▓▌')
  console.log('         ╒▓▓▀░▓░░░░░░░░░░░░░░░░▐▌▓▄░░░░░║░░░░░░░░░░░░░░░░░░░░░░░╫▀Φ▓▓▓╖')
  console.log('         ▓▓░░░░░░░░░░░░░░░▒░░░░╬░▓▓░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░░░░░▀▓▓')
  console.log('         ╙▓▌▄▄▄▓▌░░░░░▄╣▓▓░░░░░░╣▓▌░░░░░░▄▄░░░░░░║▓▄░░░░░░▀▓▒▄▄▄▄▒▀░░▓▓▓')
  console.log('          ▀██▀▀▀▀▓▓▓▓▀▀▀█▓▓▓▓▓▀▀▀▓▓▓▓▓▓▀▀▓▓▓▓▓▓▀▀▀▓▓▓▓▓▓█▀╙▀▀▀▀▀▓▓▓▀▀')
  console.log('                                                                       ')
  console.log('        ║▒▄ ▒▒   ▒█   ▒▒ ▒▌   ▒▒▒▒ε         ]▒▒▒▄   ║▒▒▒▒   ║▒▒▒▄   ▒▒')
  console.log('        ║▓▓▓▓▓   ▓▓   ▓▓▓▓▌   ▓▌j▓▌         ▐▓⌐       ▓▌    ║▓ ║▓   ║▓')
  console.log('        ║▓▓▓▓▓   ▓▓   ▓▓▓▓▌   ▓▌j▓▌         ▐▓        ▓▌    ║▓▓▓▄   ║▓')
  console.log('        ║▓▐▓▀▓   ▓▓   ▓▌▓▓▌   ▓▌▄▓▌         ▐▓▄║▓     ▓▌    ║▓ ║▓   ║▓╖▓▓')
  console.log('        ║▓  ║▓   ▓▓   ▓ └▓▌    ▀▓▓▌           ▀▓▓     ▓▌     ▀ ║▓    ╙▀▓▓')
  console.log('            "▀   ╙▀                             ╙     ▀▌         ▀       ▀')
}

module.exports = {
  MindCtrlIsRunning: MindCtrlIsRunning,
  LudwigIsRunning: LudwigIsRunning,
  CreateDate: CreateDate()
}
