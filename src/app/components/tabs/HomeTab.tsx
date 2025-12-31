"use client";
import Image from 'next/image';
import { Download, Cloud, Lock, Zap, BarChart, Monitor } from 'lucide-react';
import { FaLinkedin, FaMedium, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// --- Données pour les liens et compétences ---
const socialLinks = [
    { icon: MdEmail, url: 'mailto:koueviarnold@gmail.com', name: 'Email' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/arnold-kouevi', name: 'LinkedIn' },
];

const skillCategories = [
    { 
        icon: Cloud, 
        title: "Cloud & Infrastructure", 
        skills: ["aws", "kubernetes", "docker", "azure", "google-cloud"] 
    },
    { 
        icon: Zap, 
        title: "DevOps & Automation", 
        skills: ["terraform", "helm", "argocd", "github actions", "bash"] 
    },
    { 
        icon: Lock, 
        title: "Security & Network", 
        skills: ["vpn", "iam", "ssl"] 
    },
    {
        icon: Monitor,
        title: "Monitoring & Optimization",
        skills: ["prometheus", "grafana"]
    }
];

export default function HomeTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* --- Colonne de Gauche : "About Me" & Contact --- */}
            <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">About Me</h2>
                <p className="text-secondary leading-relaxed">
                    Passionate and certified Linux System Administrator with over 6 years of experience in DevOps engineering. I specialize in managing on-premise and cloud (AWS) infrastructures, virtualization (VMware), containerization (Docker, Kubernetes), automation (Ansible, Jenkins), and monitoring. I handle the entire lifecycle of Linux environments, from deployment to maintenance, with a strong focus on DevOps practices and security.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {socialLinks.map(link => (
                        <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                           className="text-secondary hover:text-primary transition-colors">
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href="/Arnold_Kouevi_Admin_Linux.pdf" download
                   className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
                    <Download size={18} />
                    Download my resume
                </a>
            </div>

            {/* --- Colonne de Droite : Compétences --- */}
            <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold text-accent text-center lg:text-left">Skills</h2>
                {skillCategories.map(category => (
                    <div key={category.title} className="p-6 bg-card-bg border border-border-color rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                           <category.icon className="w-6 h-6 text-accent" />
                           <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                           {category.skills.map(skill => (
                               <div key={skill} className="flex items-center justify-center p-2 bg-gray-700/30 rounded-full" title={skill.charAt(0).toUpperCase() + skill.slice(1)}>
                                   <Image 
                                     src={`/logos/${skill}.svg`} 
                                     alt={`Logo ${skill}`} 
                                     width={"37"} 
                                     height={37}
                                     className="object-contain"
                                   />
                               </div>
                           ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}