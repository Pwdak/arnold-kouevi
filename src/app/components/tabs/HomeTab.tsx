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
        skills: [
            { name: "AWS", logo: "aws", hasLogo: true },
            { name: "VMware", logo: "vmware", hasLogo: false },
        ] 
    },
    { 
        icon: Zap, 
        title: "DevOps & Automation", 
        skills: [
            { name: "Docker", logo: "docker", hasLogo: true },
            { name: "Kubernetes", logo: "kubernetes", hasLogo: true },
            { name: "OpenShift", logo: "openshift", hasLogo: false },
            { name: "Ansible", logo: "ansible", hasLogo: false },
            { name: "Jenkins", logo: "jenkins", hasLogo: false },
            { name: "Terraform", logo: "terraform", hasLogo: true },
            { name: "GitLab CI", logo: "gitlab", hasLogo: false },
            { name: "Bash", logo: "bash", hasLogo: true }
        ] 
    },
    { 
        icon: Lock, 
        title: "Security & Network", 
        skills: [
            { name: "SSL/TLS", logo: "ssl", hasLogo: false },
            { name: "Firewall", logo: "firewall", hasLogo: false },
            { name: "VPN", logo: "vpn", hasLogo: true }
        ] 
    },
    {
        icon: Monitor,
        title: "Monitoring & Optimization",
        skills: [
            { name: "Prometheus", logo: "prometheus", hasLogo: true },
            { name: "Grafana", logo: "grafana", hasLogo: true },
            { name: "Zabbix", logo: "zabbix", hasLogo: false },
            { name: "ELK Stack", logo: "elk", hasLogo: false }
        ]
    }
];

export default function HomeTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* --- Colonne de Gauche : "About Me" & Contact --- */}
            <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">About Me</h2>
                <p className="text-secondary leading-relaxed">
                    Passionate and certified Linux System Administrator with over 7 years of experience in DevOps engineering. I specialize in managing on-premise and cloud (AWS) infrastructures, virtualization (VMware), containerization (Docker, Kubernetes), automation (Ansible, Jenkins), and monitoring. I handle the entire lifecycle of Linux environments, from deployment to maintenance, with a strong focus on DevOps practices and security.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {socialLinks.map(link => (
                        <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                           className="text-secondary hover:text-primary transition-colors">
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href="/Arnold_KOUEVI_DevOps.pdf" download
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
                               <div key={skill.name} className={`flex items-center justify-center px-4 py-2 rounded-full border border-white/10 ${skill.hasLogo ? 'bg-gray-700/30' : 'bg-accent/10'}`} title={skill.name}>
                                   {skill.hasLogo ? (
                                       <Image 
                                         src={`/logos/${skill.logo}.svg`} 
                                         alt={`Logo ${skill.name}`} 
                                         width={24} 
                                         height={24}
                                         className="object-contain"
                                       />
                                   ) : (
                                       <span className="text-sm font-medium text-secondary">{skill.name}</span>
                                   )}
                                   {skill.hasLogo && <span className="ml-2 text-sm font-medium text-secondary">{skill.name}</span>}
                               </div>
                           ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
