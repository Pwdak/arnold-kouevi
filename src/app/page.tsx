"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home as HomeIcon, Briefcase, Code, Award } from "lucide-react";

// Import de tous les composants d'onglets finalisés
import HomeTab from "./components/tabs/HomeTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import ProjectsTab from "./components/tabs/ProjectsTab";
import CertificationsTab from "./components/tabs/CertificationsTab";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";

export default function Home() {
    // Le tableau final des onglets avec tous les composants réels
    const tabs = [
        { id: "home", label: "Home", icon: HomeIcon, component: <HomeTab /> },
        { id: "experience", label: "Experience", icon: Briefcase, component: <ExperienceTab /> },
        { id: "projects", label: "Projects", icon: Code, component: <ProjectsTab /> },
        { id: "certifications", label: "Certifications", icon: Award, component: <CertificationsTab /> },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // Trouve le composant à afficher en fonction de l'onglet actif
    const activeContent = tabs.find((tab) => tab.id === activeTab)?.component;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
            {/* --- Bouton de Thème --- */}
            <div className="absolute top-5 right-5 z-50 flex items-center gap-4">
                <ThemeToggle />
            </div>

            <div className="w-full max-w-5xl mx-auto">
                {/* --- Section Entête / Profil --- */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">ARNOLD KOUEVI</h1>
                    <p className="text-base md:text-lg text-secondary mt-1">Systems & Network Engineer | Cloud & DevOps | Cybersecurity</p>
                </div>

                {/* --- Section Navigation par Onglets (Responsive) --- */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-1 sm:space-x-2 p-2 bg-black/20 rounded-full border border-white/10 backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-white/60"} relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base font-medium text-white transition focus-visible:outline-2`}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-white/10 border border-white/20"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-20 flex items-center gap-2">
                                    <tab.icon size={16}/>
                                    {/* Le label est masqué sur les très petits écrans pour gagner de la place */}
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Section Contenu de l'Onglet (Responsive) --- */}
                <div className="group relative w-full min-h-[400px] p-4 md:p-8 bg-black/30 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
                    <div className="absolute -inset-px bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-500" style={{ filter: 'blur(15px)' }}></div>
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeContent}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}