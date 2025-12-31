"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Modal } from '@/app/components/ui/Modal';
import { Dialog } from '@headlessui/react';
import { ExternalLink } from 'lucide-react';

const certifications = [
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'AWS', logo: '/logos/aws.svg', url: 'https://www.credly.com/badges/2aa15d2c-418a-4e37-ad94-45a9208079b8/public_url' },
    { name: 'Linux System Administrator', issuer: 'CompTIA', logo: '/logos/comptia.svg', url: 'https://www.credly.com/badges/51164211-5a39-45d5-9553-0a70e56ce149/public_url' },
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
