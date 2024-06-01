"use client"
import { useLocales } from "@hooks/useLocales";
import { Button } from "@mui/material";
import { useApp } from "@hooks/useApp";
import { useQuery } from "@tanstack/react-query";
import { dataService } from "@services/dataService";
import Link from "next/link";

const Home = () => {
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
        <Link href="/auth/login">Login</Link>
        <Link href="/about">About</Link>
        <Button variant="contained" onClick={changeThemeClick}>
          {paletteMode}
        </Button>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('title')}</h2>
        تست فارسی 123
      </>
  )
}

export default Home;
