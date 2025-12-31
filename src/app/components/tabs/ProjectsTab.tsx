"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Loader, AlertTriangle, ExternalLink, Github, ZoomIn } from "lucide-react";
import { motion } from 'framer-motion';
import { Modal } from '@/app/components/ui/Modal';
import { Dialog } from '@headlessui/react';

// --- INTERFACES POUR NOS DONNÉES ---
export interface GitHubProject { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; homepage: string | null; fork?: boolean; owner?: { login: string }; }
export interface ProjectDetails { detailedDescription: string; techStack: string[]; }

const projectDetailsMap: Record<string, ProjectDetails> = {
    'portofolio-arnold-kouevi': { detailedDescription: "Ce portfolio a été construit avec Next.js pour un rendu côté serveur rapide, TypeScript pour la robustesse du code, et Tailwind CSS pour un design moderne et responsive. L'interactivité est gérée par Framer Motion. Le défi était de créer une expérience utilisateur fluide et un design qui reflète des compétences techniques avancées.", techStack: ["nextjs", "react", "typescript", "tailwind", "framermotion"], },
    'k8s-multi-cloud-deployment': { detailedDescription: "Déploiement multi-cloud (AWS, GCP, Azure) d'une application sur Kubernetes, techStack: ["kubernetes", "docker", "aws", "azure", "google-cloud", "terraform", "helm", "argocd"]},
    // Ajoutez vos autres projets ici...
};

export default function ProjectsTab() {
    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<(GitHubProject & ProjectDetails) | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const USERNAME = 'Pwdak';
                
                // Fetch all repos
                const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);
                if (!res.ok) throw new Error(`Erreur API GitHub: ${res.status}.`);
                const allRepos = await res.json();

                // Get owned repos (excluding forks)
                const ownedRepos = allRepos.filter((repo: GitHubProject) => !repo.fork && repo.owner?.login === USERNAME);
                
                // Get contributed repos from public events
                const eventRes = await fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=300`);
                const events = await eventRes.json() as Array<{ repo?: { name: string }; type: string }>;
                
                const contributedRepoNames = new Set<string>();
                events.forEach((event) => {
                    if (event.repo && event.type === 'PushEvent') {
                        const repoName = event.repo.name;
                        // Exclude owned repos
                        if (!repoName.startsWith(`${USERNAME}/`)) {
                            contributedRepoNames.add(repoName);
                        }
                    }
                });

                // Fetch details of contributed repos
                const contributedRepos: GitHubProject[] = [];
                for (const repoFullName of contributedRepoNames) {
                    try {
                        const repoRes = await fetch(`https://api.github.com/repos/${repoFullName}`);
                        if (repoRes.ok) {
                            const repoData = await repoRes.json();
                            // Only add if not a fork
                            if (!repoData.fork) {
                                contributedRepos.push(repoData);
                            }
                        }
                    } catch {
                        // Silently skip on error
                    }
                }

                // Combine: owned repos first, then contributed repos
                const validProjects = [...ownedRepos, ...contributedRepos];
                setProjects(validProjects);
            } catch (err) { setError((err as Error).message); } finally { setLoading(false); }
        }
        fetchProjects();
    }, []);

    const handleProjectClick = (project: GitHubProject) => {
        const details = projectDetailsMap[project.name] || { detailedDescription: project.description || 'Pas de détails supplémentaires.', techStack: project.language ? [project.language.toLowerCase()] : [] };
        setSelectedProject({ ...project, ...details });
        setShowFullDescription(false);
        setIsModalOpen(true);
    };

    if (loading) return <div className="flex items-center justify-center min-h-[400px]"><Loader className="animate-spin h-8 w-8 text-accent"/></div>;
    if (error) return <div className="flex flex-col items-center justify-center min-h-[400px] text-center"><AlertTriangle className="h-12 w-12 text-red-500 mb-4"/><h3 className="text-xl font-bold text-red-400">Erreur de chargement</h3><p className="text-red-300/80 mt-2">{error}</p></div>;

    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="group h-full flex flex-col bg-card-bg p-4 rounded-xl border border-border-color transition-all duration-300 hover:border-accent/50 hover:scale-105">
                                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={() => handleProjectClick(project)}>
                                    <Image src={`/projects/${project.name}.png`} alt={`Aperçu de ${project.name}`} layout="fill" objectFit="cover" onError={(e) => { e.currentTarget.src = '/projects/default-project.png'; }} />
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"><ZoomIn className="text-white h-10 w-10" /></div>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-primary mb-2 truncate">{project.name}</h3>
                                    <p className="text-secondary text-sm flex-grow line-clamp-2">{project.description}</p>
                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color">
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition"><Github size={16}/> Code</a>
                                        {project.homepage && (<a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition"><ExternalLink size={16}/> Démo</a>)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedProject && (<div className="space-y-4">
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-accent pr-8">{selectedProject.name}</Dialog.Title>
                    <div className="relative w-full h-56 md:h-80 mt-4 rounded-lg overflow-hidden border border-border-color bg-black/20"><Image src={`/projects/${selectedProject.name}.png`} alt={`Aperçu de ${selectedProject.name}`} layout="fill" objectFit="cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}/></div>
                    <div className="text-sm text-secondary">
                        <p>{showFullDescription || selectedProject.detailedDescription.length <= 250 ? selectedProject.detailedDescription : `${selectedProject.detailedDescription.substring(0, 250)}...`}</p>
                        {selectedProject.detailedDescription.length > 250 && (<button onClick={() => setShowFullDescription(!showFullDescription)} className="text-accent font-semibold mt-2">{showFullDescription ? 'Voir moins' : 'Voir plus'}</button>)}
                    </div>
                    <div>
                        <h4 className="font-bold text-primary mb-2">Technologies :</h4>
                        <div className="flex flex-wrap gap-4 items-center">{selectedProject.techStack.map(tech => (<div key={tech} className="flex items-center justify-center p-2 bg-gray-700/30 rounded-full" title={tech}><Image src={`/logos/${tech}.svg`} alt={`Logo ${tech}`} width={24} height={24} className="object-contain" /></div>))}</div>
                    </div>
                    <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border-color">
                        <a href={selectedProject.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition font-semibold"><Github size={18}/> Voir le Code</a>
                        {selectedProject.homepage && (<a href={selectedProject.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition font-semibold"><ExternalLink size={18}/> Visiter le Site</a>)}
                    </div>
                </div>)}
            </Modal>
        </>
    );
}