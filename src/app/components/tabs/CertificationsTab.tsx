"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Modal } from '@/app/components/ui/Modal';
import { Dialog } from '@headlessui/react';
import { ExternalLink } from 'lucide-react';

const certifications = [
    { name: 'Google Cloud Certified Associate Cloud Engineer', issuer: 'Google Cloud', logo: '/logos/google-cloud.svg', url: 'https://www.credly.com/badges/8edc48d4-62f8-4a5e-afc2-664bac2a7623/public_url' },
    { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', logo: '/logos/cisco.svg', url: 'https://www.credly.com/badges/2dad3f6a-b747-4f97-b5ad-04742e89f991/public_url' },
    { name: 'ISO/IEC 27001 Information Security Associate', issuer: 'SkillFront', logo: '/logos/skillfront.svg', url: 'https://www.skillfront.com/Badges/08130013406379' },
    { name: 'Certified Associate In Scrum Fundamentals (CASF)', issuer: 'SkillFront', logo: '/logos/skillfront.svg', url: 'https://www.skillfront.com/Badges/79639064273882' },
    { name: 'Cybersecurity Fundamentals', issuer: 'IBM SkillsBuild', logo: '/logos/ibm.svg', url: 'https://www.credly.com/earner/earned/badge/85490e33-5538-4f25-ac25-4f1c8962d6dd' },
    { name: 'Fortinet Certified Associate', issuer: 'Fortinet', logo: '/logos/fortinet.svg', url: 'https://credly.com/badges/341c49e1-ee50-4198-9add-7d58af3c1032' },
    { name: 'Introduction to Kubernetes LFS158', issuer: 'The Linux Foundation', logo: '/logos/linux-foundation.svg', url: 'https://www.credly.com/badges/1255106a-efbf-446e-bcd4-43b68b7a8540/public_url' },
    { name: 'CrowdSec Driven Cybersecurity Certificate', issuer: 'CrowdSec', logo: '/logos/crowdsec.svg', url: 'https://mycourse.app/CBjeBDzU0EJN9HTLX' },
    { name: 'CrowdSec Threat Intelligence certificate', issuer: 'CrowdSec', logo: '/logos/crowdsec.svg', url: 'https://mycourse.app/pkxOQWQe64w8DaWVQ' },
    { name: 'CTI Level Threat intelligence Analyst Certificate', issuer: 'arcX', logo: '/logos/arcx.webp', url: 'https://arcx.io/verify-certificate?id=57c66840dc18ac10768a1626185615127222065a&k=e52ae2e391e84596b27427863b951eab' },

    { name: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', logo: '/logos/cisco.svg', url: 'https://www.credly.com/earner/earned/badge/8e2ee3bf-7de6-419b-9e06-faf45cbc3654' },
];

type Certification = typeof certifications[0];

export default function CertificationsTab() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCertClick = (certification: Certification) => {
        setSelectedCert(certification);
        setIsModalOpen(true);
    };

    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">Certifications & Badges</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div 
                            key={cert.name}
                            className="group block p-4 bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all duration-300 text-center cursor-pointer"
                            onClick={() => handleCertClick(cert)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="relative flex justify-center items-center h-20 mb-4">
                                <Image 
                                    src={cert.logo} 
                                    alt={`Logo de ${cert.issuer}`}
                                    width={70} 
                                    height={70} 
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="font-semibold text-white text-sm leading-tight">{cert.name}</h3>
                            <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedCert && (
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-accent pr-8">{selectedCert.name}</Dialog.Title>
                        
                        <div className="relative w-32 h-32 mt-4">
                           <Image src={selectedCert.logo} alt={`Logo de ${selectedCert.issuer}`} layout="fill" objectFit="contain"/>
                        </div>
                        
                        <p className="text-lg text-primary">{selectedCert.issuer}</p>

                        <a href={selectedCert.url} target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-colors mt-4">
                           <ExternalLink size={18} />
                           Check the Certification
                        </a>
                    </div>
                )}
            </Modal>
        </>
    )
}
