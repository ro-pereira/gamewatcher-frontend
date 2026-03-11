import type {
  ColorSystemOptions,
  CssVarsThemeOptions,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

export type ThemeColorScheme = SupportedColorScheme;

type ColorSchemeOptionsExtended = ColorSystemOptions;

export type ThemeOptions = Omit<MuiThemeOptions, "components"> &
  Pick<CssVarsThemeOptions, "defaultColorScheme" | "components"> & {
    colorSchemes?: Partial<Record<ThemeColorScheme, ColorSchemeOptionsExtended>>;
  };

export type Games = {
  date: Date;
  championship: string;
  team_1_name: string;
  team_1_img: string;

  team_2_name: string;
  team_2_img: string;

  channels: string[];
};

export type FormattedDate = {
  weekday: string;
  date: string;
  time: string;
};

export type TMainProps = {
  upcomingGamesList: Games[];
  isLoading: boolean;
};

export type GamesByDay = {
  day: string;
  games: Games[];
};

export type TTeamNameAndIcon = {
    teamName: string,
    teamImg: string
}

export type TGameHour = {
  gameDate: Date | string,
   variantChange?: TypographyProps["variant"];
};