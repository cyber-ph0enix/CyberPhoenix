"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Link } from "lucide-react";
import styles from "./MemberCard.module.css";
import type { Member } from "@/lib/data/members";

function getBadgeClass(tag: string) {
  switch (tag) {
    case "Mentor":
      return styles.tagMentor;
    case "Faculty Advisor":
    case "Founder":
      return styles.tagFounder;
    case "Coordinator":
    case "Co-coordinator":
      return styles.tagCoordinator;
    case "Team Lead":
      return styles.tagTeamLead;
    case "Core Team":
      return styles.tagCore;
    case "Tech Team":
      return styles.tagTech;
    case "Media Team":
      return styles.tagMedia;
    case "Web Team":
      return styles.tagWeb;
    default:
      return "";
  }
}

export default function MemberCard({ member }: { member: Member }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const renderTags = () => (
    <>
      {member.roles.map(
        (r) =>
          r !== "Member" && (
            <span key={r} className={`${styles.badge} ${getBadgeClass(r)}`}>
              {r}
            </span>
          ),
      )}
      {member.teams.map((t) => (
        <span key={t} className={`${styles.badge} ${getBadgeClass(t)}`}>
          {t}
        </span>
      ))}
    </>
  );

  return (
    <>
      <motion.div
        layoutId={`card-${member.id}`}
        className={styles.card}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.h2 layoutId={`name-${member.id}`} className={styles.name}>
          {member.name}
        </motion.h2>
        <motion.div layoutId={`tags-${member.id}`} className={styles.tags}>
          {renderTags()}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className={styles.overlay} onClick={() => setIsOpen(false)}>
            <motion.div
              layoutId={`card-${member.id}`}
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              <div>
                <motion.h2
                  layoutId={`name-${member.id}`}
                  className={styles.modalTitle}
                >
                  {member.name}
                </motion.h2>
                <motion.div
                  layoutId={`tags-${member.id}`}
                  className={styles.tags}
                  style={{ marginTop: "0.5rem" }}
                >
                  {renderTags()}
                </motion.div>
              </div>

              {member.reason && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={styles.reason}
                >
                  "{member.reason}"
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.socials}
              >
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Link size={18} /> LinkedIn
                  </a>
                )}
                
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
