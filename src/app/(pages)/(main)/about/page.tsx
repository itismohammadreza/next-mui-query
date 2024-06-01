"use client"
import { useLocales } from "@hooks/useLocales";
import { Button } from "@mui/material";
import { useApp } from "@hooks/useApp";
import { useQuery } from "@tanstack/react-query";
import { dataService } from "@services/dataService";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'About'
// };

const About = () => {
  const {t, changeLocale, currentLocale} = useLocales();
  const {paletteMode, setAppConfig} = useApp();
  const {data, isLoading, refetch} = useQuery({
    queryKey: ["data"],
    queryFn: dataService.getMovies,
    enabled: false
  });

  const changeThemeClick = async () => {
    await refetch();
    setAppConfig({paletteMode: paletteMode === 'dark' ? 'light' : 'dark'});
  }

  return (
      <>
        <h2>About Page</h2>
        <Link href="/">Home</Link>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('title')}</h2>
      </>
  )
}

export default About;
