<?php declare(strict_types=1);

namespace SwMapsCms\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Core\Content\Product\ProductEvents;
use Shopware\Core\System\SystemConfig\SystemConfigService;

class MySubscriber implements EventSubscriberInterface
{
    private SystemConfigService $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
        $apiKeyConfig = $this->systemConfigService->get('SwMapsCms.config.googleMapsApiKey', null);
        echo "<script>console.log('Google API Key: " . $apiKeyConfig . "' );</script>";
    }
}