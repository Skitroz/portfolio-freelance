import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"


function NotFound() {
    return (
        <main className="flex-1">
            <section className="container flex flex-col mx-auto h-screen mt-[-100px] items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                        404 - Page non trouvée
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                        Oops! La page que vous recherchez n&apos;existe pas.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/">
                            Retour à l&apos;accueil
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/contact">
                            Contactez l&apos;administrateur
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default NotFound