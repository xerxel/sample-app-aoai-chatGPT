import { Stack, Text } from '@fluentui/react'
import styles from './VersionInfo.module.css'

export const VersionInfo = () => {
    const version = "1.0.0"
    const currentDate = new Date().toLocaleString('en-GB', { 
        dateStyle: 'full',
        timeStyle: 'long'
    })

    return (
        <Stack className={styles.versionContainer}>
            <Text className={styles.versionText}>
                Version {version} | {currentDate}
            </Text>
        </Stack>
    )
}
