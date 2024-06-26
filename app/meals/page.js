import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid/meals-grid";
import classes from "./meals-page.module.css";
import { getMeals } from "@/lib/meals";

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={classes.highlight}>by you!</span>
				</h1>

				<p>Choose your favorite recipe and cook it yourself!</p>

				<p className={classes.cta}>
					<Link href='./meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>

			<main className={classes.main}>
				<Suspense
					fallback={<h2 className={classes.loading}>Fetching Meals.....</h2>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}

// Created this component to fetch meals asynchronously and to leverage Suspense from React
async function Meals() {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
}
