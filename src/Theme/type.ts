import type {
  ColorSystemOptions,
  CssVarsThemeOptions,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles";

export type ThemeColorScheme = SupportedColorScheme;

type ColorSchemeOptionsExtended = ColorSystemOptions;

export type ThemeOptions = Omit<MuiThemeOptions, "components"> &
  Pick<CssVarsThemeOptions, "defaultColorScheme" | "components"> & {
    colorSchemes?: Partial<Record<ThemeColorScheme, ColorSchemeOptionsExtended>>;
  };

export type TGames = {
  date: Date;
  championship: string;
  team_1_name: string;
  team_1_img: string;

  team_2_name: string;
  team_2_img: string;

  channels: string[];
};

export type TFormattedDate = {
  weekday: string;
  date: string;
  time: string;
};

export type TMainProps = {
  upcomingGamesList: TGames[];
  isLoading: boolean;
};

export type GamesByDay = {
  day: string;
  games: TGames[];
};

export type TcardChampionchipProps = {
  upcomingGamesList: TGames[];
};
